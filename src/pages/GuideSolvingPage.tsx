import Button from "@/components/atoms/Button";
import useStep from "@/hooks/useStep";
import GuideMarkdown from "@/components/organisms/GuideMarkdown";

/** 임시 데이터 */
const vscodeUrl = "http://localhost:8443/";

const USER_NAME = "workspace";

// --------
const markdown = `
## 가이드

위에서 설정한 스텝을 어디에 위치할지 정해주셔야해요 !  
**[STEP-(number)]** 와 같은 형식으로 (number) 안에 스텝의 숫자를 작성하면 해당 위치에 스텝에 위치합니다.

* example  

[STEP-1] 

이런식으로 렌더링을 테스트 해볼 수 있습니다 !

[STEP-2]

### 이제 시작해보세요 !
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
