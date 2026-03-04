export interface Trick {
  id: string;
  name: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description: string;
  variations: string[];
  modelPath?: string; // Path to 3D model (optional for now)
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string; // Could be emoji or icon name
}

export const categories: Category[] = [
  {
    id: 'flatground',
    name: 'Flatground',
    description: 'Tricks performed on flat surfaces',
    icon: '🛹',
  },
  {
    id: 'rail',
    name: 'Rail',
    description: 'Grinds and slides on rails',
    icon: '⚡',
  },
  {
    id: 'ledge',
    name: 'Ledge',
    description: 'Tricks on ledges and curbs',
    icon: '📦',
  },
  {
    id: 'transition',
    name: 'Transition',
    description: 'Tricks on ramps and bowls',
    icon: '🌊',
  },
];

export const tricks: Trick[] = [
  // Flatground Tricks
  {
    id: 'ollie',
    name: 'Ollie',
    category: 'flatground',
    difficulty: 'beginner',
    description: 'The fundamental skateboarding trick - a jump with the board',
    variations: ['Nollie', 'Fakie Ollie'],
  },
  {
    id: 'kickflip',
    name: 'Kickflip',
    category: 'flatground',
    difficulty: 'intermediate',
    description: 'Board flips along the lengthwise axis',
    variations: ['Varial Kickflip', 'Double Kickflip', 'Nollie Kickflip'],
  },
  {
    id: 'heelflip',
    name: 'Heelflip',
    category: 'flatground',
    difficulty: 'intermediate',
    description: 'Board flips in the opposite direction of a kickflip',
    variations: ['Varial Heelflip', 'Double Heelflip', 'Nollie Heelflip'],
  },
  {
    id: 'tre-flip',
    name: '360 Flip (Tre Flip)',
    category: 'flatground',
    difficulty: 'advanced',
    description: '360 shove-it combined with a kickflip',
    variations: ['Nollie 360 Flip', 'Fakie 360 Flip'],
  },
  {
    id: 'hardflip',
    name: 'Hardflip',
    category: 'flatground',
    difficulty: 'advanced',
    description: 'Frontside pop shove-it combined with a kickflip',
    variations: ['Nollie Hardflip', 'Fakie Hardflip'],
  },

  // Rail Tricks
  {
    id: '50-50-rail',
    name: '50-50 Grind',
    category: 'rail',
    difficulty: 'intermediate',
    description: 'Both trucks grinding on the rail',
    variations: ['BS 50-50', 'FS 50-50'],
  },
  {
    id: '5-0-rail',
    name: '5-0 Grind',
    category: 'rail',
    difficulty: 'intermediate',
    description: 'Only the back truck grinding',
    variations: ['BS 5-0', 'FS 5-0'],
  },
  {
    id: 'nosegrind-rail',
    name: 'Nosegrind',
    category: 'rail',
    difficulty: 'intermediate',
    description: 'Only the front truck grinding',
    variations: ['BS Nosegrind', 'FS Nosegrind'],
  },
  {
    id: 'boardslide-rail',
    name: 'Boardslide',
    category: 'rail',
    difficulty: 'intermediate',
    description: 'Center of board slides along the rail',
    variations: ['BS Boardslide', 'FS Boardslide'],
  },
  {
    id: 'lipslide-rail',
    name: 'Lipslide',
    category: 'rail',
    difficulty: 'advanced',
    description: 'Slide with the board rotating 90 degrees over the obstacle',
    variations: ['BS Lipslide', 'FS Lipslide'],
  },

  // Ledge Tricks
  {
    id: '50-50-ledge',
    name: '50-50 Grind',
    category: 'ledge',
    difficulty: 'beginner',
    description: 'Both trucks grinding on the ledge',
    variations: ['BS 50-50', 'FS 50-50'],
  },
  {
    id: 'boardslide-ledge',
    name: 'Boardslide',
    category: 'ledge',
    difficulty: 'intermediate',
    description: 'Center of board slides along the ledge',
    variations: ['BS Boardslide', 'FS Boardslide'],
  },
  {
    id: 'noseslide-ledge',
    name: 'Noseslide',
    category: 'ledge',
    difficulty: 'intermediate',
    description: 'Nose of board slides along the ledge',
    variations: ['BS Noseslide', 'FS Noseslide'],
  },
  {
    id: 'tailslide-ledge',
    name: 'Tailslide',
    category: 'ledge',
    difficulty: 'intermediate',
    description: 'Tail of board slides along the ledge',
    variations: ['BS Tailslide', 'FS Tailslide'],
  },
  {
    id: 'crooked-grind',
    name: 'Crooked Grind',
    category: 'ledge',
    difficulty: 'advanced',
    description: 'Front truck grinds while nose hangs over',
    variations: ['BS Crooked', 'FS Crooked'],
  },

  // Transition Tricks
  {
    id: 'rock-to-fakie',
    name: 'Rock to Fakie',
    category: 'transition',
    difficulty: 'beginner',
    description: 'Roll up, rock on the coping, roll back',
    variations: [],
  },
  {
    id: 'axle-stall',
    name: 'Axle Stall',
    category: 'transition',
    difficulty: 'beginner',
    description: 'Both trucks stall on the coping',
    variations: ['BS Axle Stall', 'FS Axle Stall'],
  },
  {
    id: 'feeble-stall',
    name: 'Feeble Stall',
    category: 'transition',
    difficulty: 'intermediate',
    description: 'Back truck on coping, board angled down',
    variations: ['BS Feeble', 'FS Feeble'],
  },
  {
    id: 'smith-stall',
    name: 'Smith Stall',
    category: 'transition',
    difficulty: 'intermediate',
    description: 'Back truck on coping, front truck dipped',
    variations: ['BS Smith', 'FS Smith'],
  },
  {
    id: 'air',
    name: 'Air',
    category: 'transition',
    difficulty: 'intermediate',
    description: 'Launch off the coping and land back in',
    variations: ['Indy Air', 'Method Air', 'Stalefish'],
  },
];
