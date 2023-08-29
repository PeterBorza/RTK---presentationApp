import React from "react";

import { CustomImage } from "shared-components";

import rd1900 from "shared-components/Rubik/rubik-images/rd-1-900.jpg";
import rd2900 from "shared-components/Rubik/rubik-images/rd-2-900.jpg";
import rd3900 from "shared-components/Rubik/rubik-images/rd-3-900.jpg";
import rd4900 from "shared-components/Rubik/rubik-images/rd-4-900.jpg";

import styles from "./PhotosLandingPage.module.scss";

//TODO organize into object and import rainPhotos

const PhotosLandingPage = () => {
    return (
        <div className={styles.container}>
            <CustomImage
                src={rd1900}
                delay={100}
                duration={3000}
                spacing={100}
                direction="fromLeft"
            />
            <CustomImage
                src={rd2900}
                delay={1800}
                duration={3500}
                spacing={300}
                direction="fromRight"
            />
            <CustomImage src={rd3900} delay={3500} duration={3500} spacing={200} direction="up" />
            <CustomImage src={rd4900} delay={5000} duration={2000} spacing={200} direction="down" />
        </div>
    );
};

export default PhotosLandingPage;
