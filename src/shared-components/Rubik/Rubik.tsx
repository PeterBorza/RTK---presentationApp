import React from "react";

import classNames from "classnames";
import styles from "./Rubik.module.scss";

export type RubikAnimationType = "animate-1" | "animate-2" | "rollX" | "rollY" | "roll-both";

export type RubikSideType = {
    id: number;
    content: React.ReactNode | string;
};

export interface RubikType {
    withAnimation?: RubikAnimationType;
    sides: RubikSideType[];
    size: number;
}

const Rubik: React.FC<RubikType> = ({ withAnimation = "rollY", sides, size }) => {
    const wrapper = React.useRef<HTMLDivElement | null>(null);

    const classes = classNames(styles[`rubikWrapper-${size}`], [
        styles[`rubikWrapper-${size}__${withAnimation}`],
    ]);

    const sideClasses = classNames(styles.rubikSide, styles[`rubikSide-${size}`]);

    const renderSides = sides.map(({ id, content }) => (
        <div key={`rubik-side-${id}`} className={sideClasses}>
            {content}
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
