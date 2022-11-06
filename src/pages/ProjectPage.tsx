/* This example requires Tailwind CSS v2.0+ */
import Button from "@/components/atoms/Button";
import Padding from "@/components/atoms/Padding";
import TouchableOpacity from "@/components/atoms/TouchableOpacity";
import { TerminalIcon, CubeTransparentIcon } from "@heroicons/react/outline";
import { SiNodedotjs } from "react-icons/si";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSubdirectoryRight } from "react-icons/bi";
import ContainerBox, {
  ContainerBoxProps,
} from "@/components/organisms/ContainerBox";
import { useState } from "react";
import CreateContanerBox from "@/components/organisms/CreateContanerBox";

const containerData: ContainerBoxProps[] = [
  {
    status: "idle",
    name: "React 컨테이너",
    deployIP: "192.169.200.1",
    lang: "node",
    progress: false,
  },
  {
    status: "progress",
    name: "Python 컨테이너",
    deployIP: "192.169.200.1",
    lang: "python",
    progress: false,
  },
  {
    status: "suspense",
    name: "Java 컨테이너",
    deployIP: "192.169.200.1",
    lang: "java",
    progress: false,
  },
  {
    status: "idle",
    name: "React 컨테이너",
    deployIP: "192.169.200.1",
    lang: "node",
    progress: false,
  },
  {
    status: "progress",
    name: "Python 컨테이너",
    deployIP: "192.169.200.1",
    lang: "python",
    progress: false,
  },
  {
    status: "suspense",
    name: "Java 컨테이너",
    deployIP: "192.169.200.1",
    lang: "java",
    progress: false,
  },
];

function ProjectPage() {
  const [containers, setContainers] = useState(containerData);
  return (
    <Padding>
      <h1 className="text-2xl font-bold mb-3">모든 컨테이너</h1>
      <div className="flex flex-wrap gap-5">
        <CreateContanerBox />
        {containers.map((container, i) => (
          <ContainerBox
            key={`container-${i}`}
            {...container}
            onProgress={() => {
              setContainers((_containers) => {
                const copy = [..._containers];
                copy[i].progress = true;
                console.log(copy);
                return copy;
              });

              // 테스트 ㅋㅋ
              setTimeout(() => {
                setContainers((_containers) => {
                  const copy = [..._containers];
                  copy[i].progress = false;
                  console.log(copy);
                  return copy;
                });
              }, 1500);
            }}
          />
        ))}
      </div>
    </Padding>
  );
}

export default ProjectPage;
