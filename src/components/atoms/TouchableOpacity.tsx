import { OpacityType } from "@/types";
import { classNames } from "@/utils/class";

interface TouchableOpacityProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "type"> {
  opacity?: OpacityType;
  children: React.ReactNode | React.ReactNode[];
}

function TouchableOpacity({
  children,
  opacity = 50,
  ...rest
}: TouchableOpacityProps) {
  return (
    <button
      className={classNames("cursor-pointer", `active:opacity-${opacity}`)}
      {...rest}
    >
      {children}
    </button>
  );
}

export default TouchableOpacity;
