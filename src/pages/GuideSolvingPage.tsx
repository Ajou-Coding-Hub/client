import Button from "@/components/atoms/Button";
import useStep from "@/hooks/useStep";
import GuideMarkdown from "@/components/organisms/GuideMarkdown";

/** 임시 데이터 */
const vscodeUrl =
  "https://jupyter.ajou.ac.kr/code/gron1gh1/code/?folder=/home/gron1gh1/workspace";

const USER_NAME = "gron1gh1";

// --------
const markdown = `
## 자바스크립트 기초
asd

[STEP-1]  
asd

[STEP-2]  
* 문제를 풀어봅시다
`;

function GuideSolvingPage() {
  const steps = useStep(USER_NAME, [
    {
      name: "main.js 만들기",
      status: "current",
      type: "filename",
      expect: "main.js",
    },
    {
      name: "Hello World 출력하기",
      status: "upcoming",
      type: "code",
      expect: "console.log('Hello World')",
    },
  ]);
  return (
    <div className="h-full flex">
      <div className="relative w-2/3">
        <iframe src={vscodeUrl} className="h-full w-full" />
      </div>
      <div className="w-1/3">
        <div className="p-5">
          <GuideMarkdown markdown={markdown} step={steps} />
          <Button className="absolute bottom-5 right-10 w-100">
            다음 문제
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GuideSolvingPage;
