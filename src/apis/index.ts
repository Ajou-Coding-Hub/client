import { useAuth } from "@/store";
import axios from "axios";

export const API_HOST = !import.meta.env.DEV
  ? import.meta.env.API_HOST
  : "http://localhost:3000";

const getToken = () => {
  console.log(useAuth.getState());
  return "Bearer " + useAuth.getState().jwtToken;
};

const request = axios.create({
  baseURL: API_HOST,
  headers: getToken()
    ? {
        Authorization: getToken(),
      }
    : undefined,
});

export default request;
