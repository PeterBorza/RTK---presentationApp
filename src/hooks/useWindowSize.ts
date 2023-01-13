import { RefObject, useEffect, useLayoutEffect, useState } from "react";

// See: https://usehooks-ts.com/react-hook/use-event-listener
import useEventListener from "./useEventListener";

interface WindowSize {
    width?: number;
    height?: number;
}

function useWindowSize<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    edge: number,
): boolean {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    });
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleSize = () => {
        setWindowSize({
            width: ref.current?.clientWidth,
            height: ref.current?.clientHeight,
        });
    };

    useLayoutEffect(() => {
        const el = ref?.current;
        if (!el) return;

        handleSize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEventListener("resize", handleSize);

    useEffect(() => {
        setIsSmallScreen(windowSize.width && windowSize.width < edge ? true : false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isSmallScreen;
}

export default useWindowSize;
