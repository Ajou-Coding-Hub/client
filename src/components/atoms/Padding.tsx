import { classNames } from "@/utils/class";

interface PaddingProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}
function Padding({ children, className, ...rest }: PaddingProps) {
  return (
    <div
      className={classNames(
        "mt-0.5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5",
        className ?? ""
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Padding;
