import { RefObject, useEffect, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

export type AnimationFadeType = {
    transition: string;
    opacity: string;
    threshold: number;
};

export type FadeInProps = {
    ref: RefObject<HTMLElement>;
    animate?: AnimationFadeType;
};

const DEFAULT_TRANSITION = "all 400ms ease-in-out";
const DEFAULT_OPACITY = "0";
const DEFAULT_THRESHOLD = 0.5;

const useFadeInOnScroll = ({ ref, animate }: FadeInProps) => {
    const init: AnimationFadeType = {
        opacity: DEFAULT_OPACITY,
        transition: DEFAULT_TRANSITION,
        threshold: DEFAULT_THRESHOLD,
    };
    const [animation] = useState(animate ?? init);
    const [animateOpacity, setAnimateOpacity] = useState(animation.opacity);
    const entry = useIntersectionObserver(ref, { threshold: animation.threshold });

    const isVisible = !!entry?.isIntersecting;

    const setVisible = () => setAnimateOpacity(isVisible ? animation.opacity : "1");

    useEffect(() => {
        setVisible();
        if (!ref || !ref.current) return;
        ref.current.style.transition = animation.transition;
        ref.current.style.opacity = animateOpacity;
    }, [ref, isVisible]);
};

export default useFadeInOnScroll;
