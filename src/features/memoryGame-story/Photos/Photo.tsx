import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { photoSelector } from "..";

import styles from "./Photos.module.scss";

const Photo = () => {
    const { id } = useParams();
    const photos = useSelector(photoSelector);

    const image = photos.find(img => img.id === id);

    return (
        <div className={styles.imageWrapper}>
            <img className={styles.imageStyle} src={image?.src} alt="No image found" />
        </div>
    );
};

export default Photo;
