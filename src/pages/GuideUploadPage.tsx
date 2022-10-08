import Padding from "@/components/atoms/Padding";
import React from "react";
import MDEditor from "@uiw/react-md-editor";

function GuideUploadPage() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <Padding>
      업로드
      <div data-color-mode="light">
        <MDEditor value={value} onChange={(text) => text && setValue(text)} />
      </div>
    </Padding>
  );
}

export default GuideUploadPage;
