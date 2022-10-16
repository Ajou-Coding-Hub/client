import {
  SiJava,
  SiNodedotjs,
  SiPython,
  SiVisualstudiocode,
} from "react-icons/si";
import { BsFillTrashFill } from "react-icons/bs";
import Button from "@/components/atoms/Button";
import { ContainerStatus, ProjectLangType } from "@/types";
import { classNames } from "@/utils/class";
import { useMemo } from "react";

export interface ContainerBoxProps {
  status: ContainerStatus;
  lang: ProjectLangType;
  name: string;
  deployIP?: string;
  progress?: boolean;
  onProgress?: React.MouseEventHandler<HTMLButtonElement>;
  onRemove?: React.MouseEventHandler<HTMLButtonElement>;
}

function ContainerBox({
  status,
  lang,
  name,
  progress,
  deployIP,
  onProgress,
  onRemove,
}: ContainerBoxProps) {
  const themeStatus = useMemo(() => {
    switch (status) {
      case "idle":
        return "bg-gray-500";
      case "progress":
        return "bg-green-400";
      case "suspense":
        return "bg-red-600";
    }
  }, [status]);

  const themeLang = useMemo(() => {
    switch (lang) {
      case "node":
        return (
          <>
            <SiNodedotjs className="text-lime-600" />
            Node v16
          </>
        );
      case "java":
        return (
          <>
            <SiJava className="text-amber-500" />
            Java 17
          </>
        );
      case "python":
        return (
          <>
            <SiPython className="text-blue-500" />
            Python 3.9.1
          </>
        );
    }
  }, [lang]);

  return (
    <div className="inline-block">
      <div className="flex flex-col justify-between w-60 h-64 rounded border border-gray-300 px-3 py-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div
              className={classNames("w-2 h-2 rounded-md", themeStatus)}
            ></div>
            <p className="font-semibold">{name}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 text-left mb-3">
            <SiVisualstudiocode className="text-blue-500" />
            {themeLang}
          </div>
          <p className="flex items-center text-sm text-left text-gray-500 mb-1">
            Status: {status.toLocaleUpperCase()}
          </p>
          {deployIP && (
            <p className="flex items-center text-sm text-left text-gray-500">
              Deploy IP: {deployIP}
            </p>
          )}
        </div>
        <div>
          <p className="text-xs text-gray-500 text-left mb-1">
            Last: 2022-10-17 12:35:02
          </p>
          <div className="flex justify-between gap-1">
            <Button
              className="justify-center flex-1"
              loading={progress}
              onClick={onProgress}
            >
              컨테이너 실행
            </Button>
            <Button type="danger" className="justify-center" onClick={onRemove}>
              <BsFillTrashFill />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerBox;
