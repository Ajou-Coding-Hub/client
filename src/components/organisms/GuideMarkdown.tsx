import Step, { StepProps } from "../molecules/Step";
import Markdown from "../molecules/Markdown";
import { StepType } from "@/hooks/useStep";

interface MarkdownProps {
  markdown: string;
  step: StepType[];
}

function GuideMarkdown({ markdown, step }: MarkdownProps) {
  return (
    <Markdown
      markdown={markdown}
      components={{
        p({ node, className, children, ...props }) {
          const [firstChildren, ..._children] = children;
          if (
            typeof firstChildren === "string" &&
            /\[STEP-[0-9]\]/.test(firstChildren)
          ) {
            const idx =
              Number(firstChildren.split("-")[1].replace("]", "")) - 1;
            if (step[idx]) {
              return (
                <>
                  <Step status={step[idx].status}>{step[idx].name}</Step>
                  {_children && <p className="mb-1">{_children}</p>}
                </>
              );
            }
          }
          return <p className="mb-1">{children}</p>;
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
            <h2 className="text-indigo-700 font-bold text-3xl mb-1">
              {children}
            </h2>
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
          return (
            <h4 className="text-indigo-700 font-medium  mb-1">{children}</h4>
          );
        },
        h5({ node, className, children, ...props }) {
          return (
            <h5 className="text-indigo-700 font-normal  mb-1">{children}</h5>
          );
        },
        h6({ node, className, children, ...props }) {
          return (
            <h6 className="text-indigo-700 font-light  mb-1">{children}</h6>
          );
        },
      }}
    />
  );
}

export default GuideMarkdown;
