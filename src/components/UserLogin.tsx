'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/contexts/UserContext';

export default function UserLogin() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsLoading(true);
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      login(name.trim());
      setIsLoading(false);
    }, 500);
  };

  const [existingUsers, setExistingUsers] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const users = JSON.parse(localStorage.getItem('english-warrior-users') || '[]');
      setExistingUsers(users.map((user: any) => user.name));
    } catch {
      setExistingUsers([]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full border border-white/20 shadow-2xl">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to English Warrior!
          </h1>
          <p className="text-purple-200">
            Enter your name to start your galactic English adventure
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              disabled={isLoading}
              maxLength={50}
              required
            />
          </div>

          {mounted && existingUsers.length > 0 && (
            <div>
              <p className="text-white/80 text-sm mb-3">
                Or continue as an existing player:
              </p>
              <div className="space-y-2 max-h-32 overflow-y-auto">
                {existingUsers.slice(0, 5).map((userName: string, index: number) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setName(userName)}
                    className="w-full text-left px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white/90 text-sm transition-colors border border-white/20"
                    disabled={isLoading}
                  >
                    👤 {userName}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={!name.trim() || isLoading}
            className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-200 ${
              !name.trim() || isLoading
                ? 'bg-gray-500 cursor-not-allowed text-gray-300'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Loading...
              </div>
            ) : (
              'Start Adventure! 🌟'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white/60 text-xs">
            {existingUsers.length > 0 
              ? "New players start fresh, existing players continue their journey!"
              : "Your progress will be saved automatically!"
            }
          </p>
        </div>
      </div>
    </div>
  );
} 