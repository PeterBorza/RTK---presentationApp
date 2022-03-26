import React from "react";

import classNames from "classnames";
import styles from "./ImageCard.module.scss";
import ls11_900 from "../../images/ls11_900.jpg";
import { ImageType } from "../../utils/my-images";

type ImageCardType = {
    position: "top" | "bottom";
    src: ImageType;
    caption: string;
};

const ImageCard = ({ position, src, caption }: ImageCardType) => {
    const captionClasses = classNames(
        styles["card__caption"],
        styles[`card__caption__${position}`],
    );
    return (
        <div className={styles["outer-wrapper"]}>
            <img className={styles.card__image} src={src} alt="peisaj" />
            <p className={captionClasses}>{caption}</p>
        </div>
    );
};

export default ImageCard;
