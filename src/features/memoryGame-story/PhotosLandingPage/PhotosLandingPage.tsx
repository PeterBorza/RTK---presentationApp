import { FC } from "react";
import { Rubik } from "../../../shared-components";

import styles from "./PhotosLandingPage.module.scss";

const PhotosLandingPage: FC = () => {
    return (
        <div className={styles.container}>
            <Rubik withAnimation />
        </div>
    );
};

export default PhotosLandingPage;
