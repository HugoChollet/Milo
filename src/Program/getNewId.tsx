import { ProgramData } from './ProgramDataType';

export const getNewId = (programList: Array<ProgramData>): number => {
  let newId = 0;
  for (; newId < programList.length; newId++) {
    if (!programList.find(item => item.id === newId)) {
      return newId;
    }
  }
  return newId++;
};
