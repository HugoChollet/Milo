type unit = 'm' | 'km' | 'km/h' | 'g' | 'kg' | 's' | 'min' | 'unit';

export type ProgramData = {
  name: string;
  objective: number;
  current: number;
  unit: unit;
  tags?: Array<string>;
  image?: string;
  completion?: number;
};
