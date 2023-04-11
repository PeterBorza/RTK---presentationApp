import React from "react";
import { HashLink } from "react-router-hash-link";

import { newArray } from "utils";
import { ImageType } from "utils/my-images";

import classNames from "classnames";
import styles from "./Scroller.module.scss";

export interface ScrollerType {
    images: ImageType[];
    size?: "tiny" | "small" | "medium" | "large" | "fit";
    scrollerTitle?: string;
    vertical?: boolean;
    route: string;
}

// TODO when navigating with dots, jumps back to home. BUG

const SCROLL_DOT = "&#8226;";

const Scroller = ({
    size = "fit",
    images,
    scrollerTitle = "title here",
    vertical = false,
    route,
}: ScrollerType) => {
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
                {newArray(images.length).map(item => (
                    <HashLink
                        key={`scroll-img-${item}`}
                        className={styles.linkStyle}
                        smooth
                        to={`/${route}#pic-${item}`}
                        scroll={(el: HTMLElement) =>
                            el.scrollIntoView(
                                vertical
                                    ? { behavior: "smooth", block: "center" }
                                    : { behavior: "smooth", inline: "center" },
                            )
                        }
                    >
                        <span>{SCROLL_DOT}</span>
                    </HashLink>
                ))}
            </div>
        </div>
    );
};

export default Scroller;
