import { format } from "date-fns";
import { useEffect, useState } from "react";

export enum Time {
    HOUR = "hour",
    DAY = "day",
    DATE = "date",
    ALL = "all",
    STANDARD = "standard",
}

type TimeProp = "hour" | "day" | "date" | "all" | "standard" | null;

const useTime = (text: TimeProp): string => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = () => setTime(new Date());
        const time = setInterval(timer, 1000);
        return () => clearInterval(time);
    }, []);

    const timeFormats = {
        hour: format(time, "HH:mm:ss"),
        day: format(time, "iii"),
        date: format(time, "dd/MMMM/yyyy"),
        all: format(time, "dd/MMM/yyyy/iii/HH:mm:ss"),
        standard: format(time, "dd/MM/yyyy"),
    };

    if (text !== null) return timeFormats[text];

    return time.getSeconds().toString();
};

export default useTime;
