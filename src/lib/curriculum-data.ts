import { PlanetInfo, Level, Exercise, Planet } from '@/types/curriculum';
import { getQuestionsForLevel } from './questions-data';

export const planetsInfo: PlanetInfo[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    description: 'The closest planet to the Sun, where you\'ll master basic verbs and action words!',
    theme: 'Hot rocky surface with craters',
    focus: ['Action verbs', 'Verb tenses', 'Subject-verb agreement', 'Irregular verbs'],
    icon: '☄️',
    color: 'from-orange-500 to-red-600',
    levels: 10
  },
  {
    id: 'venus',
    name: 'Venus',
    description: 'The hottest planet where you\'ll learn to express yourself with proper punctuation!',
    theme: 'Thick cloudy atmosphere with volcanic landscapes',
    focus: ['Periods', 'Question marks', 'Commas', 'Apostrophes', 'Capitalization', 'Quotation marks'],
    icon: '🌋',
    color: 'from-yellow-500 to-orange-600',
    levels: 10
  },
  {
    id: 'earth',
    name: 'Earth',
    description: 'Our home planet where you\'ll explore the foundations of grammar!',
    theme: 'Blue oceans and green continents',
    focus: ['Past tense', 'Past participle', 'Nouns', 'Adjectives', 'Adverbs', 'Parts of speech'],
    icon: '🌍',
    color: 'from-gray-900 to-black',
    levels: 10
  },
  {
    id: 'mars',
    name: 'Mars',
    description: 'The Red Planet where you\'ll build your vocabulary like a space explorer!',
    theme: 'Red desert landscape with mountains and valleys',
    focus: ['Synonyms', 'Antonyms', 'Word meanings', 'Context clues', 'Prefixes', 'Suffixes'],
    icon: '🔴',
    color: 'from-red-500 to-orange-600',
    levels: 10
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    description: 'The largest planet where you\'ll master sentence structure and composition!',
    theme: 'Giant gas planet with swirling storms',
    focus: ['Sentence structure', 'Paragraph organization', 'Writing style', 'Complex sentences'],
    icon: '🪐',
    color: 'from-yellow-500 to-orange-600',
    levels: 10
  },
  {
    id: 'saturn',
    name: 'Saturn',
    description: 'The ringed planet where you\'ll learn advanced writing techniques!',
    theme: 'Beautiful rings and swirling atmosphere',
    focus: ['Advanced writing', 'Essay structure', 'Literary devices', 'Creative writing'],
    icon: '💫',
    color: 'from-yellow-400 to-orange-500',
    levels: 10
  },
  {
    id: 'uranus',
    name: 'Uranus',
    description: 'The sideways planet where you\'ll explore reading comprehension!',
    theme: 'Blue-green ice giant with tilted axis',
    focus: ['Reading comprehension', 'Critical thinking', 'Text analysis', 'Inference'],
    icon: '🌊',
    color: 'from-blue-400 to-teal-500',
    levels: 10
  },
  {
    id: 'neptune',
    name: 'Neptune',
    description: 'The windiest planet where you\'ll master advanced vocabulary!',
    theme: 'Deep blue atmosphere with powerful storms',
    focus: ['Advanced vocabulary', 'Word origins', 'Etymology', 'Academic language'],
    icon: '🌀',
    color: 'from-blue-600 to-indigo-700',
    levels: 10
  },
  {
    id: 'pluto',
    name: 'Pluto',
    description: 'The dwarf planet where you\'ll become a master of English!',
    theme: 'Icy surface with heart-shaped feature',
    focus: ['Mastery challenges', 'Advanced grammar', 'Complex vocabulary', 'Writing excellence'],
    icon: '❄️',
    color: 'from-gray-400 to-blue-500',
    levels: 10
  }
];

