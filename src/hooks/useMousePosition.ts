import { useState, useEffect, MouseEvent } from "react";
// import useEventListener from "./useEventListener";

export type Coordinates = {
  x: number;
  y: number;
};

// RUN IT TEST it

const useMousePosition = () => {
  const [position, setPosition] = useState<Coordinates>({ x: 0, y: 0 });
  useEffect(() => {
    const setFromEvent = (e: MouseEvent<HTMLElement>) =>
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    window.addEventListener("mousemove", () => setFromEvent);
    return () => {
      window.removeEventListener("mousemove", () => setFromEvent);
    };
  }, []);

  return position;
};

export default useMousePosition;
