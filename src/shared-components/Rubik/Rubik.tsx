import { useRef } from "react";

import classNames from "classnames";
import styles from "./Rubik.module.scss";

type RubikProps = {
    withAnimation?: boolean;
};

const RUBIK_SIDES = 6;

const Rubik = ({ withAnimation = false }: RubikProps) => {
    const wrapper = useRef<HTMLDivElement | null>(null);

    const classes = classNames(styles.rubikWrapper, {
        [styles.rubikWrapper__animated]: withAnimation,
    });

    const sides = Array(RUBIK_SIDES)
        .fill(null)
        .map((_, i) => <div key={`side${i}`} className={styles.rubikSide} />);

    return (
        <div className={styles.rubikContainer}>
            <div ref={wrapper} className={classes}>
                {sides}
            </div>
        </div>
    );
};

export default Rubik;
