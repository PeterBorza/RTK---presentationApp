import React from "react";

import { ImageCard } from "../../shared-components";
import { folder } from "../../images/folder/image-stack";

import styles from "./ImageBox.module.scss";

const ImageBox = () => {
    return (
        <div className={styles["image-grid-container"]}>
            {folder.map(img => (
                <ImageCard
                    position="top"
                    src={img}
                    caption=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolores enim iure! Culpa eaque nemo officia aspernatur debitis, atque commodi? Atque quae eos consectetur quas. Nisi voluptate ut ipsam quos! Cupiditate animi quaerat inventore saepe repudiandae distinctio ipsam. Magnam numquam dolorum nihil inventore fuga amet!"
                />
            ))}
        </div>
    );
};

export default ImageBox;
