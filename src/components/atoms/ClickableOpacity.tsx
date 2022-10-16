import { OpacityType } from "@/types";
import { classNames } from "@/utils/class";

interface ClickableOpacityProps {
  clickedOpacity?: OpacityType;
  defaultOpacity?: OpacityType;
  clicked?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode | React.ReactNode[];
}

function ClickableOpacity({
  clicked,
  onClick,
  children,
  clickedOpacity = 100,
  defaultOpacity = 50,
}: ClickableOpacityProps) {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "cursor-pointer",
        clicked ? `opacity-${clickedOpacity}` : `opacity-${defaultOpacity}`
      )}
    >
      {children}
    </div>
  );
}

export default ClickableOpacity;
