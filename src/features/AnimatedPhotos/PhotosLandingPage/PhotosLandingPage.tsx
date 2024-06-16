import { CustomImage } from "shared-components";

import { landingPages } from "./landingPages";

import styles from "./PhotosLandingPage.module.scss";

const PhotosLandingPage = () => {
    const renderCustomImages = () => {
        return landingPages.map((page, idx) => (
            <CustomImage key={`custom-image-${idx}`} {...page} />
        ));
    };
    return <div className={styles.container}>{renderCustomImages()}</div>;
};

export default PhotosLandingPage;
