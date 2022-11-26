import { classNames } from "@/utils/class";
import React from "react";

interface PingProps {
  active?: boolean;
}
export default function Ping({ active }: PingProps) {
  return (
    <span className="flex h-3 w-3">
      <span
        className={classNames(
          active &&
            "animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"
        )}
      ></span>
      <span
        className={classNames(
          "relative inline-flex rounded-full h-3 w-3 ",
          active ? "bg-green-500" : "bg-gray-400"
        )}
      ></span>
    </span>
  );
}
