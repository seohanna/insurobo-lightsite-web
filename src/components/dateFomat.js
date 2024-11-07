
function leftPad(value) {
  if (value >= 10) {
      return value;
  }
  return `0${value}`;
}

export const dateFomat = (date, delimiter = '-') => {
  const year = date?.getFullYear();
  const month = leftPad(date?.getMonth() + 1);
  const day = leftPad(date?.getDate());
  return [year, month, day].join(delimiter);
}