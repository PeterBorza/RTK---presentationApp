import React from "react";
import { ImageType } from "utils/my-images";

import styles from "./Scroller.module.scss";
import classNames from "classnames";
import { createArray } from "utils";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";

export interface ScrollerType {
    images: ImageType[];
    size?: "tiny" | "small" | "medium" | "large" | "fit";
    scrollerTitle?: string;
    vertical?: boolean;
    route: string;
}

// TODO when navigating with dots, jumps back to home. BUG

const Scroller = ({
    size = "fit",
    images,
    scrollerTitle = "title here",
    vertical = false,
    route,
}: ScrollerType) => {
    const location = useLocation();
    console.log({ location });

    const wrapper = classNames(styles.scrollerWrapper, styles[`scrollerWrapper--${size}`]);
    const content = classNames(
        styles.scrollerContent,
        vertical && [styles["scrollerContent--vertical"]],
    );

    const puzzleImage = (img: ImageType, index: number) => (
        <img
            loading="lazy"
            className={styles.photo}
            key={`image-${index}`}
            src={img}
            alt={`some pic ${index}`}
            id={`pic-${index}`}
        />
    );

    return (
        <div>
            <div className={wrapper}>
                <div className={styles.scrollerContainer__header}>
                    <h2 title={scrollerTitle}>{scrollerTitle}</h2>
                </div>
                <div className={styles.scrollerContainer}>
                    <div className={content}>{images.map(puzzleImage)}</div>
                </div>
            </div>
            <div className={styles.bulletWrapper}>
                {createArray(images.length).map((_, index) => (
                    <HashLink
                        key={`scroll-img-${index}`}
                        className={styles.linkStyle}
                        smooth
                        to={`/${route}#pic-${index}`}
                        scroll={(el: HTMLElement) =>
                            el.scrollIntoView(
                                vertical
                                    ? { behavior: "smooth", block: "center" }
                                    : { behavior: "smooth", inline: "center" },
                            )
                        }
                    >
                        <span> &#8226;</span>
                    </HashLink>
                ))}
            </div>
        </div>
    );
};

export default Scroller;
