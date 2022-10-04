/* This example requires Tailwind CSS v2.0+ */
import Button from "@/components/atoms/Button";
import StartingPoint from "@/components/organisms/StartingPoint";
import { SiJavascript, SiPython, SiTypescript } from "react-icons/si";

// 서버 데이터 베이스로 저장
const items = [
  {
    title: "자바스크립트 기초",
    description: "Level 1",
    icon: SiJavascript,
    background: "bg-yellow-500",
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

function GuidePage() {
  return (
    <div className="relative">
      <Button className="absolute top-5 right-10">문제 업로드</Button>
      <div className="px-56 py-10">
        <StartingPoint
          items={items}
          title={"프로그래밍 기본기 다지기 !!"}
          description={"강선규님"}
        />
      </div>
      <div className="px-56 py-10">
        <StartingPoint
          items={items2}
          title={"파이썬 기본 강의"}
          description={"김태헌님"}
        />
      </div>
    </div>
  );
}

export default GuidePage;
