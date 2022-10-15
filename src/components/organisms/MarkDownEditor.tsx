import { defaultComponents } from "@/utils/markdown";
import MDEditor, { ContextStore } from "@uiw/react-md-editor";
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
}
function MarkDownEditor({ value, onChange }: MarkDownEditorProps) {
  return (
    <div data-color-mode="light">
      <MDEditor
        className="flex-1 h-full"
        height={500}
        value={value}
        onChange={onChange}
        previewOptions={{
          components: {
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
