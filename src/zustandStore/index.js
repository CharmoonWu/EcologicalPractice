import create from 'zustand';

export const useBearStore = create((set) => ({
  uuid: Math.random() * 10,
  bears: 0,
  reducePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

/**
 * 登陆成功展示tab
 */

export const usePurviewSet = create((set) => ({
  isEntrance: false,
  setEntrance: (v) => set(() => ({ isEntrance: v })),
}));
