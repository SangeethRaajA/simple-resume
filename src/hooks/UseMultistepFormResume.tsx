import { ReactElement, useState } from "react";

export default function UseMultistepFormResume(steps: ReactElement[]) {
  // Define StepIndex using UseState Hooks
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Move to the next step in the form.
  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  }

  // Move to the previous step in the form.
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
  }

  // Navigate directly to a specific step by index.
  function goto(index: number) {
    setCurrentStepIndex(index);
  }

  // Return an object containing the form state and functions.
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goto,
    next,
    back,
    steps,
  };
}
