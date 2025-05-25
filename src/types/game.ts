export interface WordPair {
  word: string;
  meaning: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface GameState {
  score: number;
  level: number;
  lives: number;
  currentWordPair?: WordPair;
  matchedPairs: WordPair[];
}

export interface GameConfig {
  initialLives: number;
  pointsPerMatch: number;
  bonusPoints: number;
  timeLimit?: number;
} 