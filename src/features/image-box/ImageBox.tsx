import React from "react";

import { v4 as uuid } from "uuid";

import { ImageCard } from "shared-components";
import { puzzleImages } from "images/folder/image-stack";

import styles from "./ImageBox.module.scss";

const ImageBox = () => (
    <div className={styles["image-grid-container"]}>
        {puzzleImages.map(img => (
            <ImageCard
                key={uuid()}
                position="center"
                src={img}
                caption=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolores enim iure! Culpa eaque nemo officia aspernatur debitis, atque commodi? Atque quae eos consectetur quas. Nisi voluptate ut ipsam quos! Cupiditate animi quaerat inventore saepe repudiandae distinctio ipsam. Magnam numquam dolorum nihil inventore fuga amet!"
            />
        ))}
    </div>
);

export default ImageBox;
