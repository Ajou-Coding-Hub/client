import Padding from "@/components/atoms/Padding";
import WorkspaceBox from "@/components/organisms/WorkspaceBox";
import CreateWorkspaceBox from "@/components/organisms/CreateWorkspaceBox";
import { Alert, Button, Carousel, Modal } from "flowbite-react";
import { useWorkspaceQuery } from "@/queries";
import { useMutation } from "@tanstack/react-query";
import request from "@/apis";
import { toast } from "react-toastify";
import { ConfirmModal } from "@/components/molecules/ConfirmModal";
import { useState } from "react";

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
  const { data: workspaceList, refetch } = useWorkspaceQuery();

  const { mutate } = useMutation({
    mutationFn: (id: string) => request.delete(["/workspace", id].join("/")),
    onError() {
      toast.error("워크스페이스 삭제에 실패하였습니다.");
    },
    onSuccess() {
      toast.success("워크스페이스 삭제 성공");
      refetch();
    },
  });

  const [showModal, setShowModal] = useState({
    id: "",
    show: false,
  });
  return (
    <Padding>
      <GuideCarousel />
      <h1 className="text-2xl font-bold mb-3">모든 워크스페이스</h1>
      <div className="flex flex-wrap gap-5">
        <CreateWorkspaceBox />

        {workspaceList?.map((workspace, i) => (
          <WorkspaceBox
            key={workspace.id}
            {...workspace}
            name={workspace.id}
            onProgress={() => {
              window.open(["https://", workspace.domain].join(""), "_blank");
            }}
            onRemove={() => {
              setShowModal({
                id: workspace.id,
                show: true,
              });
            }}
            lang="node"
          />
        ))}
        <ConfirmModal
          show={showModal.show}
          onClose={() =>
            setShowModal({
              id: "",
              show: false,
            })
          }
          onConfirm={() => {
            mutate(showModal.id);
            setShowModal({
              id: "",
              show: false,
            });
          }}
          content={"정말로 해당 워크스페이스를 삭제하시겠습니까 ?"}
          confirm={{
            text: "삭제",
            color: "failure",
          }}
          cancel={{
            text: "취소",
            color: "grey",
          }}
        />
      </div>
    </Padding>
  );
}

export default WorkspacePage;
