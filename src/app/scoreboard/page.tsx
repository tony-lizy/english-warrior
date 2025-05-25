'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ScoreEntry {
  id: string;
  name: string;
  points: number;
}

export default function ScoreboardPage() {
  const [scores, setScores] = useState<ScoreEntry[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const users = JSON.parse(localStorage.getItem('english-warrior-users') || '[]');
    const entries: ScoreEntry[] = users.map((u: any) => {
      const progress = JSON.parse(localStorage.getItem(`english-warrior-progress-${u.id}`) || 'null');
      const points = progress?.totalPoints || 0;
      return { id: u.id, name: u.name, points } as ScoreEntry;
    }) as ScoreEntry[];

    entries.sort((a, b) => b.points - a.points);
    setScores(entries.slice(0, 10));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-purple-700 via-purple-800 to-purple-900 text-white">
      <h1 className="text-4xl font-bold mb-8">🏆 Scoreboard</h1>
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-lg p-6">
        {scores.length === 0 && <p className="text-center">No scores yet.</p>}
        <ul className="space-y-3">
          {scores.map((s, idx) => (
            <li key={s.id} className="flex justify-between border-b border-white/20 pb-2">
              <span>{idx + 1}. {s.name}</span>
              <span>{s.points} pts</span>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/galaxy" className="mt-8 bg-white text-purple-700 px-4 py-2 rounded font-bold shadow">
        ← Back to Galaxy
      </Link>
    </div>
  );
}
