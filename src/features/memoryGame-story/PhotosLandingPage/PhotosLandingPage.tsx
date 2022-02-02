import { FC } from "react";
import { CustomImage, Rubik } from "../../../shared-components";
import rd1900 from "../../../shared-components/Rubik/rubik-images/rd-1-900.jpg";
import rd2900 from "../../../shared-components/Rubik/rubik-images/rd-2-900.jpg";
import rd3900 from "../../../shared-components/Rubik/rubik-images/rd-3-900.jpg";
import rd4900 from "../../../shared-components/Rubik/rubik-images/rd-4-900.jpg";
import house1 from "../../../images/house-1.jpg";
import house2 from "../../../images/house-2.jpg";
import house3 from "../../../images/house-3.jpg";
import house4 from "../../../images/house-4.jpg";

import styles from "./PhotosLandingPage.module.scss";

const PhotosLandingPage: FC = () => {
    return (
        <div className={styles.container}>
            {/* <Rubik withAnimation /> */}
            <CustomImage
                src={house1}
                delay={100}
                duration={5000}
                spacing={100}
                direction="fromLeft"
            />
            <CustomImage
                src={house2}
                delay={4600}
                duration={5000}
                spacing={100}
                direction="fromRight"
            />
            <CustomImage src={house3} delay={9000} duration={5000} spacing={100} direction="up" />
            <CustomImage
                src={house4}
                delay={13500}
                duration={5000}
                spacing={100}
                direction="down"
            />
        </div>
    );
};

export default PhotosLandingPage;
