import React from "react";
import styles from "./SlideShow.module.scss";
import classNames from "classnames";

import { icons } from "../../utils";
import { CustomIcon } from "..";
import { ImageType } from "../../utils/my-images";

export type SlideShowType = {
    slides: ImageType[];
};

const SlideShow = ({ slides }: SlideShowType): JSX.Element | null => {
    const [current, setCurrent] = React.useState<number>(0);
    const length = slides.length - 1;

    if (length <= 0) return null;

    const classes = (index: number) =>
        classNames(styles["container__image"], {
            [styles["container__animated_image"]]: index === current,
        });

    const slideToPrevious = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    const slideToNext = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    return (
        <div className={styles.container}>
            {slides.map(
                (slide, idx) =>
                    idx === current && (
                        <img
                            key={`slide-${idx}`}
                            className={classes(idx)}
                            src={slide}
                            alt="slide content"
                        />
                    ),
            )}
            <span className={styles.prevIcon}>
                <CustomIcon title="" icon={icons.left} onClick={slideToPrevious} />
            </span>
            <span className={styles.nextIcon}>
                <CustomIcon title="" icon={icons.right} onClick={slideToNext} />
            </span>
        </div>
    );
};

export default SlideShow;
