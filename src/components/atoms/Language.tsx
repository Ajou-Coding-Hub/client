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
import { BiFileBlank } from "react-icons/bi";
import {
  SiGo,
  SiGoland,
  SiJava,
  SiJavascript,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export type LangType =
  | "python"
  | "javascript"
  | "typescript"
  | "react"
  | "nodejs"
  | "java"
  | "golang"
  | "mariadb"
  | "postgresql"
  | "mysql"
  | "mongodb"
  | "blank";

interface LanguageProps {
  lang: LangType;
}
function Language({ lang }: LanguageProps) {
  const langPrimaryColor = useMemo(() => {
    switch (lang) {
      case "blank":
        return "bg-yellow-400";
      case "javascript":
        return "bg-yellow-400";
      case "nodejs":
        return "bg-lime-600";
      case "java":
        return "bg-amber-600";
      case "typescript":
        return "bg-blue-500";
      case "python":
        return "bg-indigo-500";
      case "react":
        return "bg-cyan-400";
      case "golang":
        return "bg-cyan-400";
      case "postgresql":
        return "bg-indigo-500";
      case "mariadb":
        return "bg-indigo-500";
      case "mysql":
        return "bg-indigo-500";
      case "mongodb":
        return "bg-indigo-500";
    }
  }, [lang]);

  const langIcon = useMemo(() => {
    switch (lang) {
      case "blank":
        return <BiFileBlank className="text-[24px]" />;
      case "javascript":
        return <SiJavascript className="text-[24px]" />;
      case "java":
        return <SiJava className="text-[24px]" />;
      case "nodejs":
        return <SiNodedotjs className="text-[24px]" />;
      case "typescript":
        return <SiTypescript className="text-[24px]" />;
      case "python":
        return <SiPython className="text-[24px]" />;
      case "react":
        return <SiReact className="text-[24px]" />;
      case "golang":
        return <SiGo className="text-[24px]" />;
      case "postgresql":
        return <SiPostgresql className="text-[24px]" />;
      case "mariadb":
        return <SiMariadb className="text-[24px]" />;
      case "mysql":
        return <SiMysql className="text-[24px]" />;
      case "mongodb":
        return <SiMongodb className="text-[24px]" />;
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
