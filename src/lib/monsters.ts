import { Planet } from '@/types/curriculum';

export interface Monster {
  id: string;
  name: string;
  emoji: string;
}

export const planetMonsters: Record<Planet, Monster[]> = {
  mercury: [
    { id: 'mercury-1', name: 'Solar Sprite', emoji: '☀️' },
    { id: 'mercury-2', name: 'Crater Critter', emoji: '🪨' },
  ],
  venus: [
    { id: 'venus-1', name: 'Lava Lurker', emoji: '🌋' },
    { id: 'venus-2', name: 'Cloud Phantom', emoji: '☁️' },
  ],
  earth: [
    { id: 'earth-1', name: 'Forest Fiend', emoji: '🌲' },
    { id: 'earth-2', name: 'Ocean Ogre', emoji: '🌊' },
  ],
  mars: [
    { id: 'mars-1', name: 'Dust Demon', emoji: '💨' },
    { id: 'mars-2', name: 'Red Rock Goblin', emoji: '🪨' },
  ],
  jupiter: [
    { id: 'jupiter-1', name: 'Storm Beast', emoji: '🌩️' },
    { id: 'jupiter-2', name: 'Gas Giant Goblin', emoji: '🌀' },
  ],
  saturn: [
    { id: 'saturn-1', name: 'Ring Wraith', emoji: '💍' },
    { id: 'saturn-2', name: 'Titan Troll', emoji: '👹' },
  ],
  uranus: [
    { id: 'uranus-1', name: 'Ice Imp', emoji: '❄️' },
    { id: 'uranus-2', name: 'Tilted Trickster', emoji: '🌀' },
  ],
  neptune: [
    { id: 'neptune-1', name: 'Sea Serpent', emoji: '🐉' },
    { id: 'neptune-2', name: 'Wind Wisp', emoji: '🌊' },
  ],
  pluto: [
    { id: 'pluto-1', name: 'Frozen Fiend', emoji: '🧊' },
    { id: 'pluto-2', name: 'Shadow Specter', emoji: '👻' },
  ],
};
