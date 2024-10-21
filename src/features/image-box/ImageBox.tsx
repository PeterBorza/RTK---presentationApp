import { BlackModal, ImageCard, ToggleButton } from "shared-components";
import { colorImages, ImageType } from "utils/my-images";
import { useLocalStorage } from "hooks";
import { LocalStorageKeys as LS } from "common/localStorageKeys";

import styles from "./ImageBox.module.scss";
import { useState } from "react";

//TODO pagination

const ImageBox = () => {
  const [showImages, setShowImages] = useLocalStorage(LS.PUZZLE, false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const openModal = (img: ImageType) => {
    setSelected(img);
    setOpen(true);
  };
  const closeModal = () => {
    setSelected("");
    setOpen(false);
  };

  return (
    <div className={`${styles["image-grid-container"]} no-scrollBar`}>
      <ToggleButton
        darkMode={false}
        variant="regular"
        enabled={Boolean(showImages)}
        toggleEnabled={() => setShowImages(!showImages)}
      />
      {showImages
        ? colorImages.map((img, index) => (
            <div onClick={() => openModal(img)} key={`puzzle-image-${index}`}>
              <ImageCard position="center" src={img} />
            </div>
          ))
        : null}
      {open && <BlackModal onClose={closeModal} renderFields={() => <img src={selected} />} />}
    </div>
  );
};

export default ImageBox;
