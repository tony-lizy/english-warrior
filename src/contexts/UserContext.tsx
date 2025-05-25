'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Progress, Planet } from '@/types/curriculum';

interface User {
  id: string;
  name: string;
  createdAt: string;
}

interface UserContextType {
  user: User | null;
  progress: Progress | null;
  isLoading: boolean;
  login: (name: string) => void;
  logout: () => void;
  updateProgress: (newProgress: Progress) => void;
  clearProgress: () => void;
  unlockAllLevels: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const createDefaultProgress = (userId: string): Progress => {
  // Create level progress for all 10 levels
  const createLevelProgress = () => {
    const levelProgress: Record<number, { completed: number; total: number; score: number; stars: number }> = {};
    for (let i = 1; i <= 10; i++) {
      levelProgress[i] = { completed: 0, total: 50, score: 0, stars: 0 };
    }
    return levelProgress;
  };

  return {
    userId,
    completedExercises: [],
    currentLevel: 'beginner',
    ageGroup: '8-9',
    totalPoints: 0,
    streak: 0,
    unlockedPlanets: ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'],
    planetProgress: {
      'mercury': {
        unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        levelProgress: createLevelProgress(),
        totalCompleted: 0,
        totalQuestions: 500
      },
      'venus': {
        unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        levelProgress: createLevelProgress(),
        totalCompleted: 0,
        totalQuestions: 500
      },
      'earth': {
        unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        levelProgress: createLevelProgress(),
        totalCompleted: 0,
        totalQuestions: 500
      },
      'mars': {
        unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        levelProgress: createLevelProgress(),
        totalCompleted: 0,
        totalQuestions: 500
      },
      'jupiter': {
        unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        levelProgress: createLevelProgress(),
        totalCompleted: 0,
        totalQuestions: 500
      },
      'saturn': {
        unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        levelProgress: createLevelProgress(),
        totalCompleted: 0,
        totalQuestions: 500
      },
      'uranus': {
        unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        levelProgress: createLevelProgress(),
        totalCompleted: 0,
        totalQuestions: 500
      },
      'neptune': {
        unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        levelProgress: createLevelProgress(),
        totalCompleted: 0,
        totalQuestions: 500
      },
      'pluto': {
        unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        levelProgress: createLevelProgress(),
        totalCompleted: 0,
        totalQuestions: 500
      }
    }
  };
};

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<Progress | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      setIsLoading(false);
      return;
    }

    // Load user data from localStorage on mount
    const savedUser = localStorage.getItem('english-warrior-user');
    const savedProgress = localStorage.getItem('english-warrior-progress');

    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      } else {
        // Create default progress for existing user
        const defaultProgress = createDefaultProgress(userData.id);
        setProgress(defaultProgress);
        localStorage.setItem('english-warrior-progress', JSON.stringify(defaultProgress));
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = (name: string) => {
    if (typeof window === 'undefined') return;

    const userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newUser: User = {
      id: userId,
      name: name.trim(),
      createdAt: new Date().toISOString()
    };

    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('english-warrior-users') || '[]');
    const existingUser = existingUsers.find((u: User) => u.name.toLowerCase() === name.toLowerCase().trim());

    if (existingUser) {
      // Load existing user and their progress
      setUser(existingUser);
      const savedProgress = localStorage.getItem(`english-warrior-progress-${existingUser.id}`);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      } else {
        // Fallback to default progress if no saved progress found
        const defaultProgress = createDefaultProgress(existingUser.id);
        setProgress(defaultProgress);
        localStorage.setItem(`english-warrior-progress-${existingUser.id}`, JSON.stringify(defaultProgress));
      }
      localStorage.setItem('english-warrior-user', JSON.stringify(existingUser));
    } else {
      // Create new user with fresh progress
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('english-warrior-users', JSON.stringify(updatedUsers));
      localStorage.setItem('english-warrior-user', JSON.stringify(newUser));
      
      const defaultProgress = createDefaultProgress(newUser.id);
      setProgress(defaultProgress);
      localStorage.setItem(`english-warrior-progress-${newUser.id}`, JSON.stringify(defaultProgress));
      localStorage.setItem('english-warrior-progress', JSON.stringify(defaultProgress));
      
      setUser(newUser);
    }
  };

  const logout = () => {
    setUser(null);
    setProgress(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('english-warrior-user');
      localStorage.removeItem('english-warrior-progress');
    }
  };

  const updateProgress = (newProgress: Progress) => {
    setProgress(newProgress);
    if (user && typeof window !== 'undefined') {
      localStorage.setItem(`english-warrior-progress-${user.id}`, JSON.stringify(newProgress));
      localStorage.setItem('english-warrior-progress', JSON.stringify(newProgress));
    }
  };

  const clearProgress = () => {
    if (user && typeof window !== 'undefined') {
      const defaultProgress = createDefaultProgress(user.id);
      setProgress(defaultProgress);
      localStorage.setItem(`english-warrior-progress-${user.id}`, JSON.stringify(defaultProgress));
      localStorage.setItem('english-warrior-progress', JSON.stringify(defaultProgress));
    }
  };

  const unlockAllLevels = () => {
    if (!progress || !user || typeof window === 'undefined') return;

    const updatedProgress = {
      ...progress,
      planetProgress: {
        ...progress.planetProgress,
        'mercury': {
          ...progress.planetProgress.mercury,
          unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        'venus': {
          ...progress.planetProgress.venus,
          unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        'earth': {
          ...progress.planetProgress.earth,
          unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        'mars': {
          ...progress.planetProgress.mars,
          unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        'jupiter': {
          ...progress.planetProgress.jupiter,
          unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        'saturn': {
          ...progress.planetProgress.saturn,
          unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        'uranus': {
          ...progress.planetProgress.uranus,
          unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        'neptune': {
          ...progress.planetProgress.neptune,
          unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        'pluto': {
          ...progress.planetProgress.pluto,
          unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
      }
    };

    setProgress(updatedProgress);
    localStorage.setItem(`english-warrior-progress-${user.id}`, JSON.stringify(updatedProgress));
    localStorage.setItem('english-warrior-progress', JSON.stringify(updatedProgress));
  };

  return (
    <UserContext.Provider value={{
      user,
      progress,
      isLoading,
      login,
      logout,
      updateProgress,
      clearProgress,
      unlockAllLevels
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
} 