import { getNewId } from './program.style';
import { ProgramData } from './ProgramDataType';

const mockProgram = {
  objective: 0,
  current: 0,
  unit: 'unit',
};

describe('getNewId', () => {
  it('should return 0 if the programList is empty', () => {
    const programList: Array<ProgramData> = [];
    const result = getNewId(programList);
    expect(result).toBe(0);
  });

  it('should return the smallest unused id', () => {
    const programList: Array<ProgramData> = [
      { ...mockProgram, id: 0, name: 'Program 1' },
      { ...mockProgram, id: 2, name: 'Program 3' },
      { ...mockProgram, id: 3, name: 'Program 4' },
    ];
    const result = getNewId(programList);
    expect(result).toBe(1);
  });

  it('should return the next integer if all ids are used', () => {
    const programList: Array<ProgramData> = [
      { ...mockProgram, id: 0, name: 'Program 1' },
      { ...mockProgram, id: 1, name: 'Program 2' },
      { ...mockProgram, id: 2, name: 'Program 3' },
    ];
    const result = getNewId(programList);
    expect(result).toBe(3);
  });
});
