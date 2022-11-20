import create from "zustand";

interface IUi {
  isDarkMode: boolean;
  setDarkmode: (isDark: boolean) => void;
}

export const useUI = create<IUi>((set) => ({
  isDarkMode: false,
  setDarkmode: (isDark: boolean) =>
    set({
      isDarkMode: isDark,
    }),
}));
