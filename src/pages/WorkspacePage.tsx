import Padding from "@/components/atoms/Padding";
import ContainerBox, {
  ContainerBoxProps,
} from "@/components/organisms/ContainerBox";
import { useState } from "react";
import CreateContanerBox from "@/components/organisms/CreateContanerBox";
import { Carousel } from "flowbite-react";
import { useWorkspaceMutate, useWorkspaceQuery } from "@/queries";

function GuideCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-10">
      <Carousel>
        <img
          src="/notice-1.png"
          alt="notice-1"
          className="object-contain h-full bg-[#1B2528]"
        />
        <img
          src="/notice-2.png"
          alt="notice-1"
          className="object-contain h-full bg-[#3949AB]"
        />
      </Carousel>
    </div>
  );
}

function WorkspacePage() {
  const { data: workspaceList } = useWorkspaceQuery();
  return (
    <Padding>
      <GuideCarousel />
      <h1 className="text-2xl font-bold mb-3">모든 컨테이너</h1>
      <div className="flex flex-wrap gap-5">
        <CreateContanerBox />

        {/* <button onClick={() => mutate({ name: "1234" })}>asd</button>
        {isLoading ? "ㄹ로딩중" : JSON.stringify(data)} */}

        {workspaceList?.map((workspace, i) => (
          <ContainerBox key={workspace.id} {...workspace} lang="java" />
        ))}
      </div>
    </Padding>
  );
}

export default WorkspacePage;
