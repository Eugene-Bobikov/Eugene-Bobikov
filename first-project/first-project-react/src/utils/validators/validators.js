export const requaired = (value) => {
  if (value) return undefined;
  return "requaired field";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};
