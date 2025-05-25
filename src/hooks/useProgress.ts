import { useState, useEffect } from 'react';
import { UserScore, UserStatus } from '@/lib/redis';

interface UseProgressReturn {
  score: UserScore | null;
  status: UserStatus | null;
  loading: boolean;
  error: string | null;
  updateProgress: (data: {
    score?: number;
    planet?: string;
    level?: number;
    currentQuestion?: number;
  }) => Promise<void>;
}

export function useProgress(userId: string): UseProgressReturn {
  const [score, setScore] = useState<UserScore | null>(null);
  const [status, setStatus] = useState<UserStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch(`/api/progress?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch progress');
        }
        const data = await response.json();
        setScore(data.score);
        setStatus(data.status);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchProgress();
    }
  }, [userId]);

  const updateProgress = async (data: {
    score?: number;
    planet?: string;
    level?: number;
    currentQuestion?: number;
  }) => {
    try {
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          ...data,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update progress');
      }

      // Refresh progress after update
      const updatedProgress = await fetch(`/api/progress?userId=${userId}`);
      const updatedData = await updatedProgress.json();
      setScore(updatedData.score);
      setStatus(updatedData.status);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return {
    score,
    status,
    loading,
    error,
    updateProgress,
  };
} 