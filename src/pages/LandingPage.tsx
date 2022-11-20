import Button from "@/components/atoms/Button";
import { useUI } from "@/store";
import { Carousel } from "flowbite-react";
import { InView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FirstStep = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div className="flex flex-col justify-center items-center h-full">
          <h1
            className="text-white text-7xl text-center font-extrabold"
            ref={ref}
          >
            개발과 배포는 저희에게 맡기세요.
          </h1>
          <h3 className="text-gray-300 text-xl mt-5">
            개발 및 배포를 지원하는 Cloud IDE를 몇초만에 만들어줄게요 !
          </h3>
          <Link to="/workspace">
            <Button type="white" className="mt-10 text-lg py-5 px-10">
              시작하기
            </Button>
          </Link>
        </div>
      )}
    </InView>
  );
};
const LandingPage = () => {
  const { setDarkmode } = useUI();
  useEffect(() => {
    setDarkmode(true);

    return () => {
      setDarkmode(false);
    };
  }, []);

  return (
    <div className="bg-[rgb(13,17,23)] bg-gradient-to-b from-black to-indigo-900 h-full">
      <FirstStep />
    </div>
  );
};

export default LandingPage;
