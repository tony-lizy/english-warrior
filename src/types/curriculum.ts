export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type AgeGroup = '8-9' | '9-10' | '10+';

export type Planet = 'mercury' | 'venus' | 'earth' | 'mars' | 'jupiter' | 'saturn' | 'uranus' | 'neptune' | 'pluto';

export type ExerciseType = 'multiple-choice' | 'fill-in-blank' | 'correction' | 'matching' | 'sequencing';

export interface PlanetInfo {
  id: Planet;
  name: string;
  description: string;
  theme: string;
  focus: string[];
  icon: string;
  color: string;
  levels: number; // Always 10
}

export interface Level {
  id: string;
  planet: Planet;
  levelNumber: number; // 1-10
  name: string;
  description: string;
  difficulty: DifficultyLevel;
  questionsCount: number; // Always 50
  unlockRequirement?: {
    previousLevel?: string;
    minScore?: number;
  };
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  content: string;
  correctAnswer: string | string[];
  options?: string[];
  explanation: string;
  planet: Planet;
  level: number; // 1-10
  questionNumber: number; // 1-50
  points: number;
  difficulty: DifficultyLevel;
  timeLimit?: number;
  tags?: string[];
  // For multi-blank questions
  blanks?: {
    count: number; // Number of blanks
    answers: string[]; // Array of correct answers for each blank
    labels?: string[]; // Optional labels for each blank
  };
}

export interface Progress {
  userId: string;
  completedExercises: string[];
  currentLevel: DifficultyLevel;
  ageGroup: AgeGroup;
  totalPoints: number;
  streak: number;
  unlockedPlanets: Planet[];
  planetProgress: Record<Planet, {
    unlockedLevels: number[]; // Array of unlocked level numbers (1-10)
    levelProgress: Record<number, {
      completed: number; // Number of questions completed (0-50)
      total: number; // Always 50
      score: number; // Percentage score for the level
      stars: number; // 1-3 stars based on performance
      bestTime?: number; // Best completion time in seconds
    }>;
    totalCompleted: number; // Total questions completed across all levels
    totalQuestions: number; // Always 500 (10 levels × 50 questions)
  }>;
}

export interface LevelResult {
  levelId: string;
  planet: Planet;
  levelNumber: number;
  questionsCompleted: number;
  totalQuestions: number;
  correctAnswers: number;
  score: number; // Percentage
  stars: number; // 1-3 stars
  timeSpent: number; // In seconds
  pointsEarned: number;
}

export interface Feedback {
  type: 'success' | 'hint' | 'correction';
  message: string;
  explanation?: string;
  points?: number;
  nextQuestion?: boolean;
}

export interface GameSession {
  sessionId: string;
  planet: Planet;
  level: number;
  startTime: number;
  currentQuestion: number;
  answers: Record<number, {
    questionId: string;
    userAnswer: string;
    correct: boolean;
    timeSpent: number;
    pointsEarned: number;
  }>;
  totalPoints: number;
  completed: boolean;
} 