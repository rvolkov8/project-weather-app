export default function dateFactory() {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const getFormattedDate = () => {
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  };

  return { getFormattedDate };
}
