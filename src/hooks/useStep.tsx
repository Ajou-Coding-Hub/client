import { useEffect, useState } from "react";
import useVscode from "./useVscode";

export type StepType = {
  name: string;
  status: "complete" | "current" | "upcoming";
  type: "filename" | "code";
  expect: string;
};

function useStep(userName: string, initStep: StepType[]) {
  const { expectCode, expectFileName } = useVscode(userName);
  const [steps, setSteps] = useState<StepType[]>(() => initStep);

  useEffect(() => {
    const upcomingStepIdx = steps.findIndex(
      (step) => step.status === "current"
    );
    if (upcomingStepIdx === -1) return;
    const cloneSteps = [...steps];
    const upcomingStep = cloneSteps[upcomingStepIdx];
    switch (cloneSteps[upcomingStepIdx].type) {
      case "code":
        if (expectCode(upcomingStep.expect)) {
          upcomingStep.status = "complete";
          if (cloneSteps[upcomingStepIdx + 1]?.status === "upcoming")
            cloneSteps[upcomingStepIdx + 1].status = "current";
          setSteps(() => cloneSteps);
        }
        break;
      case "filename":
        if (expectFileName(upcomingStep.expect)) {
          upcomingStep.status = "complete";
          if (cloneSteps[upcomingStepIdx + 1]?.status === "upcoming")
            cloneSteps[upcomingStepIdx + 1].status = "current";
          setSteps(() => cloneSteps);
        }
        break;
    }
  }, [steps, expectFileName, expectCode]);

  return steps;
}

export default useStep;
