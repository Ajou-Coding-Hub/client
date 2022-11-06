import create, { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";

type ProfileType = {
  name: string;
  email: string;
  picture: string;
  hd: string;
};

interface IAuth {
  jwtToken: string;
  refreshToken: string;
  isLoggedin: boolean;
  profile: ProfileType;
  setProfile: (profile: ProfileType) => void;
  setJwtToken: (token: string) => void;
  logout: () => void;
}

const store = persist(
  (set) => ({
    jwtToken: "",
    refreshToken: "",
    isLoggedin: false,
    profile: {
      email: "",
      hd: "",
      name: "",
      picture: "",
    },
    setProfile: (profile: ProfileType) =>
      set({
        profile,
      }),
    setJwtToken: (token: string) =>
      set({
        jwtToken: token,
        isLoggedin: true,
      }),
    logout: () => {
      set({
        jwtToken: "",
        refreshToken: "",
        isLoggedin: false,
        profile: {
          email: "",
          hd: "",
          name: "",
          picture: "",
        },
      });
    },
  }),
  {
    name: "ajoucloud",
    getStorage: () => localStorage,
  }
);

export const useAuth = create(
  import.meta.env.DEV
    ? (devtools(store) as StateCreator<IAuth>)
    : (store as StateCreator<IAuth>)
);
