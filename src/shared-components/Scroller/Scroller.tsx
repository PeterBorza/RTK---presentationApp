import React, { ReactElement, ReactHTMLElement } from "react";
import { ImageType } from "utils/my-images";

import styles from "./Scroller.module.scss";
import classNames from "classnames";
import { createArray } from "utils";
import { HashLink } from "react-router-hash-link";

export type ScrollerSizeType = "tiny" | "small" | "medium" | "large" | "fit";

export interface ScrollerType {
    images: ImageType[];
    size?: ScrollerSizeType;
    scrollerTitle?: string;
    vertical?: boolean;
}

const Scroller = ({
    size = "small",
    images,
    scrollerTitle = "title here",
    vertical = false,
}: ScrollerType) => {
    const wrapper = classNames(styles.scrollerWrapper, styles[`scrollerWrapper--${size}`]);
    const content = classNames(
        styles.scrollerContent,
        vertical && [styles["scrollerContent--vertical"]],
    );

    const puzzleImage = (img: ImageType, index: number) => {
        return (
            <img
                loading="lazy"
                className={styles.photo}
                key={`image-${index}`}
                src={img}
                alt={`some pic ${index}`}
                id={`pic-${index}`}
            />
        );
    };

    return (
        <>
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
                        key={`image-${index}`}
                        className={styles.linkStyle}
                        smooth
                        to={`/#pic-${index}`}
                        scroll={el =>
                            el.scrollIntoView(
                                vertical
                                    ? { behavior: "auto", block: "center" }
                                    : { behavior: "auto", inline: "center" },
                            )
                        }
                    >
                        &#8226;
                    </HashLink>
                ))}
            </div>
        </>
    );
};

export default Scroller;
