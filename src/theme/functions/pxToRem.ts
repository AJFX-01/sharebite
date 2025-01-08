const pxToRem = (number: number, baseNumber = 20) => {
  return `${number / baseNumber}rem`;
};

export default pxToRem;
