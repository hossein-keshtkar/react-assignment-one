export const generateRandomNum = () => {
  let rnd = 17;

  while (rnd >= 16) {
    rnd = Math.floor(Math.random() * 100);
  }

  return rnd;
};
