export const shuffle = <T>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const isConsecutive = (array: number[]): boolean => {
  return array.every((num, i) => (array[i + 1] || num + 1) - num === 1);
};

export const areArraysEqual = <T>(arrayOne: T[], arrayTwo: T[]): boolean => {
  return (
    arrayOne.length === arrayTwo.length &&
    arrayOne.every((value, index) => value === arrayTwo[index])
  );
};
