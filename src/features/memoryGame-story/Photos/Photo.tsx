import { useParams } from "react-router-dom";
import { useMGameRedux } from "../selectors";

import styles from "./Photos.module.scss";

const Photo = () => {
    const { photos } = useMGameRedux();
    const { id } = useParams();

    const image = photos.find(img => img.id === id);

    return (
        <div className={styles.imageWrapper}>
            <img className={styles.imageStyle} src={image?.src} alt="No image found" />
        </div>
    );
};

export default Photo;
