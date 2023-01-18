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
  isSelect: true,
  setEntrance: (v) => set(() => ({ isEntrance: v })),
  setSelect: (v) => set(() => ({ isSelect: v })),
}));

/**
 * 用户设置详情
 */
export const useUserDetail = create((set) => ({
  detail: {},
  setDetail: (v) => set({ detail: v }),
}));
