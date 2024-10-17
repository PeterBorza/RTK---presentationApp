import { format } from "date-fns";

export type TimeProp = "hour" | "day" | "date" | "all" | "standard";

const dateFormats: Record<TimeProp, string> = {
  hour: "HH:mm:ss",
  day: "iii",
  date: "dd/MMMM/yyyy",
  all: "dd/MMM/yyyy/iii/HH:mm:ss",
  standard: "dd/MM/yyyy",
};

export const getTimeFormat = (formatType?: keyof typeof dateFormats) => {
  return format(new Date(), dateFormats[formatType ?? "standard"]);
};

//  TODO code below works only for dateFormats.standard version.
// Should make generic function to deal with all kinds of formats

export const formatToDate = (date: string) => {
  const formatedDate = date.split("/").reverse().toLocaleString();
  return new Date(formatedDate);
};
