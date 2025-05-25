import Redis from 'ioredis';

// Initialize Redis client
const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

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
  const scoreData = await redis.get(`score:${userId}`);
  if (!scoreData) return null;
  return JSON.parse(scoreData) as UserScore;
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

  const updatedScore: UserScore = {
    score: (currentScore?.score || 0) + score,
    lastUpdated: new Date().toISOString(),
    currentPlanet: planet,
    currentLevel: level,
    completedLevels,
  };

  await redis.set(`score:${userId}`, JSON.stringify(updatedScore));
};

// Status related functions
export const getUserStatus = async (userId: string): Promise<UserStatus | null> => {
  const statusData = await redis.get(`status:${userId}`);
  if (!statusData) return null;
  return JSON.parse(statusData) as UserStatus;
};

export const updateUserStatus = async (
  userId: string,
  isActive: boolean,
  currentQuestion: number
): Promise<void> => {
  const updatedStatus: UserStatus = {
    isActive,
    lastActive: new Date().toISOString(),
    currentQuestion,
  };

  await redis.set(`status:${userId}`, JSON.stringify(updatedStatus));
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

  await redis.set(`score:${userId}`, JSON.stringify(initialScore));
  await redis.set(`status:${userId}`, JSON.stringify(initialStatus));
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