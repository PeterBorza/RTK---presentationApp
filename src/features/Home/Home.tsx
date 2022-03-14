import React from "react";
import { Rubik } from "../../shared-components";
import { RubikSideType } from "../../shared-components/Rubik/Rubik";

import styles from "./Home.module.scss";
import { myImages } from "../../utils";

const Home = () => {
    const imgs: string[] = myImages().slice(0, 6);

    const render = (): RubikSideType[] => {
        let myArray: RubikSideType[] = [];
        imgs.forEach((img, idx) => {
            const cont = {
                id: idx + 1,
                content: (id: number) => (
                    <img style={{ maxWidth: "100%" }} src={img} alt={`side-${id + 1}`} />
                ),
            };
            myArray.push(cont);
        });
        return myArray;
    };

    const rubikSides: RubikSideType[] = [
        {
            id: 1,
            content: id => <h1>{`Side-${id}`}</h1>,
        },
        {
            id: 2,
            content: id => <h1>{`Side-${id}`}</h1>,
        },
        {
            id: 3,
            content: id => <h1>{`Side-${id}`}</h1>,
        },
        {
            id: 4,
            content: id => <h1>{`Side-${id}`}</h1>,
        },
        {
            id: 5,
            content: id => <h1>{`Side-${id}`}</h1>,
        },
        {
            id: 6,
            content: id => <h1>{`Side-${id}`}</h1>,
        },
    ];

    return (
        <div className={styles.container}>
            <Rubik sides={render()} withAnimation></Rubik>
            <Rubik sides={rubikSides} withAnimation></Rubik>
        </div>
    );
};

export default Home;
