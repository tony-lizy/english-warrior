export interface LeaderboardEntry {
  id: string;
  userName: string;
  totalPoints: number;
  levelsCompleted: number;
  averageScore: number;
  lastUpdated: number;
  achievements: string[];
}

export interface PlanetLeaderboard {
  planet: string;
  entries: LeaderboardEntry[];
}

const LEADERBOARD_STORAGE_KEY = 'english-warrior-leaderboard';
const MAX_LEADERBOARD_ENTRIES = 10;

export class LeaderboardService {
  private static getStoredLeaderboard(): Record<string, PlanetLeaderboard> {
    if (typeof window === 'undefined') return {};
    
    try {
      const stored = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Error loading leaderboard:', error);
      return {};
    }
  }

  private static saveLeaderboard(leaderboard: Record<string, PlanetLeaderboard>): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(leaderboard));
    } catch (error) {
      console.error('Error saving leaderboard:', error);
    }
  }

  static updateUserScore(
    userId: string,
    userName: string,
    planet: string,
    totalPoints: number,
    levelsCompleted: number,
    averageScore: number
  ): void {
    const leaderboard = this.getStoredLeaderboard();
    
    if (!leaderboard[planet]) {
      leaderboard[planet] = {
        planet,
        entries: []
      };
    }

    const planetBoard = leaderboard[planet];
    const existingEntryIndex = planetBoard.entries.findIndex(entry => entry.id === userId);

    const newEntry: LeaderboardEntry = {
      id: userId,
      userName,
      totalPoints,
      levelsCompleted,
      averageScore,
      lastUpdated: Date.now(),
      achievements: this.calculateAchievements(totalPoints, levelsCompleted, averageScore)
    };

    if (existingEntryIndex >= 0) {
      // Update existing entry only if score improved
      const existingEntry = planetBoard.entries[existingEntryIndex];
      if (totalPoints > existingEntry.totalPoints) {
        planetBoard.entries[existingEntryIndex] = newEntry;
      }
    } else {
      // Add new entry
      planetBoard.entries.push(newEntry);
    }

    // Sort by total points (descending) and keep top 10
    planetBoard.entries.sort((a, b) => b.totalPoints - a.totalPoints);
    planetBoard.entries = planetBoard.entries.slice(0, MAX_LEADERBOARD_ENTRIES);

    this.saveLeaderboard(leaderboard);
  }

  static getPlanetLeaderboard(planet: string): LeaderboardEntry[] {
    const leaderboard = this.getStoredLeaderboard();
    return leaderboard[planet]?.entries || [];
  }

  static getGlobalLeaderboard(): LeaderboardEntry[] {
    const leaderboard = this.getStoredLeaderboard();
    const allEntries: LeaderboardEntry[] = [];

    // Combine all planet leaderboards
    Object.values(leaderboard).forEach(planetBoard => {
      allEntries.push(...planetBoard.entries);
    });

    // Group by user and sum their total points across all planets
    const userTotals = new Map<string, LeaderboardEntry>();
    
    allEntries.forEach(entry => {
      const existing = userTotals.get(entry.id);
      if (existing) {
        existing.totalPoints += entry.totalPoints;
        existing.levelsCompleted += entry.levelsCompleted;
        existing.averageScore = (existing.averageScore + entry.averageScore) / 2;
        existing.lastUpdated = Math.max(existing.lastUpdated, entry.lastUpdated);
        existing.achievements = [...new Set([...existing.achievements, ...entry.achievements])];
      } else {
        userTotals.set(entry.id, { ...entry });
      }
    });

    // Convert back to array and sort
    const globalEntries = Array.from(userTotals.values());
    globalEntries.sort((a, b) => b.totalPoints - a.totalPoints);
    
    return globalEntries.slice(0, MAX_LEADERBOARD_ENTRIES);
  }

  static getUserRank(userId: string, planet?: string): number {
    const entries = planet ? this.getPlanetLeaderboard(planet) : this.getGlobalLeaderboard();
    const userIndex = entries.findIndex(entry => entry.id === userId);
    return userIndex >= 0 ? userIndex + 1 : -1;
  }

  private static calculateAchievements(totalPoints: number, levelsCompleted: number, averageScore: number): string[] {
    const achievements: string[] = [];

    // Point-based achievements
    if (totalPoints >= 1000) achievements.push('🏆 Point Master');
    if (totalPoints >= 500) achievements.push('💎 High Scorer');
    if (totalPoints >= 100) achievements.push('⭐ Rising Star');

    // Level completion achievements
    if (levelsCompleted >= 50) achievements.push('🌟 Level Legend');
    if (levelsCompleted >= 25) achievements.push('🚀 Progress Pro');
    if (levelsCompleted >= 10) achievements.push('📚 Study Star');

    // Accuracy achievements
    if (averageScore >= 95) achievements.push('🎯 Perfectionist');
    if (averageScore >= 85) achievements.push('🔥 Accuracy Ace');
    if (averageScore >= 75) achievements.push('✨ Consistent Learner');

    return achievements;
  }

  static clearLeaderboard(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(LEADERBOARD_STORAGE_KEY);
    }
  }
} 