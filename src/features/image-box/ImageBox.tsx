import React from "react";
import { ImageCard } from "../../shared-components";
import styles from "./ImageBox.module.scss";

const ImageBox = () => {
    return (
        <div className={styles["image-grid-container"]}>
            <ImageCard />
        </div>
    );
};

export default ImageBox;
