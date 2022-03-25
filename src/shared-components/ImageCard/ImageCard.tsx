import React from "react";
import styles from "./ImageCard.module.scss";
import ls11_900 from "../../images/ls11_900.jpg";

const ImageCard = () => {
    return (
        <div className={styles["outer-wrapper"]}>
            <img className={styles.card__image} src={ls11_900} alt="peisaj" />
        </div>
    );
};

export default ImageCard;
