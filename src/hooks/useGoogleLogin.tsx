import request from "@/apis";
import { useAuth } from "@/store";
import { useGoogleLogin as useOAuthGoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";

export const useGoogleLogin = () => {
  const { setToken, setProfile } = useAuth((state) => state);
  const handleGoogleLogin = useCallback(async (accessToken: string) => {
    const response = await request.post("/auth/login", {
      accessToken,
    });
    if (response.status === 201) {
      const { token, refreshToken, profile } = response.data;
      setToken(token, refreshToken);
      setProfile(profile);
    }
  }, []);

  const googleLogin = useOAuthGoogleLogin({
    onSuccess: ({ access_token }) =>
      access_token && handleGoogleLogin(access_token),
  });
  return { googleLogin, handleGoogleLogin };
};
