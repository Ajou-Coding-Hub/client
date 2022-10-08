import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

interface MarkdownProps {
  markdown: string;
}
function Markdown({ markdown }: MarkdownProps) {
  return (
    <ReactMarkdown
      children={markdown}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex]}
      components={{
        h1({ node, className, children, ...props }) {
          return (
            <h1 className="text-indigo-700 font-extrabold text-5xl">
              {children}
            </h1>
          );
        },
        h2({ node, className, children, ...props }) {
          return (
            <h2 className="text-indigo-700 font-bold text-3xl">{children}</h2>
          );
        },
        h3({ node, className, children, ...props }) {
          return (
            <h3 className="text-indigo-700 font-semibold text-xl">
              {children}
            </h3>
          );
        },
        h4({ node, className, children, ...props }) {
          return <h4 className="text-indigo-700 font-medium">{children}</h4>;
        },
        h5({ node, className, children, ...props }) {
          return <h5 className="text-indigo-700 font-normal">{children}</h5>;
        },
        h6({ node, className, children, ...props }) {
          return <h6 className="text-indigo-700 font-light">{children}</h6>;
        },
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={vscDarkPlus as any}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}

export default Markdown;
