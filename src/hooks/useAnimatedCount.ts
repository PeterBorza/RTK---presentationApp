import { useEffect, useState } from "react";

interface AnimatedCount {
    count: number;
    interval: number;
    reverse?: boolean;
}

const useAnimatedCount = ({ count, interval = 50, reverse = false }: AnimatedCount): number => {
    const [value, setValue] = useState(reverse ? count : 0);

    useEffect(() => {
        let timeInterval: ReturnType<typeof setInterval>;
        if (reverse) {
            timeInterval = setInterval(() => value !== 0 && setValue(value - 1), interval);
        } else {
            timeInterval = setInterval(() => value !== count && setValue(value + 1), interval);
        }
        return () => clearInterval(timeInterval);
    }, [value, count, interval, reverse]);

    return value;
};

export default useAnimatedCount;
