import { Rubik } from "../../shared-components";
import { myImages, rainPhotos } from "../../utils/my-images";

import styles from "./Home.module.scss";

const Home = () => {
    const imgs = myImages.slice(0, 6);

    return (
        <div className={styles.container}>
            <Rubik sides={imgs} withAnimation="roll-both" size={150}></Rubik>
            <Rubik sides={rainPhotos} withAnimation="still" size={100}></Rubik>
        </div>
    );
};

export default Home;
