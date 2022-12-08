import React from "react";

import { ImageCard, ToggleButton } from "shared-components";
import { puzzleImages } from "images/puzzlePhotos/image-stack";

import styles from "./ImageBox.module.scss";
import { useLocalStorage } from "hooks";

const ImageBox = () => {
    const [showImages, setShowImages] = useLocalStorage("showImages", false);

    return (
        <div className={styles["image-grid-container"]}>
            <ToggleButton
                darkMode={false}
                variant="regular"
                enabled={Boolean(showImages)}
                toggleEnabled={() => setShowImages(!showImages)}
            />
            {showImages
                ? puzzleImages.map((img, index) => (
                      <ImageCard key={`puzzle-image-${index}`} position="center" src={img} />
                  ))
                : null}
        </div>
    );
};

export default ImageBox;
