export type Unit = 'm' | 'km' | 'km/h' | 'g' | 'kg' | 's' | 'min' | 'unit';

export type Completion = {
  currentStep: number;
  totalStep: number;
  currentPerf: number;
  perfGoal: number;
};

export type ProgramData = {
  id: number;
  name: string;
  unit: Unit;
  image?: string;
  endDate: Date;
  timeReminder: Date;
  completion: Completion;
  days: Array<boolean>;
};
