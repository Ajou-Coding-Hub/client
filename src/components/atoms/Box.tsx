import { classNames } from "@/utils/class";

interface BoxProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}
function Box({ children, className, ...rest }: BoxProps) {
  return (
    <div
      className={classNames(
        "rounded border-gray-300 border p-5 inline-block hover:bg-gray-300 cursor-pointer",
        className ?? ""
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Box;
