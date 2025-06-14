'use client';

import { useState, useEffect, useCallback } from 'react';
import { WordPair, GameState, GameConfig } from '@/types/game';

const initialConfig: GameConfig = {
  initialLives: 3,
  pointsPerMatch: 10,
  bonusPoints: 5,
  timeLimit: 30,
};

const sampleWords: WordPair[] = [
  { word: 'apple', meaning: 'A round fruit with red or green skin', difficulty: 'easy' },
  { word: 'book', meaning: 'A set of printed pages bound together', difficulty: 'easy' },
  { word: 'cat', meaning: 'A small furry animal that meows', difficulty: 'easy' },
  { word: 'dog', meaning: 'A loyal pet that barks', difficulty: 'easy' },
  { word: 'elephant', meaning: 'A large animal with a long trunk', difficulty: 'medium' },
];

export default function WordMatchGame() {
  const [gameState, setGameState] = useState<GameState>({
    score: 0,
    level: 1,
    lives: initialConfig.initialLives,
    matchedPairs: [],
  });

  const [availableWords, setAvailableWords] = useState<WordPair[]>(sampleWords);
  const [selectedWord, setSelectedWord] = useState<WordPair | null>(null);
  const [selectedMeaning, setSelectedMeaning] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(initialConfig.timeLimit || 30);

  const resetSelection = useCallback(() => {
    setSelectedWord(null);
    setSelectedMeaning(null);
    setTimeLeft(initialConfig.timeLimit || 30);
  }, []);

  const handleTimeUp = useCallback(() => {
    setGameState((prev: GameState) => ({
      ...prev,
      lives: prev.lives - 1,
    }));
    resetSelection();
  }, [resetSelection]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev: number) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      handleTimeUp();
    }
  }, [timeLeft, handleTimeUp]);

  const handleWordClick = (word: WordPair) => {
    if (selectedWord === word) {
      setSelectedWord(null);
    } else {
      setSelectedWord(word);
    }
  };

  const handleMeaningClick = (meaning: string) => {
    if (selectedWord && meaning === selectedWord.meaning) {
      // Correct match
      setGameState((prev: GameState) => ({
        ...prev,
        score: prev.score + initialConfig.pointsPerMatch,
        matchedPairs: [...prev.matchedPairs, selectedWord],
      }));
      setAvailableWords((prev: WordPair[]) => prev.filter((w) => w !== selectedWord));
      resetSelection();
    } else {
      // Wrong match
      setGameState((prev: GameState) => ({
        ...prev,
        lives: prev.lives - 1,
      }));
      resetSelection();
    }
  };

  const meanings = availableWords.map((word) => word.meaning);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold text-purple-600">Score: {gameState.score}</div>
        <div className="text-xl">Lives: {gameState.lives}</div>
        <div className="text-xl">Time: {timeLeft}s</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Words</h2>
          <div className="space-y-4">
              {availableWords.map((word) => (
                <button
                  key={word.word}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-200 hover:scale-105 active:scale-95 ${
                    selectedWord === word
                      ? 'bg-purple-600 text-white'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                  onClick={() => handleWordClick(word)}
                >
                  {word.word}
                </button>
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Meanings</h2>
          <div className="space-y-4">
              {meanings.map((meaning) => (
                <button
                  key={meaning}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-200 hover:scale-105 active:scale-95 ${
                    selectedMeaning === meaning
                      ? 'bg-green-600 text-white'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                  onClick={() => handleMeaningClick(meaning)}
                >
                  {meaning}
                </button>
              ))}
          </div>
        </div>
      </div>

      {gameState.lives <= 0 && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center animate-in fade-in duration-300">
          <div className="bg-white p-8 rounded-xl text-center animate-in zoom-in duration-300">
            <h2 className="text-3xl font-bold mb-4">Game Over!</h2>
            <p className="text-xl mb-6">Your final score: {gameState.score}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 