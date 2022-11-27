import { classNames } from "@/utils/class";

interface BoxProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function Box({ children, className, onClick, ...rest }: BoxProps) {
  return (
    <div
      className={classNames(
        "rounded border-gray-300 border p-5 inline-block",
        className,
        onClick && "hover:bg-gray-300 cursor-pointer"
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Box;
