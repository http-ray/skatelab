import { create } from 'zustand';
import { Trick } from '@/data/tricks';

export type Stance = 'regular' | 'goofy';
export type Direction = 'frontside' | 'backside' | 'none';

interface TrickStore {
  selectedTrick: Trick | null;
  stance: Stance;
  direction: Direction;
  setSelectedTrick: (trick: Trick | null) => void;
  setStance: (stance: Stance) => void;
  setDirection: (direction: Direction) => void;
  reset: () => void;
}

export const useTrickStore = create<TrickStore>((set) => ({
  selectedTrick: null,
  stance: 'regular',
  direction: 'none',
  setSelectedTrick: (trick) => set({ selectedTrick: trick }),
  setStance: (stance) => set({ stance }),
  setDirection: (direction) => set({ direction }),
  reset: () => set({ selectedTrick: null, stance: 'regular', direction: 'none' }),
}));
