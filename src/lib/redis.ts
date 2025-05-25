import { Redis } from '@upstash/redis';

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

// Types
export interface UserScore {
  score: number;
  lastUpdated: string;
  currentPlanet: string;
  currentLevel: number;
  completedLevels: string[];
}

export interface UserStatus {
  isActive: boolean;
  lastActive: string;
  currentQuestion: number;
}

// Score related functions
export const getUserScore = async (userId: string): Promise<UserScore | null> => {
  const score = await redis.get<UserScore>(`score:${userId}`);
  return score;
};

export const updateUserScore = async (
  userId: string,
  score: number,
  planet: string,
  level: number
): Promise<void> => {
  const currentScore = await getUserScore(userId);
  const completedLevels = currentScore?.completedLevels || [];
  const levelKey = `${planet}-${level}`;
  
  if (!completedLevels.includes(levelKey)) {
    completedLevels.push(levelKey);
  }

  await redis.set(`score:${userId}`, {
    score: (currentScore?.score || 0) + score,
    lastUpdated: new Date().toISOString(),
    currentPlanet: planet,
    currentLevel: level,
    completedLevels,
  });
};

// Status related functions
export const getUserStatus = async (userId: string): Promise<UserStatus | null> => {
  const status = await redis.get<UserStatus>(`status:${userId}`);
  return status;
};

export const updateUserStatus = async (
  userId: string,
  isActive: boolean,
  currentQuestion: number
): Promise<void> => {
  await redis.set(`status:${userId}`, {
    isActive,
    lastActive: new Date().toISOString(),
    currentQuestion,
  });
};

// Initialize user data
export const initializeUser = async (userId: string): Promise<void> => {
  const initialScore: UserScore = {
    score: 0,
    lastUpdated: new Date().toISOString(),
    currentPlanet: 'mercury',
    currentLevel: 1,
    completedLevels: [],
  };

  const initialStatus: UserStatus = {
    isActive: true,
    lastActive: new Date().toISOString(),
    currentQuestion: 1,
  };

  await redis.set(`score:${userId}`, initialScore);
  await redis.set(`status:${userId}`, initialStatus);
};

// Get user progress
export const getUserProgress = async (userId: string): Promise<{
  score: UserScore | null;
  status: UserStatus | null;
}> => {
  const [score, status] = await Promise.all([
    getUserScore(userId),
    getUserStatus(userId),
  ]);

  return { score, status };
}; 