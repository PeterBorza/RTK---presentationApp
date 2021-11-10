import { format } from "date-fns";
import { useEffect, useState } from "react";

type TimeProp = "hour" | "day" | "date" | "all" | null;

export const useTime = (text: TimeProp): string => {
	const [time, setTime] = useState<Date>(new Date());

	const timer = () => setTime(new Date());

	useEffect(() => {
		setInterval(timer, 1000);
		// if (text === "object") return clearInterval(timer);
	}, []);

	if (text === "hour") return ` ${format(time, "HH:mm:ss")}`;
	if (text === "day") return `${format(time, "iii")}`;
	if (text === "date") return `${format(time, "MM/dd/yyyy")}`;
	if (text === "all") return `${format(time, "MM/dd/yyyy/iii/HH:mm:ss")}`;

	return time.getSeconds().toString();
};
