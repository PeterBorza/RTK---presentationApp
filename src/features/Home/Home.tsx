import { Rubik } from "../../shared-components";
import { RubikSideType } from "../../shared-components/Rubik/Rubik";
import { rainPhotos } from "../../utils/my-images";

import styles from "./Home.module.scss";
import { myImages } from "../../utils";

const Home = () => {
    const imgs: string[] = myImages().slice(0, 6);

    const mapRender = (rubikImages: string[]): RubikSideType[] => {
        return rubikImages.map((source, idx) => ({
            id: idx + 1,
            content: <img className={styles.rubikSideImage} src={source} alt={`side-${idx + 1}`} />,
        }));
    };

    return (
        <div className={styles.container}>
            <Rubik sides={mapRender(imgs)} withAnimation="rollX" size={30}></Rubik>
            <Rubik sides={mapRender(rainPhotos)} withAnimation="roll-both" size={100}></Rubik>
            <Rubik sides={mapRender(rainPhotos)} withAnimation="animate-2" size={120}></Rubik>
        </div>
    );
};

export default Home;
