// // 서버 데이터 베이스로 저장
// const items = [
//     {
//       title: "자바스크립트 기초",
//       description: "Level 1",
//       icon: SiJavascript,
//       background: "bg-yellow-400",
//     },
//     {
//       title: "타입스크립트 기초",
//       description: "Level 1",
//       icon: SiTypescript,
//       background: "bg-blue-500",
//     },
//     {
//       title: "파이썬 기초",
//       description: "Level 1",
//       icon: SiPython,
//       background: "bg-indigo-500",
//     },
//   ];

import { classNames } from "@/utils/class";
import { useMemo } from "react";
import { SiJavascript, SiPython, SiReact, SiTypescript } from "react-icons/si";

interface LanguageProps {
  lang: "python" | "javascript" | "typescript" | "react";
}
function Language({ lang }: LanguageProps) {
  const langPrimaryColor = useMemo(() => {
    switch (lang) {
      case "javascript":
        return "bg-yellow-400";
      case "typescript":
        return "bg-blue-500";
      case "python":
        return "bg-indigo-500";
      case "react":
        return "bg-cyan-400";
    }
  }, [lang]);

  const langIcon = useMemo(() => {
    switch (lang) {
      case "javascript":
        return <SiJavascript className="text-[24px]" />;
      case "typescript":
        return <SiTypescript className="text-[24px]" />;
      case "python":
        return <SiPython className="text-[24px]" />;
      case "react":
        return <SiReact className="text-[24px]" />;
    }
  }, [lang]);

  return (
    <div
      className={classNames(
        "inline-block w-[64px] h-[64px] text-white rounded p-5",
        langPrimaryColor
      )}
    >
      {langIcon}
    </div>
  );
}

export default Language;
