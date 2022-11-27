import React from "react";
import { HeartIcon as HeartFillIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartNotFillIcon } from "@heroicons/react/outline";
import { classNames } from "@/utils/class";

interface HeartIcon extends React.ComponentProps<"svg"> {
  filled?: boolean;
}

export default function HeartIcon({ filled, className, ...rest }: HeartIcon) {
  return (
    <>
      {filled ? (
        <HeartFillIcon
          className={classNames("text-red-500", className)}
          {...rest}
        />
      ) : (
        <HeartNotFillIcon
          className={classNames("text-red-500", className)}
          {...rest}
        />
      )}
    </>
  );
}
