import { FC } from "react";
import styles from "./PhotosLandingPage.module.scss";

const PhotosLandingPage: FC = () => {
    return (
        <div className={styles.container}>
            <h1>Some helpful photos displayed as links in sidebar</h1>
        </div>
    );
};

export default PhotosLandingPage;
