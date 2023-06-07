import { Completion } from './ProgramDataType';

export const getNextGoal = (completion: Completion) => {
  const { currentStep, totalStep, performances, finalGoal } = {
    ...completion,
  };
  const remainingSteps = totalStep - currentStep;
  const remainingImprovement = finalGoal - Number(performances.slice(-1));

  return Number(performances.slice(-1)) + remainingImprovement / remainingSteps;
};
