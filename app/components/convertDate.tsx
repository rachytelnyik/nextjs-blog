const ConvertDate = ({ date }: { date: Date }): string => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  return formattedDate;
};

export default ConvertDate;
