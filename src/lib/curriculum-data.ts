import { PlanetInfo, Level, Exercise, Planet } from '@/types/curriculum';
import { getQuestionsForLevel } from './questions-data';

export const planetsInfo: PlanetInfo[] = [
  {
    id: 'verb-volcano',
    name: 'Verb Volcano',
    description: 'A fiery volcanic island where action words erupt and players master verbs!',
    theme: 'Volcanic island with erupting verbs',
    focus: ['Action verbs', 'Verb tenses', 'Subject-verb agreement', 'Irregular verbs'],
    icon: '🌋',
    color: 'from-red-500 to-orange-600',
    levels: 10
  },
  {
    id: 'punctuation-port',
    name: 'Punctuation Port',
    description: 'A bustling harbor town where sailors use punctuation to navigate safely!',
    theme: 'Nautical harbor with ships and lighthouses',
    focus: ['Periods', 'Question marks', 'Commas', 'Apostrophes', 'Capitalization', 'Quotation marks'],
    icon: '⚓',
    color: 'from-blue-500 to-teal-600',
    levels: 10
  },
  {
    id: 'grammar-galaxy',
    name: 'Grammar Galaxy',
    description: 'Explore the cosmos of language with nouns, adjectives, and more!',
    theme: 'Outer space with planets and asteroids',
    focus: ['Nouns', 'Adjectives', 'Adverbs', 'Articles', 'Pronouns', 'Parts of speech'],
    icon: '🚀',
    color: 'from-purple-500 to-indigo-600',
    levels: 10
  },
  {
    id: 'vocabulary-village',
    name: 'Vocabulary Village',
    description: 'A friendly village where words come alive and expand your vocabulary!',
    theme: 'Cozy village with helpful villagers',
    focus: ['Synonyms', 'Antonyms', 'Word meanings', 'Context clues', 'Prefixes', 'Suffixes'],
    icon: '🏘️',
    color: 'from-green-500 to-emerald-600',
    levels: 10
  },
  {
    id: 'sentence-city',
    name: 'Sentence City',
    description: 'Build amazing structures with words in this bustling metropolis!',
    theme: 'Modern city with building blocks',
    focus: ['Sentence structure', 'Paragraph building', 'Writing organization', 'Conjunctions', 'Clauses'],
    icon: '🏙️',
    color: 'from-gray-500 to-slate-600',
    levels: 10
  }
];

