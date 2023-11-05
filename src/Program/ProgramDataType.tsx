export type Unit = 'm' | 'km' | 'km/h' | 'g' | 'kg' | 's' | 'min' | 'unit';

export type Completion = {
  currentStep: number; // number of step the user did for this program
  totalStep: number; // number of step initially calculated when program was created
  performances: number[]; // Data history of all performances inputed by the user
  nextGoal: number; // goal for the next step, calculated from the remaining steps and the final goal
  revisedNextGoal?: number; // adjusted goal depending on a missed step or missed goal
  finalGoal: number; // initial goal sets by the user
  revisedFinalGoal?: number; // adjusted goal depending on missed steps or missed goals
};

export type ProgramData = {
  id: number;
  name: string;
  unit: Unit;
  image?: string;
  endDate: Date;
  timeReminder: Date;
  completion: Completion;
  lastPractice?: Date;
  days: Array<boolean>;
};
