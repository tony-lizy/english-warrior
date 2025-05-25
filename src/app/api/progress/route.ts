import { NextResponse } from 'next/server';
import {
  getUserProgress,
  updateUserScore,
  updateUserStatus,
  initializeUser,
} from '@/lib/redis';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');

  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }

  try {
    const progress = await getUserProgress(userId);
    return NextResponse.json(progress);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user progress' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, score, planet, level, currentQuestion } = body;

    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Initialize user if they don't exist
    await initializeUser(userId);

    // Update score if provided
    if (score !== undefined && planet && level) {
      await updateUserScore(userId, score, planet, level);
    }

    // Update status if provided
    if (currentQuestion !== undefined) {
      await updateUserStatus(userId, true, currentQuestion);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update user progress' },
      { status: 500 }
    );
  }
} 