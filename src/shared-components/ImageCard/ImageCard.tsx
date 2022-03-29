import React from "react";

import { ImageType } from "../../utils/my-images";

import classNames from "classnames";
import styles from "./ImageCard.module.scss";

type ImageCardType = {
    position: "top" | "bottom";
    src: ImageType;
    caption: string;
};

const ImageCard = ({ position, src, caption }: ImageCardType) => {
    const [wide, setWide] = React.useState(false);

    const captionClasses = classNames(
        styles["card__caption"],
        styles[`card__caption__${position}`],
    );

    const wideClasses = classNames(styles.card__image, {
        [styles["card__image__wide"]]: wide,
    });

    return (
        <div className={styles["outer-wrapper"]}>
            <img
                onClick={() => setWide(prev => !prev)}
                className={wideClasses}
                src={src}
                alt="peisaj"
            />
            <p className={captionClasses}>{caption}</p>
        </div>
    );
};

export default ImageCard;
