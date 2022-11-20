import Button from "@/components/atoms/Button";
import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const FirstStep = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div className="relative flex flex-col justify-center items-center pt-24">
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

const SecondStep = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div className="relative flex justify-center items-end">
          <div />
          <div className="relative">
            <img
              src="/vscode-example.webp"
              className="relative w-[984px] h-[624px] z-10 translate-y-52"
            />
            <img
              src="/glow.png"
              className="absolute h-auto pointer-events-none w-full left-0 top-[13%] scale-[2]"
            />
          </div>
          <div />
        </div>
      )}
    </InView>
  );
};
const LandingPage = () => {
  return (
    <div className="bg-white bg-gradient-to-b h-full">
      <FirstStep />
      <SecondStep />
    </div>
  );
};

export default LandingPage;
