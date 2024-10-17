import React from "react";
import styles from "./SlideShow2.module.scss";

import { icons } from "utils";
import { CustomIcon } from "..";
import { ImageType } from "utils/my-images";

export type SlideShowType = {
  slides: ImageType[];
};

const SlideShow2 = ({ slides }: SlideShowType): JSX.Element | null => {
  const [current, setCurrent] = React.useState<number>(0);
  const lastSlide = slides.length - 1;

  if (lastSlide <= 0) return null;

  const slideToPrevious = () => {
    const previousItem = current === 0 ? lastSlide : current - 1;
    setCurrent(previousItem);
  };
  const slideToNext = () => {
    const nextItem = current === lastSlide ? 0 : current + 1;
    setCurrent(nextItem);
  };

  return (
    <div className={styles.slideWrapper}>
      <button
        style={{ left: "30px" }}
        className={styles.button}
        aria-label="slide-left"
        onClick={slideToPrevious}
        title="slide left"
      >
        <CustomIcon size="large" icon={icons.left} />
      </button>
      <div className={styles.container}>
        {slides.map((slide, idx) => (
          <img
            key={`slide-${idx}`}
            className={styles.container__image}
            src={slide}
            alt="slide content"
            loading="lazy"
            style={{ opacity: `${idx === current ? 1 : 0}` }}
          />
        ))}
      </div>
      <button
        style={{ right: "30px" }}
        className={styles.button}
        aria-label="slide-right"
        onClick={slideToNext}
        title="slide right"
      >
        <CustomIcon size="large" icon={icons.right} />
      </button>
    </div>
  );
};

export default SlideShow2;
