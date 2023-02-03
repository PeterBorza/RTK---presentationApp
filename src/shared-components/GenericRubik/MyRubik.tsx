import React from "react";

import classNames from "classnames";
import styles from "./MyRubik.module.scss";
import { createArray } from "utils";

const RUBIK_SIDES = 6;

// TODO create buttons to select from animations and also move the rubik

const MyRubik = ({ withAnimation = false }: { withAnimation?: boolean }) => {
    const wrapper = React.useRef<HTMLDivElement | null>(null);

    const classes = classNames(styles.rubikWrapper, {
        [styles.rubikWrapper__animated]: withAnimation,
    });

    const sides = createArray(RUBIK_SIDES).map((_, i) => (
        <div key={`side${i}`} className={styles.rubikSide} />
    ));

    return (
        <div className={styles.rubikContainer}>
            <div ref={wrapper} className={classes}>
                {sides}
            </div>
        </div>
    );
};

export default MyRubik;
