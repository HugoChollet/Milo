type unit = 'm' | 'km' | 'km/h' | 'g' | 'kg' | 's' | 'min' | 'unit';

export type Completion = {
  currentStep: number;
  totalStep: number;
  currentPerf: number;
  perfGoal: number;
};

export type ProgramData = {
  id: number;
  name: string;
  unit: unit;
  tags?: Array<string>;
  image?: string;
  endDate: Date;
  timeReminder: Date;
  completion: Completion;
};
