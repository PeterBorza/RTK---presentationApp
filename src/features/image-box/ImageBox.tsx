import React from "react";

import { ImageCard, ToggleButton } from "shared-components";
import { puzzleImages } from "images/folder/image-stack";

import styles from "./ImageBox.module.scss";
import { useLocalStorage } from "hooks";

const ImageBox = () => {
    const [storedValue, setValue] = useLocalStorage("showImages", false);

    return (
        <div className={styles["image-grid-container"]}>
            <ToggleButton
                selected={Boolean(storedValue)}
                toggleSelected={() => setValue(!storedValue)}
            />
            {storedValue
                ? puzzleImages.map((img, index) => (
                      <ImageCard key={`puzzle-image-${index}`} position="center" src={img} />
                  ))
                : null}
        </div>
    );
};

export default ImageBox;
