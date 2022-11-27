import Button from "@/components/atoms/Button";
import Input from "@/components/molecules/Input";
import { useAuth } from "@/store";
import React from "react";

function Highlight({ children }: React.PropsWithChildren) {
  return <p className="bg-gray-100 m-1 inline-block">{children}</p>;
}

export function AccountTemplate() {
  const { profile } = useAuth();
  return (
    <div>
      <h2 className="text-xl font-bold mb-1">프로필</h2>
      <p className="text-sm mb-8 w-8/12 leading-relaxed">
        다음 정보는 Git 구성을 설정하는 데 사용됩니다. 기본 환경 변수
        <Highlight>GIT_AUTHOR_NAME</Highlight>,{" "}
        <Highlight>GIT_COMMITER_NAME</Highlight>, <Highlight />
        <Highlight>GIT_AUTHOR_EMAIL</Highlight> 및{" "}
        <Highlight>GIT_COMMITER_EMAIL</Highlight>을 사용하여 프로젝트별 Git
        작성자 이름 및 이메일을 재정의할 수 있습니다.
      </p>

      <div className="w-56">
        <Input label="Email" disabled value={profile.email}></Input>
        <Input label="Username"></Input>
      </div>
      <Button className="mt-10 w-24 justify-center">저장</Button>
    </div>
  );
}
