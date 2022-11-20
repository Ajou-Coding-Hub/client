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
            className="text-black text-7xl text-center font-extrabold"
            ref={ref}
          >
            개발과 배포는 저희에게 맡기세요.
          </h1>
          <h3 className="text-gray-700 text-xl mt-5">
            개발 및 배포를 지원하는 Cloud IDE를 몇초만에 만들어줄게요 !
          </h3>
          <Link to="/workspace">
            <Button className="mt-10" size="lg">
              시작하기
            </Button>
          </Link>
        </div>
      )}
    </InView>
  );
};
const LandingPage = () => {
  return (
    <div className="bg-white bg-gradient-to-b h-full">
      <FirstStep />
    </div>
  );
};

export default LandingPage;
