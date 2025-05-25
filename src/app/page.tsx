'use client';

import Link from 'next/link';
import { useUser } from '@/contexts/UserContext';
import UserLogin from '@/components/UserLogin';

export default function Home() {
  const { user, isLoading } = useUser();

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  // Show login if no user
  if (!user) {
    return <UserLogin />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      {/* User Header */}
      <UserHeader />
      
      <div className="mb-8">
        <h1 className="text-6xl font-bold text-purple-600 mb-6">
          English Warrior
        </h1>
        <p className="text-2xl text-gray-700 mb-8">
          Embark on an epic journey through the English Galaxy!
        </p>
        <p className="text-lg text-gray-600 mb-12">
          Master grammar, vocabulary, punctuation, and more across themed planets
        </p>
      </div>

      {/* Main Action */}
      <div className="mb-12 flex flex-col items-center gap-4">
        <Link href="/galaxy">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
            🚀 Explore the Galaxy
          </button>
        </Link>
        <Link href="/scoreboard" className="text-purple-600 underline font-semibold">
          View Scoreboard
        </Link>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
        <FeatureCard
          icon="🌋"
          title="Themed Planets"
          description="Explore Verb Volcano, Punctuation Port, Grammar Galaxy, and more!"
          color="from-red-400 to-orange-500"
        />
        <FeatureCard
          icon="📈"
          title="Progressive Learning"
          description="Advance through 3 tiers as you master new skills and unlock content"
          color="from-green-400 to-blue-500"
        />
        <FeatureCard
          icon="🎯"
          title="Instant Feedback"
          description="Get immediate explanations and encouragement to boost learning"
          color="from-purple-400 to-pink-500"
        />
      </div>

      {/* Learning Objectives */}
      <div className="mt-16 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What You'll Master</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <LearningObjective
            title="Grammar Mastery"
            description="Parts of speech, verb tenses, subject-verb agreement, and sentence structure"
          />
          <LearningObjective
            title="Reading Comprehension"
            description="Understanding texts, finding main ideas, and drawing inferences"
          />
          <LearningObjective
            title="Writing Skills"
            description="Sentence construction, paragraph building, and idea organization"
          />
          <LearningObjective
            title="Punctuation & Capitalization"
            description="Proper use of periods, commas, question marks, and capital letters"
          />
          <LearningObjective
            title="Vocabulary Building"
            description="Synonyms, antonyms, word meanings, and context clues"
          />
          <LearningObjective
            title="Sentence Building"
            description="Creating coherent sentences from simple to complex structures"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-lg text-white`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </div>
  );
}

function UserHeader() {
  const { user, logout } = useUser();
  
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-white/20 shadow-lg">
        <div className="flex items-center gap-3 text-white">
          <span className="text-sm">👋 Welcome, {user?.name}!</span>
          <button
            onClick={logout}
            className="text-xs bg-red-500/80 hover:bg-red-600 px-2 py-1 rounded transition-colors"
            title="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

function LearningObjective({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h4 className="font-bold text-purple-600 mb-2">{title}</h4>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}
