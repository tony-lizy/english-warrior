'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Progress, Planet } from '@/types/curriculum';
import { planetsInfo, getPlanetLevels } from '@/lib/curriculum-data';

export default function GalaxyNavigation() {
  const [progress, setProgress] = useState<Progress>({
    userId: 'user-1',
    completedExercises: [],
    currentLevel: 'beginner',
    ageGroup: '8-9',
    totalPoints: 250,
    streak: 5,
    unlockedPlanets: ['verb-volcano', 'punctuation-port', 'grammar-galaxy', 'vocabulary-village', 'sentence-city'],
    planetProgress: {
      'verb-volcano': {
        unlockedLevels: [1, 2, 3],
        levelProgress: {
          1: { completed: 50, total: 50, score: 85, stars: 2 },
          2: { completed: 30, total: 50, score: 0, stars: 0 },
          3: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 80,
        totalQuestions: 500
      },
      'punctuation-port': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 20, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 20,
        totalQuestions: 500
      },
      'grammar-galaxy': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 0,
        totalQuestions: 500
      },
      'vocabulary-village': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 0,
        totalQuestions: 500
      },
      'sentence-city': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 0,
        totalQuestions: 500
      }
    }
  });

  const renderStars = (count: number) => {
    return '⭐'.repeat(count) + '☆'.repeat(3 - count);
  };

  const calculatePlanetCompletion = (planet: Planet): number => {
    const planetProgress = progress.planetProgress[planet];
    if (!planetProgress) return 0;
    return Math.round((planetProgress.totalCompleted / planetProgress.totalQuestions) * 100);
  };

  const getHighestUnlockedLevel = (planet: Planet): number => {
    const planetProgress = progress.planetProgress[planet];
    if (!planetProgress || planetProgress.unlockedLevels.length === 0) return 1;
    return Math.max(...planetProgress.unlockedLevels);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            ✨ English Galaxy ✨
          </h1>
          <p className="text-xl text-purple-200 mb-6">
            Explore planets with 10 levels each and master English skills!
          </p>
          
          {/* Progress Summary */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">{progress.totalPoints}</div>
                <div className="text-sm opacity-80">Total Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{progress.streak}🔥</div>
                <div className="text-sm opacity-80">Current Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold capitalize">{progress.currentLevel}</div>
                <div className="text-sm opacity-80">Current Tier</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{progress.unlockedPlanets.length}/5</div>
                <div className="text-sm opacity-80">Planets Unlocked</div>
              </div>
            </div>
          </div>
        </div>

        {/* Planets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {planetsInfo.map((planet) => {
            const isUnlocked = progress.unlockedPlanets.includes(planet.id);
            const planetProgress = progress.planetProgress[planet.id];
            const completionPercentage = calculatePlanetCompletion(planet.id);
            const highestLevel = getHighestUnlockedLevel(planet.id);
            const currentLevelProgress = planetProgress?.levelProgress[highestLevel];

            return (
              <div
                key={planet.id}
                className={`relative transform transition-all duration-300 ${
                  isUnlocked ? 'hover:scale-105' : 'opacity-50'
                }`}
              >
                {/* Planet Card */}
                <div className={`bg-gradient-to-br ${planet.color} rounded-2xl p-6 shadow-2xl ${
                  !isUnlocked && 'grayscale'
                }`}>
                  {/* Planet Content */}
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">{planet.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{planet.name}</h3>
                    <p className="text-white/90 mb-4">{planet.description}</p>
                    
                    {/* Level Progress */}
                    {isUnlocked && (
                      <div className="mb-4">
                        <div className="text-sm mb-2">
                          Level {highestLevel}/10
                        </div>
                        <div className="bg-white/20 rounded-full h-3 mb-2">
                          <div 
                            className="bg-white rounded-full h-3 transition-all duration-500"
                            style={{ width: `${completionPercentage}%` }}
                          />
                        </div>
                        <div className="text-xs mb-2">{completionPercentage}% Planet Complete</div>
                        
                        {/* Current Level Progress */}
                        {currentLevelProgress && (
                          <div className="text-xs">
                            Current Level: {currentLevelProgress.completed}/{currentLevelProgress.total} questions
                            {currentLevelProgress.stars > 0 && (
                              <div className="mt-1">
                                {renderStars(currentLevelProgress.stars)}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Focus Areas */}
                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">Focus Areas:</div>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {planet.focus.slice(0, 3).map(focus => (
                          <span key={focus} className="bg-white/20 px-2 py-1 rounded-full text-xs">
                            {focus}
                          </span>
                        ))}
                        {planet.focus.length > 3 && (
                          <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                            +{planet.focus.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    {isUnlocked ? (
                      <Link href={`/games/planet/${planet.id}`}>
                        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-purple-100 transition-colors">
                          {planetProgress?.totalCompleted === 0 ? 'Start Journey' : 'Continue'}
                        </button>
                      </Link>
                    ) : (
                      <button disabled className="bg-gray-500 text-white px-6 py-2 rounded-full font-bold cursor-not-allowed">
                        Locked
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Level System Explanation */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">🎯 Level System</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-purple-200">
            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-bold mb-2">10 Levels Per Planet</h3>
              <p className="text-sm">Each planet has 10 progressive levels from beginner to advanced concepts.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">❓</div>
              <h3 className="font-bold mb-2">50 Questions Per Level</h3>
              <p className="text-sm">Master each level with 50 carefully designed questions.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="font-bold mb-2">Star Rating System</h3>
              <p className="text-sm">Earn 1-3 stars based on your performance. 90%+ = 3 stars!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 