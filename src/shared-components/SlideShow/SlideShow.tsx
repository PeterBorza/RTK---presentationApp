import React from "react";
import styles from "./SlideShow.module.scss";
import classNames from "classnames";

import { icons } from "utils";
import { CustomIcon } from "..";
import { ImageType } from "utils/my-images";

export type SlideShowType = {
    slides: ImageType[];
};

type slideDirection = "fromLeft" | "fromRight" | undefined;

const SlideShow = ({ slides }: SlideShowType): JSX.Element | null => {
    const [current, setCurrent] = React.useState<number>(0);
    const [direction, setDirection] = React.useState<slideDirection>();
    const lastItem = slides.length - 1;

    if (lastItem <= 0) return null;

    const classes = (index: number) =>
        classNames(styles["container__image"], {
            [styles[`container__animated_image_${direction}`]]: index === current,
        });

    const previousItem = current === 0 ? lastItem : current - 1;
    const nextItem = current === lastItem ? 0 : current + 1;

    const slideToPrevious = () => {
        setCurrent(previousItem);
        setDirection("fromLeft");
    };

    const slideToNext = () => {
        setCurrent(nextItem);
        setDirection("fromRight");
    };

    return (
        <div className={styles.slideWrapper}>
            <CustomIcon
                size="large"
                title="slide left"
                icon={icons.left}
                onClick={slideToPrevious}
            />
            <div className={styles.container}>
                {slides.map(
                    (slide, idx) =>
                        idx === current && (
                            <img
                                key={`slide-${idx}`}
                                className={classes(idx)}
                                src={slide}
                                alt="slide content"
                                loading="lazy"
                            />
                        ),
                )}
            </div>
            <CustomIcon size="large" title="slide right" icon={icons.right} onClick={slideToNext} />
        </div>
    );
};

export default SlideShow;
