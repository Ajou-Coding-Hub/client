import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const defaultComponents: Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
> = {
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
  h1({ node, className, children, ...props }) {
    return (
      <h1 className="text-indigo-700 font-extrabold text-5xl mb-1">
        {children}
      </h1>
    );
  },
  h2({ node, className, children, ...props }) {
    return (
      <h2 className="text-indigo-700 font-bold text-3xl mb-1">{children}</h2>
    );
  },
  h3({ node, className, children, ...props }) {
    return (
      <h3 className="text-indigo-700 font-semibold text-xl  mb-1">
        {children}
      </h3>
    );
  },
  h4({ node, className, children, ...props }) {
    return <h4 className="text-indigo-700 font-medium  mb-1">{children}</h4>;
  },
  h5({ node, className, children, ...props }) {
    return <h5 className="text-indigo-700 font-normal  mb-1">{children}</h5>;
  },
  h6({ node, className, children, ...props }) {
    return <h6 className="text-indigo-700 font-light  mb-1">{children}</h6>;
  },
};
