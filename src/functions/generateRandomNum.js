export const generateRandomNum = () => {
  const randomNum = Math.floor(Math.random() * 100);
  if (randomNum >= 16) generateRandomNum();
  else {
    return randomNum;
  }
};
