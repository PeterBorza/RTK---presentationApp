import { ImageCard, ToggleButton } from "shared-components";
import { miniLandscapes } from "utils/my-images";
import { useLocalStorage } from "hooks";
import { LocalStorageKeys as LS } from "common/localStorageKeys";

import styles from "./ImageBox.module.scss";

//TODO pagination

const ImageBox = () => {
    const [showImages, setShowImages] = useLocalStorage(LS.PUZZLE, false);

    return (
        <div className={`${styles["image-grid-container"]} no-scrollBar`}>
            <ToggleButton
                darkMode={false}
                variant="regular"
                enabled={Boolean(showImages)}
                toggleEnabled={() => setShowImages(!showImages)}
            />
            {showImages
                ? miniLandscapes.map((img, index) => (
                      <ImageCard key={`puzzle-image-${index}`} position="center" src={img} />
                  ))
                : null}
        </div>
    );
};

export default ImageBox;
