import create from "zustand";

type Store = {
  showProfile: boolean;
  setShowProfile: (showProfile: boolean) => void;
};

export const useStore = create<Store>((set) => ({
  showProfile: false,
  setShowProfile: (showProfile) => set({ showProfile })
}));
