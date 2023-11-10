import React, { useRef } from "react";
import { useFadeInOnScroll } from "hooks";
import { AnimationFadeType } from "hooks/useFadeInOnScroll";

import styles from "./FadeOnScroll.module.scss";

interface FadeOnScrollProps {
    children: React.ReactNode;
    animate?: AnimationFadeType;
}

const FadeOnScroll = ({ children, animate }: FadeOnScrollProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    useFadeInOnScroll({ ref: divRef, animate });
    return (
        <div className={styles.cont} ref={divRef}>
            {children}
        </div>
    );
};

export default FadeOnScroll;
