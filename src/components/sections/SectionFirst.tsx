import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useCallback } from "react";
import { useAuth } from "@/store";
import { useGoogleLogin } from "@/hooks/useGoogleLogin";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";

export const SectionFirst = ({ data }: any) => {
  const navigate = useNavigate();
  const { isLoggedin } = useAuth();
  const { handleGoogleLogin } = useGoogleLogin();

  const handleStarted = useCallback(() => {
    if (isLoggedin) {
      navigate("/workspace");
      return;
    }
    toast.info("구글 로그인이 필요합니다.");
  }, [navigate]);

  return (
    <div className="pt-24 pb-6 md:pb-12 px-6 flex flex-col items-center text-center">
      <h1
        className="text-7xl text-center font-extrabold leading-tight"
        dangerouslySetInnerHTML={{ __html: data.title }}
      ></h1>
      <p className="text-gh-secondary text-xl mt-5">
        개발 및 배포를 지원하는 Cloud IDE를 몇초만에 만들어줄게요 !
      </p>
      <div className="mt-6 md:mt-10 mb-6">
        <button onClick={handleStarted} className="get-started-button">
          Get started <IoIosArrowForward className="-mb-[3px]" />
        </button>
      </div>
    </div>
  );
};
