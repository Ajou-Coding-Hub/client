import { classNames } from "@/utils/class";
type OpacityType =
  | 0
  | 5
  | 10
  | 20
  | 25
  | 30
  | 40
  | 50
  | 60
  | 70
  | 80
  | 90
  | 100;
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
