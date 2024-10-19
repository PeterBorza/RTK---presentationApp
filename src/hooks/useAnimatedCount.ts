import { useEffect, useState } from "react";

interface AnimatedCount {
  count: number;
  interval?: number;
  reverse?: boolean;
}

const useAnimatedCount = ({ count, interval = 50, reverse = false }: AnimatedCount): number => {
  const [value, setValue] = useState(reverse ? count : 0);

  const increment = () => value !== count && setValue(value + 1);
  const decrement = () => value !== 0 && setValue(value - 1);

  useEffect(() => {
    let timeInterval: ReturnType<typeof setInterval>;
    if (reverse) {
      timeInterval = setInterval(decrement, interval);
    } else {
      timeInterval = setInterval(increment, interval);
    }
    return () => clearInterval(timeInterval);
  }, [value, count, interval, reverse]);

  return value;
};

export default useAnimatedCount;
