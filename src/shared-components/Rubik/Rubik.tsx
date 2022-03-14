import React from "react";

import classNames from "classnames";
import styles from "./Rubik.module.scss";

export type RubikSideType = {
    id: number;
    content: (id: number) => React.ReactNode;
};

export type RubikType = {
    withAnimation?: boolean;
    sides: RubikSideType[];
};

const Rubik: React.FC<RubikType> = ({ withAnimation = false, sides }) => {
    const wrapper = React.useRef<HTMLDivElement | null>(null);

    const classes = classNames(styles.rubikWrapper, {
        [styles.rubikWrapper__animated]: withAnimation,
    });

    const renderSides = sides.map(({ id, content }) => (
        <div key={`rubik-side-${id}`} className={styles.rubikSide}>
            {content(id)}
        </div>
    ));

    return (
        <div className={styles.rubikContainer}>
            <div ref={wrapper} className={classes}>
                {renderSides}
            </div>
        </div>
    );
};

export default Rubik;
