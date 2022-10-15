import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { defaultComponents } from "@/utils/markdown";

interface MarkdownProps {
  markdown: string;
  components?:
    | Partial<
        Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
      >
    | undefined;
}
function Markdown({ markdown, components }: MarkdownProps) {
  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        ...components,
        ...defaultComponents,
      }}
    />
  );
}

export default Markdown;
