export const formatDate = (dateTimeString: string): string => {
  console.log(dateTimeString);
  // Parse the date string
  const [datePart] = dateTimeString.split(" ");
  const [year, month, day] = datePart.split("-");

  // Return formatted date
  return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
}