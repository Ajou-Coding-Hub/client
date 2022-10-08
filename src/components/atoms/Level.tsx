import { classNames } from "@/utils/class";
import React from "react";

interface LevelProps {
  level: 1 | 2 | 3;
  className?: string;
}

const LEVEL_COLOR = [
  ["text-[#6d9c26]", "bg-[rgba(143,211,39,.16)]"],
  ["text-[#eb9300]", "bg-[rgba(255,193,7,.16)]"],
  ["text-[#dd2766]", "bg-[rgba(242,99,148,.16)]"],
];

function Level({ level, className }: LevelProps) {
  return (
    <div
      className={classNames(
        "rounded",
        "py-1",
        "px-3",
        "h-fit",
        "inline-block",
        ...LEVEL_COLOR[level - 1],
        className ?? ""
      )}
    >
      Level {level}
    </div>
  );
}

export default React.memo(Level);