export const levels: Level[] = [
  // VERB VOLCANO LEVELS
  {
    id: 'verb-volcano-1',
    planet: 'verb-volcano',
    levelNumber: 1,
    name: 'Action Word Basics',
    description: 'Learn to identify simple action verbs',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'verb-volcano-2',
    planet: 'verb-volcano',
    levelNumber: 2,
    name: 'Present Tense Power',
    description: 'Master present tense verbs',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'verb-volcano-3',
    planet: 'verb-volcano',
    levelNumber: 3,
    name: 'Past Tense Adventures',
    description: 'Explore regular past tense verbs',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'verb-volcano-4',
    planet: 'verb-volcano',
    levelNumber: 4,
    name: 'Future Tense Journey',
    description: 'Understand future tense construction',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'verb-volcano-5',
    planet: 'verb-volcano',
    levelNumber: 5,
    name: 'Irregular Verb Quest',
    description: 'Conquer irregular past tense verbs',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'verb-volcano-6',
    planet: 'verb-volcano',
    levelNumber: 6,
    name: 'Perfect Tense Challenge',
    description: 'Learn present and past perfect tenses',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'verb-volcano-7',
    planet: 'verb-volcano',
    levelNumber: 7,
    name: 'Continuous Action',
    description: 'Master progressive/continuous tenses',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'verb-volcano-8',
    planet: 'verb-volcano',
    levelNumber: 8,
    name: 'Subject-Verb Harmony',
    description: 'Perfect subject-verb agreement',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'verb-volcano-9',
    planet: 'verb-volcano',
    levelNumber: 9,
    name: 'Conditional Verbs',
    description: 'Explore conditional and subjunctive moods',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'verb-volcano-10',
    planet: 'verb-volcano',
    levelNumber: 10,
    name: 'Verb Master',
    description: 'Advanced verb usage and voice',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // PUNCTUATION PORT LEVELS
  {
    id: 'punctuation-port-1',
    planet: 'punctuation-port',
    levelNumber: 1,
    name: 'Period and Question Harbor',
    description: 'Basic sentence endings',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'punctuation-port-2',
    planet: 'punctuation-port',
    levelNumber: 2,
    name: 'Capital Letter Lighthouse',
    description: 'When to use capital letters',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'punctuation-port-3',
    planet: 'punctuation-port',
    levelNumber: 3,
    name: 'Exclamation Bay',
    description: 'Express excitement and emotion',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'punctuation-port-4',
    planet: 'punctuation-port',
    levelNumber: 4,
    name: 'Comma Cove',
    description: 'Using commas in lists and sentences',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'punctuation-port-5',
    planet: 'punctuation-port',
    levelNumber: 5,
    name: 'Apostrophe Anchor',
    description: 'Contractions and possessive forms',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'punctuation-port-6',
    planet: 'punctuation-port',
    levelNumber: 6,
    name: 'Quotation Quay',
    description: 'Direct speech and dialogue',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'punctuation-port-7',
    planet: 'punctuation-port',
    levelNumber: 7,
    name: 'Semicolon Strait',
    description: 'Connecting related ideas',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'punctuation-port-8',
    planet: 'punctuation-port',
    levelNumber: 8,
    name: 'Colon Channel',
    description: 'Introducing lists and explanations',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'punctuation-port-9',
    planet: 'punctuation-port',
    levelNumber: 9,
    name: 'Parentheses Pier',
    description: 'Additional information and asides',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'punctuation-port-10',
    planet: 'punctuation-port',
    levelNumber: 10,
    name: 'Punctuation Captain',
    description: 'Complex punctuation combinations',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // GRAMMAR GALAXY LEVELS
  {
    id: 'grammar-galaxy-1',
    planet: 'grammar-galaxy',
    levelNumber: 1,
    name: 'Noun Nebula',
    description: 'Identify people, places, and things',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'grammar-galaxy-2',
    planet: 'grammar-galaxy',
    levelNumber: 2,
    name: 'Adjective Asteroid',
    description: 'Describing words and their power',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'grammar-galaxy-3',
    planet: 'grammar-galaxy',
    levelNumber: 3,
    name: 'Pronoun Planet',
    description: 'Words that replace nouns',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'grammar-galaxy-4',
    planet: 'grammar-galaxy',
    levelNumber: 4,
    name: 'Article Atmosphere',
    description: 'A, an, and the mastery',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'grammar-galaxy-5',
    planet: 'grammar-galaxy',
    levelNumber: 5,
    name: 'Adverb Orbit',
    description: 'Words that modify verbs and adjectives',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'grammar-galaxy-6',
    planet: 'grammar-galaxy',
    levelNumber: 6,
    name: 'Preposition Portal',
    description: 'Words showing relationships',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'grammar-galaxy-7',
    planet: 'grammar-galaxy',
    levelNumber: 7,
    name: 'Conjunction Cosmos',
    description: 'Connecting words and ideas',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'grammar-galaxy-8',
    planet: 'grammar-galaxy',
    levelNumber: 8,
    name: 'Interjection Impact',
    description: 'Expressions of emotion',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'grammar-galaxy-9',
    planet: 'grammar-galaxy',
    levelNumber: 9,
    name: 'Complex Grammar',
    description: 'Advanced grammatical structures',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'grammar-galaxy-10',
    planet: 'grammar-galaxy',
    levelNumber: 10,
    name: 'Grammar Guardian',
    description: 'Master all parts of speech',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // VOCABULARY VILLAGE LEVELS
  {
    id: 'vocabulary-village-1',
    planet: 'vocabulary-village',
    levelNumber: 1,
    name: 'Word Meaning Meadow',
    description: 'Understanding basic word definitions',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'vocabulary-village-2',
    planet: 'vocabulary-village',
    levelNumber: 2,
    name: 'Synonym Square',
    description: 'Words with similar meanings',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'vocabulary-village-3',
    planet: 'vocabulary-village',
    levelNumber: 3,
    name: 'Antonym Avenue',
    description: 'Words with opposite meanings',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'vocabulary-village-4',
    planet: 'vocabulary-village',
    levelNumber: 4,
    name: 'Context Clue Corner',
    description: 'Using surrounding words for meaning',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'vocabulary-village-5',
    planet: 'vocabulary-village',
    levelNumber: 5,
    name: 'Prefix Park',
    description: 'Word beginnings that change meaning',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'vocabulary-village-6',
    planet: 'vocabulary-village',
    levelNumber: 6,
    name: 'Suffix Street',
    description: 'Word endings that modify meaning',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'vocabulary-village-7',
    planet: 'vocabulary-village',
    levelNumber: 7,
    name: 'Root Word Ranch',
    description: 'Base words and their families',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'vocabulary-village-8',
    planet: 'vocabulary-village',
    levelNumber: 8,
    name: 'Idiom Inn',
    description: 'Expressions with hidden meanings',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'vocabulary-village-9',
    planet: 'vocabulary-village',
    levelNumber: 9,
    name: 'Advanced Vocabulary Valley',
    description: 'Complex and sophisticated words',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'vocabulary-village-10',
    planet: 'vocabulary-village',
    levelNumber: 10,
    name: 'Word Wizard Workshop',
    description: 'Master vocabulary strategist',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // SENTENCE CITY LEVELS
  {
    id: 'sentence-city-1',
    planet: 'sentence-city',
    levelNumber: 1,
    name: 'Simple Sentence Station',
    description: 'Building basic complete sentences',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'sentence-city-2',
    planet: 'sentence-city',
    levelNumber: 2,
    name: 'Subject Predicate Plaza',
    description: 'Understanding sentence parts',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'sentence-city-3',
    planet: 'sentence-city',
    levelNumber: 3,
    name: 'Question Construction Quarter',
    description: 'Forming interrogative sentences',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'sentence-city-4',
    planet: 'sentence-city',
    levelNumber: 4,
    name: 'Compound Sentence Center',
    description: 'Joining simple sentences together',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'sentence-city-5',
    planet: 'sentence-city',
    levelNumber: 5,
    name: 'Complex Sentence Circuit',
    description: 'Dependent and independent clauses',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'sentence-city-6',
    planet: 'sentence-city',
    levelNumber: 6,
    name: 'Paragraph Park',
    description: 'Organizing sentences into paragraphs',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'sentence-city-7',
    planet: 'sentence-city',
    levelNumber: 7,
    name: 'Transition Tower',
    description: 'Connecting ideas smoothly',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'sentence-city-8',
    planet: 'sentence-city',
    levelNumber: 8,
    name: 'Writing Structure Skyscraper',
    description: 'Organizing longer pieces of writing',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'sentence-city-9',
    planet: 'sentence-city',
    levelNumber: 9,
    name: 'Style and Voice Villa',
    description: 'Developing unique writing style',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'sentence-city-10',
    planet: 'sentence-city',
    levelNumber: 10,
    name: 'Master Writer Mansion',
    description: 'Advanced composition techniques',
    difficulty: 'advanced',
    questionsCount: 50
  }
];

// Utility functions
export const getPlanetLevels = (planet: Planet): Level[] => {
  return levels.filter(level => level.planet === planet).sort((a, b) => a.levelNumber - b.levelNumber);
};

export const getLevelById = (levelId: string): Level | undefined => {
  return levels.find(level => level.id === levelId);
};

export const getExercisesForLevel = (planet: Planet, levelNumber: number): Exercise[] => {
  // Get real questions from the questions database
  const questions = getQuestionsForLevel(planet, levelNumber);
  
  // If no real questions exist yet, return empty array (will be handled by the game)
  return questions;
};

export const getNextExercise = (planet: Planet, levelNumber: number, completedQuestions: number[]): Exercise | null => {
  const levelExercises = getExercisesForLevel(planet, levelNumber);
  const availableExercises = levelExercises.filter(ex => !completedQuestions.includes(ex.questionNumber));
  return availableExercises[0] || null;
};

export const calculateLevelScore = (correctAnswers: number, totalQuestions: number): number => {
  return Math.round((correctAnswers / totalQuestions) * 100);
};

export const calculateStars = (score: number): number => {
  if (score >= 90) return 3;
  if (score >= 70) return 2;
  return 1;
};

export const isLevelUnlocked = (planet: Planet, levelNumber: number, progress: any): boolean => {
  // Level 1 is always unlocked
  if (levelNumber === 1) return true;
  
  // Check if previous level was completed with at least 70% score
  const previousLevel = levelNumber - 1;
  const planetProgress = progress.planetProgress[planet];
  
  if (!planetProgress) return false;
  
  const previousLevelProgress = planetProgress.levelProgress[previousLevel];
  return previousLevelProgress && previousLevelProgress.score >= 70;
}; 