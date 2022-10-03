import Step, { StepWrapper } from "@/components/ui/Step";
import { classNames } from "@/utils/class";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";

const vscodeUrl =
  "https://jupyter.ajou.ac.kr/code/gron1gh1/code/?folder=/home/gron1gh1/workspace";

const steps = [
  { name: "main.js 만들기", status: "complete" },
  { name: "Hello World 출력하기", status: "current" },
  { name: "Theme", status: "upcoming" },
  { name: "Preview", status: "upcoming" },
];

function GuidePage() {
  const [steps, setSteps] = useState([
    { name: "main.js 만들기", status: "complete" },
    { name: "Hello World 출력하기", status: "current" },
    { name: "Theme", status: "upcoming" },
    { name: "Preview", status: "upcoming" },
  ]);

  return (
    <div className="h-full flex">
      <iframe src={vscodeUrl} className="h-full  w-2/3" />

      <div className="p-5">
        <button
          onClick={() => {
            setSteps((prev) => {
              prev[0].status = "upcoming";
              return [...prev];
            });
          }}
        >
          upcoming
        </button>
        <button
          onClick={() => {
            setSteps((prev) => {
              prev[0].status = "current";
              return [...prev];
            });
          }}
        >
          current
        </button>
        <button
          onClick={() => {
            setSteps((prev) => {
              prev[0].status = "complete";
              return [...prev];
            });
          }}
        >
          complete
        </button>

        <StepWrapper>
          {steps.map((step) => (
            <Step success={true} status={step.status}>
              {step.name}
            </Step>
          ))}
        </StepWrapper>
      </div>
    </div>
  );
}