export const levels: Level[] = [
  // MERCURY LEVELS
  {
    id: 'mercury-1',
    planet: 'mercury',
    levelNumber: 1,
    name: 'Action Word Basics',
    description: 'Learn to identify simple action verbs',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'mercury-2',
    planet: 'mercury',
    levelNumber: 2,
    name: 'Present Tense Power',
    description: 'Master present tense verbs',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'mercury-3',
    planet: 'mercury',
    levelNumber: 3,
    name: 'Past Tense Adventures',
    description: 'Explore regular past tense verbs',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'mercury-4',
    planet: 'mercury',
    levelNumber: 4,
    name: 'Future Tense Journey',
    description: 'Understand future tense construction',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'mercury-5',
    planet: 'mercury',
    levelNumber: 5,
    name: 'Irregular Verb Quest',
    description: 'Conquer irregular past tense verbs',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'mercury-6',
    planet: 'mercury',
    levelNumber: 6,
    name: 'Perfect Tense Challenge',
    description: 'Learn present and past perfect tenses',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'mercury-7',
    planet: 'mercury',
    levelNumber: 7,
    name: 'Continuous Action',
    description: 'Master progressive/continuous tenses',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'mercury-8',
    planet: 'mercury',
    levelNumber: 8,
    name: 'Subject-Verb Harmony',
    description: 'Perfect subject-verb agreement',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'mercury-9',
    planet: 'mercury',
    levelNumber: 9,
    name: 'Conditional Verbs',
    description: 'Explore conditional and subjunctive moods',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'mercury-10',
    planet: 'mercury',
    levelNumber: 10,
    name: 'Verb Master',
    description: 'Advanced verb usage and voice',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // VENUS LEVELS
  {
    id: 'venus-1',
    planet: 'venus',
    levelNumber: 1,
    name: 'Period and Question Basics',
    description: 'Basic sentence endings',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'venus-2',
    planet: 'venus',
    levelNumber: 2,
    name: 'Capital Letter Rules',
    description: 'When to use capital letters',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'venus-3',
    planet: 'venus',
    levelNumber: 3,
    name: 'Exclamation Power',
    description: 'Express excitement and emotion',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'venus-4',
    planet: 'venus',
    levelNumber: 4,
    name: 'Comma Mastery',
    description: 'Using commas in lists and sentences',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'venus-5',
    planet: 'venus',
    levelNumber: 5,
    name: 'Apostrophe Adventure',
    description: 'Contractions and possessive forms',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'venus-6',
    planet: 'venus',
    levelNumber: 6,
    name: 'Quotation Quest',
    description: 'Direct speech and dialogue',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'venus-7',
    planet: 'venus',
    levelNumber: 7,
    name: 'Semicolon Skills',
    description: 'Connecting related ideas',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'venus-8',
    planet: 'venus',
    levelNumber: 8,
    name: 'Colon Command',
    description: 'Introducing lists and explanations',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'venus-9',
    planet: 'venus',
    levelNumber: 9,
    name: 'Parentheses Power',
    description: 'Additional information and asides',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'venus-10',
    planet: 'venus',
    levelNumber: 10,
    name: 'Punctuation Master',
    description: 'Complex punctuation combinations',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // EARTH LEVELS
  {
    id: 'earth-1',
    planet: 'earth',
    levelNumber: 1,
    name: 'Past Tense Mastery',
    description: 'Master past tense and past participle forms',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'earth-2',
    planet: 'earth',
    levelNumber: 2,
    name: 'Adjective Adventure',
    description: 'Describing words and their power',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'earth-3',
    planet: 'earth',
    levelNumber: 3,
    name: 'Pronoun Power',
    description: 'Words that replace nouns',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'earth-4',
    planet: 'earth',
    levelNumber: 4,
    name: 'Past Continuous Tense',
    description: 'Master ongoing actions in the past',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'earth-5',
    planet: 'earth',
    levelNumber: 5,
    name: 'Past Participle Mastery',
    description: 'Perfect your past participle usage',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'earth-6',
    planet: 'earth',
    levelNumber: 6,
    name: 'Mixed Past Tenses',
    description: 'Combine different past tenses and passive voice',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'earth-7',
    planet: 'earth',
    levelNumber: 7,
    name: 'Advanced Past Constructions',
    description: 'Complex past tense structures and grammar',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'earth-8',
    planet: 'earth',
    levelNumber: 8,
    name: 'Master Complex Tenses',
    description: 'Subjunctive mood, conditionals, and inversion',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'earth-9',
    planet: 'earth',
    levelNumber: 9,
    name: 'Expert Passive Voice',
    description: 'Advanced passive constructions and modal passives',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'earth-10',
    planet: 'earth',
    levelNumber: 10,
    name: 'Ultimate Grammar Mastery',
    description: 'Sophisticated academic language and complex structures',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // MARS LEVELS
  {
    id: 'mars-1',
    planet: 'mars',
    levelNumber: 1,
    name: 'Word Meaning Basics',
    description: 'Understanding basic word definitions',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'mars-2',
    planet: 'mars',
    levelNumber: 2,
    name: 'Synonym Search',
    description: 'Words with similar meanings',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'mars-3',
    planet: 'mars',
    levelNumber: 3,
    name: 'Antonym Adventure',
    description: 'Words with opposite meanings',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'mars-4',
    planet: 'mars',
    levelNumber: 4,
    name: 'Context Clue Quest',
    description: 'Using surrounding words for meaning',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'mars-5',
    planet: 'mars',
    levelNumber: 5,
    name: 'Prefix Power',
    description: 'Word beginnings that change meaning',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'mars-6',
    planet: 'mars',
    levelNumber: 6,
    name: 'Suffix Success',
    description: 'Word endings that modify meaning',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'mars-7',
    planet: 'mars',
    levelNumber: 7,
    name: 'Root Word Quest',
    description: 'Base words and their families',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'mars-8',
    planet: 'mars',
    levelNumber: 8,
    name: 'Idiom Adventure',
    description: 'Expressions with hidden meanings',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'mars-9',
    planet: 'mars',
    levelNumber: 9,
    name: 'Advanced Vocabulary',
    description: 'Complex and sophisticated words',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'mars-10',
    planet: 'mars',
    levelNumber: 10,
    name: 'Word Wizard',
    description: 'Master vocabulary strategist',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // JUPITER LEVELS
  {
    id: 'jupiter-1',
    planet: 'jupiter',
    levelNumber: 1,
    name: 'Simple Sentence Basics',
    description: 'Building basic complete sentences',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'jupiter-2',
    planet: 'jupiter',
    levelNumber: 2,
    name: 'Subject Predicate Power',
    description: 'Understanding sentence parts',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'jupiter-3',
    planet: 'jupiter',
    levelNumber: 3,
    name: 'Question Quest',
    description: 'Forming interrogative sentences',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'jupiter-4',
    planet: 'jupiter',
    levelNumber: 4,
    name: 'Compound Sentence Challenge',
    description: 'Joining simple sentences together',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'jupiter-5',
    planet: 'jupiter',
    levelNumber: 5,
    name: 'Complex Sentence Quest',
    description: 'Dependent and independent clauses',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'jupiter-6',
    planet: 'jupiter',
    levelNumber: 6,
    name: 'Paragraph Power',
    description: 'Organizing sentences into paragraphs',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'jupiter-7',
    planet: 'jupiter',
    levelNumber: 7,
    name: 'Transition Triumph',
    description: 'Connecting ideas smoothly',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'jupiter-8',
    planet: 'jupiter',
    levelNumber: 8,
    name: 'Writing Structure',
    description: 'Organizing longer pieces of writing',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'jupiter-9',
    planet: 'jupiter',
    levelNumber: 9,
    name: 'Style and Voice',
    description: 'Developing unique writing style',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'jupiter-10',
    planet: 'jupiter',
    levelNumber: 10,
    name: 'Master Writer',
    description: 'Advanced composition techniques',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // SATURN LEVELS
  {
    id: 'saturn-1',
    planet: 'saturn',
    levelNumber: 1,
    name: 'Essay Basics',
    description: 'Understanding essay structure',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'saturn-2',
    planet: 'saturn',
    levelNumber: 2,
    name: 'Introduction Power',
    description: 'Writing strong introductions',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'saturn-3',
    planet: 'saturn',
    levelNumber: 3,
    name: 'Body Paragraph Quest',
    description: 'Developing main ideas',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'saturn-4',
    planet: 'saturn',
    levelNumber: 4,
    name: 'Conclusion Challenge',
    description: 'Writing effective conclusions',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'saturn-5',
    planet: 'saturn',
    levelNumber: 5,
    name: 'Literary Devices',
    description: 'Using figurative language',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'saturn-6',
    planet: 'saturn',
    levelNumber: 6,
    name: 'Creative Writing',
    description: 'Expressing imagination',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'saturn-7',
    planet: 'saturn',
    levelNumber: 7,
    name: 'Advanced Style',
    description: 'Developing unique voice',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'saturn-8',
    planet: 'saturn',
    levelNumber: 8,
    name: 'Writing Techniques',
    description: 'Advanced writing methods',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'saturn-9',
    planet: 'saturn',
    levelNumber: 9,
    name: 'Writing Mastery',
    description: 'Perfecting writing skills',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'saturn-10',
    planet: 'saturn',
    levelNumber: 10,
    name: 'Writing Excellence',
    description: 'Achieving writing perfection',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // URANUS LEVELS
  {
    id: 'uranus-1',
    planet: 'uranus',
    levelNumber: 1,
    name: 'Reading Basics',
    description: 'Understanding main ideas',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'uranus-2',
    planet: 'uranus',
    levelNumber: 2,
    name: 'Detail Discovery',
    description: 'Finding supporting details',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'uranus-3',
    planet: 'uranus',
    levelNumber: 3,
    name: 'Context Clues',
    description: 'Using context to understand',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'uranus-4',
    planet: 'uranus',
    levelNumber: 4,
    name: 'Inference Quest',
    description: 'Reading between the lines',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'uranus-5',
    planet: 'uranus',
    levelNumber: 5,
    name: 'Text Analysis',
    description: 'Understanding text structure',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'uranus-6',
    planet: 'uranus',
    levelNumber: 6,
    name: 'Critical Reading',
    description: 'Evaluating text content',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'uranus-7',
    planet: 'uranus',
    levelNumber: 7,
    name: 'Advanced Analysis',
    description: 'Deep text understanding',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'uranus-8',
    planet: 'uranus',
    levelNumber: 8,
    name: 'Reading Mastery',
    description: 'Perfecting comprehension',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'uranus-9',
    planet: 'uranus',
    levelNumber: 9,
    name: 'Critical Thinking',
    description: 'Advanced text evaluation',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'uranus-10',
    planet: 'uranus',
    levelNumber: 10,
    name: 'Reading Excellence',
    description: 'Achieving reading mastery',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // NEPTUNE LEVELS
  {
    id: 'neptune-1',
    planet: 'neptune',
    levelNumber: 1,
    name: 'Word Origins',
    description: 'Understanding word roots',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'neptune-2',
    planet: 'neptune',
    levelNumber: 2,
    name: 'Greek Roots',
    description: 'Words from Greek origin',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'neptune-3',
    planet: 'neptune',
    levelNumber: 3,
    name: 'Latin Roots',
    description: 'Words from Latin origin',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'neptune-4',
    planet: 'neptune',
    levelNumber: 4,
    name: 'Word Families',
    description: 'Related word groups',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'neptune-5',
    planet: 'neptune',
    levelNumber: 5,
    name: 'Academic Words',
    description: 'Formal vocabulary',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'neptune-6',
    planet: 'neptune',
    levelNumber: 6,
    name: 'Technical Terms',
    description: 'Specialized vocabulary',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'neptune-7',
    planet: 'neptune',
    levelNumber: 7,
    name: 'Advanced Etymology',
    description: 'Complex word origins',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'neptune-8',
    planet: 'neptune',
    levelNumber: 8,
    name: 'Word Mastery',
    description: 'Perfecting vocabulary',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'neptune-9',
    planet: 'neptune',
    levelNumber: 9,
    name: 'Language Expert',
    description: 'Advanced word knowledge',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'neptune-10',
    planet: 'neptune',
    levelNumber: 10,
    name: 'Vocabulary Excellence',
    description: 'Achieving word mastery',
    difficulty: 'advanced',
    questionsCount: 50
  },

  // PLUTO LEVELS
  {
    id: 'pluto-1',
    planet: 'pluto',
    levelNumber: 1,
    name: 'Mastery Basics',
    description: 'Foundational skills review',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'pluto-2',
    planet: 'pluto',
    levelNumber: 2,
    name: 'Grammar Mastery',
    description: 'Advanced grammar skills',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'pluto-3',
    planet: 'pluto',
    levelNumber: 3,
    name: 'Vocabulary Mastery',
    description: 'Advanced vocabulary skills',
    difficulty: 'beginner',
    questionsCount: 50
  },
  {
    id: 'pluto-4',
    planet: 'pluto',
    levelNumber: 4,
    name: 'Writing Mastery',
    description: 'Advanced writing skills',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'pluto-5',
    planet: 'pluto',
    levelNumber: 5,
    name: 'Reading Mastery',
    description: 'Advanced reading skills',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'pluto-6',
    planet: 'pluto',
    levelNumber: 6,
    name: 'Critical Thinking',
    description: 'Advanced analysis skills',
    difficulty: 'intermediate',
    questionsCount: 50
  },
  {
    id: 'pluto-7',
    planet: 'pluto',
    levelNumber: 7,
    name: 'Language Expert',
    description: 'Advanced language skills',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'pluto-8',
    planet: 'pluto',
    levelNumber: 8,
    name: 'Communication Master',
    description: 'Perfecting communication',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'pluto-9',
    planet: 'pluto',
    levelNumber: 9,
    name: 'Language Champion',
    description: 'Advanced language mastery',
    difficulty: 'advanced',
    questionsCount: 50
  },
  {
    id: 'pluto-10',
    planet: 'pluto',
    levelNumber: 10,
    name: 'English Warrior',
    description: 'Achieving language excellence',
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