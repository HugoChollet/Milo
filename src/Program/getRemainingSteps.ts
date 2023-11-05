export function getRemainingDays(
  goalDate: Date,
  daysOfWeek: Array<boolean>,
): number {
  let currentDate = new Date();
  let remainingDays = 0;

  if (currentDate > goalDate) {
    throw new Error('Goal date should be in the future');
  }

  while (currentDate <= goalDate) {
    if (daysOfWeek[currentDate.getDay()]) {
      remainingDays++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return remainingDays;
}
