export const getDateAsString = (date: Date | null) => {
  if (!date) return;
  const offset = date.getTimezoneOffset();
  const currentDate = new Date(date.getTime() - offset * 60 * 1000);
  const dateAsString = currentDate.toISOString().slice(0, 10);
  return dateAsString;
};
