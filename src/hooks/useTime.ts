import { format } from "date-fns";
import { useEffect, useState } from "react";

export enum Time {
    HOUR = "hour",
    DAY = "day",
    DATE = "date",
    ALL = "all",
    STANDARD = "standard",
}

export enum DateFormats {
    STANDARD = "dd/MM/yyyy",
    DAY = "iii",
    HOUR = "HH:mm:ss",
    MONTH = "LLLL",
    EXTENDED = "dd/MMMM/yyyy",
    ALL = "dd/MMM/yyyy/iii/HH:mm:ss",
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
        hour: format(time, DateFormats.HOUR),
        day: format(time, DateFormats.DAY),
        date: format(time, DateFormats.EXTENDED),
        all: format(time, DateFormats.ALL),
        standard: format(time, DateFormats.STANDARD),
    };

    if (text !== null) return timeFormats[text];

    return time.getSeconds().toString();
};

export default useTime;
