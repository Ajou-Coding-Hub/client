import Button from "@/components/atoms/Button";
import Input from "@/components/molecules/Input";
import React from "react";

function Highlight({ children }: React.PropsWithChildren) {
  return <p className="bg-gray-100 m-1 inline-block">{children}</p>;
}

export function AccountTemplate() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-1">Profile</h2>
      <p className="text-sm mb-8 w-8/12 leading-relaxed">
        The following information will be used to set up Git configuration. You
        can override Git author name and email per project by using the default
        environment variables <Highlight>GIT_AUTHOR_NAME</Highlight>,
        <Highlight>GIT_COMMITTER_NAME</Highlight>,
        <Highlight>GIT_AUTHOR_EMAIL</Highlight> and{" "}
        <Highlight>GIT_COMMITTER_EMAIL</Highlight>
      </p>

      <div className="w-56">
        <Input label="Name"></Input>
        <Input label="Email"></Input>
        <Input label="Company"></Input>
      </div>
      <Button className="mt-10">Update Profile</Button>
    </div>
  );
}
