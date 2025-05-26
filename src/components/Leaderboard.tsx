'use client';

import { useState, useEffect } from 'react';
import { LeaderboardService, LeaderboardEntry } from '@/lib/leaderboard';
import { Planet } from '@/types/curriculum';

interface LeaderboardProps {
  planet?: Planet;
  currentUserId?: string;
}

export default function Leaderboard({ planet, currentUserId }: LeaderboardProps) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [viewMode, setViewMode] = useState<'global' | 'planet'>('global');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeaderboard();
  }, [planet, viewMode]);

  const loadLeaderboard = () => {
    setLoading(true);
    try {
      const leaderboardEntries = viewMode === 'global' 
        ? LeaderboardService.getGlobalLeaderboard()
        : planet 
          ? LeaderboardService.getPlanetLeaderboard(planet)
          : [];
      
      setEntries(leaderboardEntries);
    } catch (error) {
      console.error('Error loading leaderboard:', error);
      setEntries([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return `#${rank}`;
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          🏆 Leaderboard
        </h2>
        
        {/* View Mode Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode('global')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'global'
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Global
          </button>
          {planet && (
            <button
              onClick={() => setViewMode('planet')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'planet'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {planet.charAt(0).toUpperCase() + planet.slice(1)}
            </button>
          )}
        </div>
      </div>

      {/* Leaderboard Entries */}
      {entries.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-2">🌟</div>
          <p>No scores yet. Be the first to make it to the leaderboard!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {entries.map((entry, index) => {
            const rank = index + 1;
            const isCurrentUser = entry.id === currentUserId;
            
            return (
              <div
                key={entry.id}
                className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                  isCurrentUser
                    ? 'border-purple-300 bg-purple-50 shadow-md'
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div className="text-2xl font-bold min-w-[3rem] text-center">
                    {getRankIcon(rank)}
                  </div>
                  
                  {/* User Info */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className={`font-bold ${isCurrentUser ? 'text-purple-700' : 'text-gray-800'}`}>
                        {entry.userName}
                        {isCurrentUser && <span className="text-sm text-purple-600">(You)</span>}
                      </h3>
                    </div>
                    
                    <div className="text-sm text-gray-600 flex items-center gap-4">
                      <span>📊 {entry.levelsCompleted} levels</span>
                      <span>🎯 {entry.averageScore.toFixed(1)}% avg</span>
                      <span>📅 {formatDate(entry.lastUpdated)}</span>
                    </div>
                    
                    {/* Achievements */}
                    {entry.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {entry.achievements.slice(0, 3).map((achievement, i) => (
                          <span
                            key={i}
                            className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                        {entry.achievements.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{entry.achievements.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Points */}
                <div className="text-right">
                  <div className={`text-2xl font-bold ${isCurrentUser ? 'text-purple-600' : 'text-gray-800'}`}>
                    {entry.totalPoints.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">points</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
        {viewMode === 'global' ? 'Top 10 players across all planets' : `Top 10 players on ${planet}`}
      </div>
    </div>
  );
} 