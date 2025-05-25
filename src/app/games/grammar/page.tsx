'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GrammarChallenge() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the galaxy page since we now use a level-based system
    router.push('/galaxy');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
        <p className="text-xl">Redirecting to Galaxy...</p>
      </div>
    </div>
  );
} 