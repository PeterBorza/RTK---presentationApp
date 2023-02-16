import { format } from "date-fns";
import { useEffect, useState } from "react";

type TimeProp = "hour" | "day" | "date" | "all" | "standard";

const useTime = (text: TimeProp): string => {
    const [time, setTime] = useState<Date>(new Date());

    const dateFormats: Record<TimeProp, string> = {
        hour: "HH:mm:ss",
        day: "iii",
        date: "dd/MMMM/yyyy",
        all: "dd/MMM/yyyy/iii/HH:mm:ss",
        standard: "dd/MM/yyyy",
    };

    useEffect(() => {
        const timer = () => setTime(new Date());
        const time = setInterval(timer, 60000);
        return () => clearInterval(time);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const x: { [key: string]: string } = { [text]: format(time, dateFormats[text]) };

    return x[text];
};

export default useTime;
