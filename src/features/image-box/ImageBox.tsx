import React from "react";

import { v4 as uuid } from "uuid";

import { ImageCard } from "shared-components";
import { puzzleImages } from "images/folder/image-stack";

import styles from "./ImageBox.module.scss";
import { featureFlags } from "flags";
import { DummyText, Forbidden } from "app";

const ImageBox = () => {
    const { showPuzzleImages } = featureFlags;
    return (
        <div className={styles["image-grid-container"]}>
            {showPuzzleImages ? (
                puzzleImages.map(img => (
                    <ImageCard
                        key={uuid()}
                        position="center"
                        src={img}
                        caption={DummyText.MESSAGE}
                    />
                ))
            ) : (
                <div>{Forbidden.MESSAGE}</div>
            )}
        </div>
    );
};

export default ImageBox;
