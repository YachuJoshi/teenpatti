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
  var i = 2,
    d;
  while (i < array.length) {
    d = array[i - 1] - array[i - 2];
    if (Math.abs(d) === 1 && d === array[i] - array[i - 1]) {
      return false;
    }
    i++;
  }
  return true;
};

export const areArraysEqual = <T>(arrayOne: T[], arrayTwo: T[]): boolean => {
  return (
    arrayOne.length === arrayTwo.length &&
    arrayOne.every((value, index) => value === arrayTwo[index])
  );
};
