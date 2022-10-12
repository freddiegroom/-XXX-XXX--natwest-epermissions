export const pickRandomFunc = (percentage: number) => {
  let randomNumber = Math.floor(Math.random() * 100);
  if (randomNumber < percentage) {
    return 1;
  } else {
    return 0;
  }
};
