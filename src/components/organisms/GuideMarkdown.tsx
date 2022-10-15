import Step, { StepProps } from "../molecules/Step";
import Markdown from "../molecules/Markdown";
import { StepType } from "@/hooks/useStep";
import { defaultComponents } from "@/utils/markdown";

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
      }}
    />
  );
}

export default GuideMarkdown;
