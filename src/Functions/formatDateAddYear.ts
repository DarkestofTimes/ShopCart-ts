export const formatDateAddYear = (date: Date, plus: boolean) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  if (plus) {
    return `${year + 1}-${month}-${day}`;
  }
  return `${year - 1}-${month}-${day}`;
};
