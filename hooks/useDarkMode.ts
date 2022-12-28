import create from "zustand";

export interface DarkModeState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkMode = create<DarkModeState>()((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useDarkMode;
