import { string } from "prop-types";
import Box from "@/components/atoms/Box";
import Level from "../atoms/Level";

interface GuideBoxProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  author: string;
  level: 1 | 2 | 3;
}

function GuideBox({ title, author, level, ...rest }: GuideBoxProps) {
  return (
    <Box {...rest}>
      <div className="flex">
        <Level level={level} className="mx" />
        <h1 className="text-2xl font-bold mb-3 mx-3">{title}</h1>
      </div>
      <p className="text-sm mb-1">출제자 {author}님</p>
    </Box>
  );
}

export default GuideBox;
