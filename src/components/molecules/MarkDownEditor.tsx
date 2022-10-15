import { defaultComponents } from "@/utils/markdown";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

interface MarkDownEditorProps {
  value: string;
  onChange?:
    | ((
        value?: string | undefined,
        event?: React.ChangeEvent<HTMLTextAreaElement> | undefined,
        state?: ContextStore | undefined
      ) => void)
    | undefined;
  components?: Partial<
    Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
  >;
}
function MarkDownEditor({ value, onChange, components }: MarkDownEditorProps) {
  return (
    <div data-color-mode="light">
      <MDEditor
        className="flex-1 h-full"
        height={500}
        value={value}
        onChange={onChange}
        previewOptions={{
          components: {
            ...components,
            ...defaultComponents,
          },
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeKatex],
        }}
      ></MDEditor>
    </div>
  );
}

export default MarkDownEditor;
