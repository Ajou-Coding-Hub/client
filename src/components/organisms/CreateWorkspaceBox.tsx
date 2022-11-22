import Button from "@/components/atoms/Button";
import { SiVisualstudiocode } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

function CreateContanerBox({}) {
  return (
    <div className="inline-block">
      <div className="flex flex-col justify-between w-72 h-72 rounded border border-gray-300 px-3 py-3">
        <div className="mt-3">
          <p className="text-center text-sm whitespace-pre-wrap mb-5 font-bold">
            {"워크스페이스를 직접 만들어\n배포까지 해보세요 !"}
          </p>
          <div className="flex justify-center">
            <SiVisualstudiocode className="text-center text-blue-500 w-24 h-24" />
          </div>
        </div>
        <Link to="/workspace/create" className="flex">
          <Button className="justify-center flex-1">워크스페이스 만들기</Button>
        </Link>
      </div>
    </div>
  );
}

export default CreateContanerBox;
