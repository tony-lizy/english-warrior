'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Exercise, Feedback, Progress, Planet, Level, GameSession } from '@/types/curriculum';
import { planetsInfo, getPlanetLevels, getExercisesForLevel, calculateLevelScore, calculateStars } from '@/lib/curriculum-data';

export default function PlanetGame() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const planetId = params.planet as Planet;
  
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Exercise | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [showLevelComplete, setShowLevelComplete] = useState(false);
  const [gameSession, setGameSession] = useState<GameSession | null>(null);
  const [showUrlCopied, setShowUrlCopied] = useState(false);
  
  const [progress, setProgress] = useState<Progress>({
    userId: 'user-1',
    completedExercises: [],
    currentLevel: 'beginner',
    ageGroup: '8-9',
    totalPoints: 0,
    streak: 0,
    unlockedPlanets: ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'],
    planetProgress: {
      'mercury': {
        unlockedLevels: [1, 2, 3],
        levelProgress: {
          1: { completed: 50, total: 50, score: 85, stars: 2 },
          2: { completed: 30, total: 50, score: 0, stars: 0 },
          3: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 80,
        totalQuestions: 500
      },
      'venus': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 20, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 20,
        totalQuestions: 500
      },
      'earth': {
        unlockedLevels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        levelProgress: {
          1: { completed: 0, total: 50, score: 0, stars: 0 },
          2: { completed: 0, total: 50, score: 0, stars: 0 },
          3: { completed: 0, total: 50, score: 0, stars: 0 },
          4: { completed: 0, total: 50, score: 0, stars: 0 },
          5: { completed: 0, total: 50, score: 0, stars: 0 },
          6: { completed: 0, total: 50, score: 0, stars: 0 },
          7: { completed: 0, total: 50, score: 0, stars: 0 },
          8: { completed: 0, total: 50, score: 0, stars: 0 },
          9: { completed: 0, total: 50, score: 0, stars: 0 },
          10: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 0,
        totalQuestions: 500
      },
      'mars': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 0,
        totalQuestions: 500
      },
      'jupiter': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 0,
        totalQuestions: 500
      },
      'saturn': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 0,
        totalQuestions: 500
      },
      'uranus': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 0,
        totalQuestions: 500
      },
      'neptune': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 0,
        totalQuestions: 500
      },
      'pluto': {
        unlockedLevels: [1],
        levelProgress: {
          1: { completed: 0, total: 50, score: 0, stars: 0 }
        },
        totalCompleted: 0,
        totalQuestions: 500
      }
    }
  });

  const planet = planetsInfo.find(p => p.id === planetId);
  const planetLevels = getPlanetLevels(planetId);

  // Handle URL parameters for direct navigation to specific questions
  useEffect(() => {
    const levelParam = searchParams.get('level');
    const questionParam = searchParams.get('question');
    
    if (levelParam && questionParam) {
      const level = parseInt(levelParam);
      const questionNumber = parseInt(questionParam);
      
      if (level && questionNumber && level >= 1 && level <= 10 && questionNumber >= 1 && questionNumber <= 50) {
        const exercises = getExercisesForLevel(planetId, level);
        const targetQuestion = exercises.find(ex => ex.questionNumber === questionNumber);
        
        if (targetQuestion && exercises.length > 0) {
          setCurrentLevel(level);
          setCurrentQuestion(targetQuestion);
          setUserAnswer('');
          setFeedback(null);
          
          // Initialize game session for URL navigation
          const session: GameSession = {
            sessionId: `${planetId}-${level}-${Date.now()}`,
            planet: planetId,
            level: level,
            startTime: Date.now(),
            currentQuestion: questionNumber,
            answers: {},
            totalPoints: 0,
            completed: false
          };
          setGameSession(session);
        }
      }
    }
  }, [searchParams, planetId]);

  const startLevel = (levelNumber: number) => {
    const exercises = getExercisesForLevel(planetId, levelNumber);
    
    // Only start the level if there are actual exercises available
    if (exercises.length === 0) {
      console.log('No exercises available for this level');
      return;
    }
    
    setCurrentQuestion(exercises[0]);
    setCurrentLevel(levelNumber);
    setUserAnswer('');
    setFeedback(null);
    
    // Update URL to reflect current level and question
    router.push(`/games/planet/${planetId}?level=${levelNumber}&question=1`);
    
    // Initialize game session
    const session: GameSession = {
      sessionId: `${planetId}-${levelNumber}-${Date.now()}`,
      planet: planetId,
      level: levelNumber,
      startTime: Date.now(),
      currentQuestion: 1,
      answers: {},
      totalPoints: 0,
      completed: false
    };
    setGameSession(session);
  };

  const handleSubmit = () => {
    if (!currentQuestion || !gameSession) return;

    const isCorrect = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer.includes(userAnswer)
      : userAnswer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim();

    const pointsEarned = isCorrect ? currentQuestion.points : 0;
    
    const newFeedback: Feedback = {
      type: isCorrect ? 'success' : 'correction',
      message: isCorrect 
        ? getSuccessMessage(planetId)
        : getEncouragementMessage(planetId),
      explanation: currentQuestion.explanation,
      points: pointsEarned,
      nextQuestion: true
    };

    setFeedback(newFeedback);

    // Update game session
    const updatedSession = {
      ...gameSession,
      answers: {
        ...gameSession.answers,
        [currentQuestion.questionNumber]: {
          questionId: currentQuestion.id,
          userAnswer,
          correct: isCorrect,
          timeSpent: Date.now() - gameSession.startTime,
          pointsEarned
        }
      },
      totalPoints: gameSession.totalPoints + pointsEarned,
      currentQuestion: gameSession.currentQuestion + 1
    };

    setGameSession(updatedSession);
  };

  const handleNextQuestion = () => {
    if (!gameSession || !currentLevel) return;

    // Check if level is complete
    const exercises = getExercisesForLevel(planetId, currentLevel);
    if (gameSession.currentQuestion > exercises.length) {
      completeLevel(gameSession);
    } else {
      loadNextQuestion(gameSession);
    }
  };

  const loadNextQuestion = (session?: GameSession) => {
    const currentSession = session || gameSession;
    if (!currentSession || !currentLevel) return;
    
    const exercises = getExercisesForLevel(planetId, currentLevel);
    const questionNumber = currentSession.currentQuestion;
    // Get the next question from the actual exercises
    const nextQuestion = exercises.find(ex => ex.questionNumber === questionNumber);
    
    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
      setUserAnswer('');
      setFeedback(null);
      
      // Update URL to reflect current question
      router.push(`/games/planet/${planetId}?level=${currentLevel}&question=${questionNumber}`);
    } else {
      // No more questions available, complete the level
      completeLevel(currentSession);
    }
  };

  const completeLevel = (session: GameSession) => {
    const correctAnswers = Object.values(session.answers).filter(a => a.correct).length;
    const totalQuestions = Object.keys(session.answers).length;
    const score = calculateLevelScore(correctAnswers, totalQuestions);
    const stars = calculateStars(score);

    // Update progress
    setProgress(prev => ({
      ...prev,
      totalPoints: prev.totalPoints + session.totalPoints,
      planetProgress: {
        ...prev.planetProgress,
        [planetId]: {
          ...prev.planetProgress[planetId],
          levelProgress: {
            ...prev.planetProgress[planetId].levelProgress,
            [currentLevel!]: {
              completed: 50, // Mark as complete
              total: 50,
              score,
              stars
            }
          },
          totalCompleted: prev.planetProgress[planetId].totalCompleted + totalQuestions
        }
      }
    }));

    setGameSession({ ...session, completed: true });
    setShowLevelComplete(true);
  };

  const getSuccessMessage = (planet: Planet): string => {
    const messages = {
      'mercury': 'Mercury mastery! ☄️',
      'venus': 'Venus victory! 🌋',
      'earth': 'Earth excellence! 🌍',
      'mars': 'Martian marvel! 🔴',
      'jupiter': 'Jovian joy! 🪐',
      'saturn': 'Saturn success! 💫',
      'uranus': 'Uranus achievement! 🌊',
      'neptune': 'Neptune triumph! 🌀',
      'pluto': 'Pluto perfection! ❄️'
    };
    return messages[planet] || 'Great job! 🎉';
  };

  const getEncouragementMessage = (planet: Planet): string => {
    const messages = {
      'mercury': 'The closest planet to success! ☄️',
      'venus': 'Keep your cool on the hottest planet! 🌋',
      'earth': 'You\'re on the right planet! 🌍',
      'mars': 'The Red Planet believes in you! 🔴',
      'jupiter': 'The largest planet has the biggest heart! 🪐',
      'saturn': 'Your rings of success are forming! 💫',
      'uranus': 'Turn things around! 🌊',
      'neptune': 'Ride the winds of success! 🌀',
      'pluto': 'Size doesn\'t matter, keep going! ❄️'
    };
    return messages[planet] || 'Keep trying! 💪';
  };

  if (!planet) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Planet Not Found</h1>
          <Link href="/galaxy">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              Return to Galaxy
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Level Selection View
  if (!currentLevel) {
    const planetProgress = progress.planetProgress[planetId];
    
    return (
      <div className={`min-h-screen bg-gradient-to-br ${planet.color} p-6`}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-white drop-shadow-lg">
              <h1 className="text-4xl font-bold flex items-center gap-3 text-white drop-shadow-md">
                {planet.icon} {planet.name}
              </h1>
              <p className="text-white/90 text-lg mt-2 drop-shadow-sm">{planet.description}</p>
            </div>
            <Link href="/galaxy">
              <button className="bg-white/30 hover:bg-white/40 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors text-white font-semibold border border-white/20 shadow-lg">
                ← Galaxy
              </button>
            </Link>
          </div>

          {/* Level Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {planetLevels.map((level) => {
              const isUnlocked = planetProgress?.unlockedLevels.includes(level.levelNumber) || level.levelNumber === 1;
              const levelProgress = planetProgress?.levelProgress[level.levelNumber];
              const isCompleted = levelProgress?.completed === 50;
              const exercises = getExercisesForLevel(planetId, level.levelNumber);
              const hasExercises = exercises.length > 0;
              
              return (
                <div
                  key={level.id}
                  className={`relative p-6 rounded-xl transform transition-all duration-200 ${
                    isUnlocked && hasExercises
                      ? 'bg-white/90 hover:bg-white hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl' 
                      : 'bg-gray-800/60 cursor-not-allowed opacity-75'
                  } backdrop-blur-sm border ${
                    isUnlocked && hasExercises
                      ? 'border-white/40 hover:border-white/60' 
                      : 'border-gray-600/40'
                  }`}
                  onClick={() => isUnlocked && hasExercises && startLevel(level.levelNumber)}
                >
                  <div className={`text-center ${isUnlocked ? 'text-gray-800' : 'text-gray-300'}`}>
                    <div className={`text-3xl font-bold mb-3 ${
                      isUnlocked ? 'text-purple-600' : 'text-gray-400'
                    }`}>
                      Level {level.levelNumber}
                    </div>
                    <div className={`text-base mb-3 font-semibold ${
                      isUnlocked ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {level.name}
                    </div>
                    <div className={`text-sm leading-relaxed ${
                      isUnlocked ? 'text-gray-600' : 'text-gray-500'
                    }`}>
                      {level.description}
                    </div>
                    
                    {isCompleted && levelProgress && (
                      <div className="mt-4 p-2 bg-green-100 rounded-lg border border-green-200">
                        <div className="text-lg mb-1">
                          {'⭐'.repeat(levelProgress.stars)}{'☆'.repeat(3 - levelProgress.stars)}
                        </div>
                        <div className="text-sm font-semibold text-green-700">{levelProgress.score}% Complete</div>
                      </div>
                    )}
                    
                    {!isUnlocked && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40 rounded-xl">
                        <div className="text-4xl opacity-80">🔒</div>
                      </div>
                    )}
                    
                    {isUnlocked && !hasExercises && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/40 rounded-xl">
                        <div className="text-3xl opacity-80 mb-2">🚧</div>
                        <div className="text-sm text-white font-semibold">Coming Soon</div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* URL Copied Toast */}
          {showUrlCopied && (
            <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-pulse">
              ✅ Question URL copied to clipboard!
            </div>
          )}
        </div>
      </div>
    );
  }

  // Question View
  if (currentQuestion && !showLevelComplete) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${planet.color} p-6`}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-white drop-shadow-lg">
              <h1 className="text-3xl font-bold text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {planet.icon} Level {currentLevel}
              </h1>
              <p className="text-white text-lg mt-2 drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                Question {gameSession?.currentQuestion || 1} of {getExercisesForLevel(planetId, currentLevel!).length}
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentLevel(null);
                setCurrentQuestion(null);
                setGameSession(null);
                setFeedback(null);
                setUserAnswer('');
                router.push(`/games/planet/${planetId}`);
              }}
              className="bg-white/30 hover:bg-white/40 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors text-white font-semibold border border-white/20 shadow-lg"
            >
              ← Levels
            </button>
          </div>

          {/* Progress Bar */}
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-4 mb-8 text-white border border-white/30 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-bold text-white drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                Points: {gameSession?.totalPoints || 0} | Question {gameSession?.currentQuestion || 1}/{getExercisesForLevel(planetId, currentLevel!).length}
              </div>
              <button
                onClick={() => {
                  const url = `${window.location.origin}/games/planet/${planetId}?level=${currentLevel}&question=${gameSession?.currentQuestion || 1}`;
                  navigator.clipboard.writeText(url);
                  setShowUrlCopied(true);
                  setTimeout(() => setShowUrlCopied(false), 2000);
                }}
                className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg text-sm transition-colors border border-white/20"
                title="Copy question URL"
              >
                🔗 Copy URL
              </button>
            </div>
            <div className="bg-white/20 rounded-full h-3 border border-white/30">
              <div 
                className="bg-white rounded-full h-3 transition-all duration-500 shadow-sm"
                style={{ 
                  width: `${((gameSession?.currentQuestion || 1) / getExercisesForLevel(planetId, currentLevel!).length) * 100}%` 
                }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-xl shadow-2xl p-8 mb-8 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              {currentQuestion.content}
            </h2>

            {currentQuestion.type === 'multiple-choice' && (
              <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options?.map((option) => (
                  <button
                    key={option}
                    className={`p-4 rounded-lg text-left transition-colors border-2 font-medium ${
                      userAnswer === option
                        ? 'bg-purple-600 text-white border-purple-600 shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setUserAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {(currentQuestion.type === 'fill-in-blank' || currentQuestion.type === 'correction') && (
              <div className="mt-6">
                <label className="block text-lg font-medium text-gray-700 mb-3">
                  {currentQuestion.type === 'fill-in-blank' ? 'Fill in the blank:' : 'Write the corrected sentence:'}
                </label>
                <textarea
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder={currentQuestion.type === 'fill-in-blank' ? 'Type your answer...' : 'Type the corrected sentence...'}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none resize-none text-lg text-gray-900"
                  rows={currentQuestion.type === 'correction' ? 3 : 2}
                  disabled={!!feedback}
                />
              </div>
            )}
          </div>

          {/* Feedback */}
          {feedback && (
            <div
              className={`p-6 rounded-lg mb-6 border-2 shadow-lg ${
                feedback.type === 'success'
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : 'bg-yellow-50 text-yellow-800 border-yellow-200'
              }`}
            >
              <p className="font-bold text-lg">{feedback.message}</p>
              {feedback.explanation && (
                <p className="mt-2 text-base">{feedback.explanation}</p>
              )}
              {feedback.points && (
                <p className="mt-2 font-semibold text-lg">+{feedback.points} points!</p>
              )}
            </div>
          )}

          {/* Submit/Next Button */}
          <div className="flex justify-center">
            {!feedback ? (
              <button
                onClick={handleSubmit}
                disabled={!userAnswer}
                className={`px-10 py-4 rounded-lg text-white font-bold text-lg transition-colors shadow-lg ${
                  !userAnswer
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 hover:bg-purple-700 shadow-purple-200'
                }`}
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-10 py-4 rounded-lg text-white font-bold text-lg transition-colors shadow-lg bg-green-600 hover:bg-green-700 shadow-green-200"
              >
                Next Question →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Level Complete View
  if (showLevelComplete && gameSession) {
    const correctAnswers = Object.values(gameSession.answers).filter(a => a.correct).length;
    const totalQuestions = Object.keys(gameSession.answers).length;
    const score = calculateLevelScore(correctAnswers, totalQuestions);
    const stars = calculateStars(score);

    return (
      <div className={`min-h-screen bg-gradient-to-br ${planet.color} flex items-center justify-center p-6`}>
        <div className="bg-white rounded-xl p-8 text-center max-w-md mx-4 shadow-2xl border border-gray-200">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4 text-purple-600">Level Complete!</h2>
          <div className="text-2xl mb-4">
            {'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}
          </div>
          <p className="text-xl mb-2 text-gray-800">
            Score: {score}%
          </p>
          <p className="text-lg mb-6 text-gray-600">
            {correctAnswers}/{totalQuestions} correct answers
          </p>
          <p className="text-lg mb-6 text-gray-600">
            Points earned: {gameSession.totalPoints}
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                setShowLevelComplete(false);
                setCurrentLevel(null);
                setCurrentQuestion(null);
                setGameSession(null);
                setFeedback(null);
                setUserAnswer('');
                router.push(`/games/planet/${planetId}`);
              }}
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 font-bold shadow-lg"
            >
              Choose Next Level
            </button>
            <Link href="/galaxy">
              <button className="w-full bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 font-bold shadow-lg">
                Return to Galaxy
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
} 