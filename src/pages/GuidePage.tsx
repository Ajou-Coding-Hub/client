/* This example requires Tailwind CSS v2.0+ */
import Button from "@/components/atoms/Button";
import GuideBox from "@/components/organisms/GuideBox";
import StartingPoint from "@/components/organisms/StartingPoint";
import { SiJavascript, SiPython, SiTypescript } from "react-icons/si";
import { Carousel } from "flowbite-react";
import Padding from "@/components/atoms/Padding";
import { useNavigate } from "react-router";

// 서버 데이터 베이스로 저장
const items = [
  {
    title: "자바스크립트 기초",
    description: "Level 1",
    icon: SiJavascript,
    background: "bg-yellow-400",
  },
  {
    title: "타입스크립트 기초",
    description: "Level 1",
    icon: SiTypescript,
    background: "bg-blue-500",
  },
  {
    title: "파이썬 기초",
    description: "Level 1",
    icon: SiPython,
    background: "bg-indigo-500",
  },
];

const items2 = [
  {
    title: "파이썬 기초",
    description: "Level 1",
    icon: SiPython,
    background: "bg-indigo-500",
  },
  {
    title: "파이썬 기초",
    description: "Level 2",
    icon: SiPython,
    background: "bg-indigo-500",
  },
  {
    title: "파이썬 기초",
    description: "Level 3",
    icon: SiPython,
    background: "bg-indigo-500",
  },
];

function GuideCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-10">
      <Carousel>
        <img
          src="/notice-1.png"
          alt="notice-1"
          className="object-contain h-full bg-[#1B2528]"
        />
        <img
          src="/notice-2.png"
          alt="notice-1"
          className="object-contain h-full bg-[#3949AB]"
        />
      </Carousel>
    </div>
  );
}

function GuideMenu() {
  return (
    <div className="flex flex-col gap-3 mb-10">
      <div className="flex gap-3">
        <GuideBox
          title="단어장 만들기"
          author="강선규"
          level={3}
          onClick={() => alert("ASD")}
          className="flex-1"
        />
        <GuideBox
          title="단어장 만들기"
          author="강선규"
          level={1}
          className="flex-1"
        />
      </div>
      <div className="flex gap-3">
        <GuideBox
          title="단어장 만들기"
          author="강선규"
          level={2}
          className="flex-1"
        />
        <GuideBox
          title="단어장 만들기"
          author="강선규"
          level={3}
          className="flex-1"
        />
      </div>
    </div>
  );
}

function GuideStartingPoint() {
  return (
    <div>
      <div className="mb-5">
        <StartingPoint
          items={items}
          title={"프로그래밍 기본기 다지기 !!"}
          description={"강선규님"}
        />
      </div>
      <div>
        <StartingPoint
          items={items2}
          title={"파이썬 기본 강의"}
          description={"김태헌님"}
        />
      </div>
    </div>
  );
}
function GuidePage() {
  const navigate = useNavigate();

  return (
    <Padding className="relative">
      <GuideCarousel />
      <div className="flex justify-end mb-3">
        <Button onClick={() => navigate("upload")}>문제 업로드</Button>
      </div>
      <GuideMenu />
      <GuideStartingPoint />
    </Padding>
  );
}

export default GuidePage;
