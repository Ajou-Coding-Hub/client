import request from "@/apis";
import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Github from "@/utils/github";

export default function ValidateGithub() {
  const [params] = useSearchParams();

  useEffect(() => {
    const code = params.get("code");
    if (!code) {
      return;
    }
    request
      .post("/auth/github", {
        code,
      })
      .then((response) => {
        Github.closeAuth();
      })
      .catch(() => {
        alert("깃허브 갱신 실패");
        Github.closeAuth();
      });
  }, [params]);

  return (
    <div className="bg-white top-0 absolute w-screen h-screen flex justify-center items-center">
      <svg
        className="animate-spin -ml-1 mr-3 h-16 w-16 text-indigo-700"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}
