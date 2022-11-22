import request from "@/apis";
import { useAuth } from "@/store";
import { useCallback } from "react";

export const useGoogleLogin = () => {
  const { setToken, setProfile } = useAuth((state) => state);
  const handleGoogleLogin = useCallback(async (accessToken: string) => {
    console.log(accessToken);
    const response = await request.post("/auth/login", {
      accessToken,
    });
    if (response.status === 201) {
      const { token, refreshToken, profile } = response.data;
      setToken(token, refreshToken);
      setProfile(profile);
    }
  }, []);

  const googleLogin = useCallback(() => {
    document.getElementById("button-label")?.click();
  }, []);
  return { googleLogin, handleGoogleLogin };
};
