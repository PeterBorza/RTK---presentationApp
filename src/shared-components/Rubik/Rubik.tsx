import React from "react";

import classNames from "classnames";
import styles from "./Rubik.module.scss";
import { ImageType } from "utils/my-images";

export type RubikAnimationType =
    | "animate-1"
    | "animate-2"
    | "rollX"
    | "rollY"
    | "roll-both"
    | "still";

export type RubikSideType = {
    id: number;
    content: React.ReactNode;
};

export interface RubikType {
    withAnimation?: RubikAnimationType;
    sides: ImageType[];
    size: number;
}

const Rubik: React.FC<RubikType> = ({ withAnimation = "rollY", sides, size }) => {
    const wrapper = React.useRef<HTMLDivElement | null>(null);

    // TODO dropselect to have all animations available

    const mapRender: RubikSideType[] = sides.map((source, idx) => ({
        id: idx + 1,
        content: (
            <img
                className={styles.rubikSideImage}
                src={source}
                alt={`side-${idx + 1}`}
                loading="lazy"
            />
        ),
    }));

    const classes = classNames(styles[`rubikWrapper-${size}`], [
        styles[`rubikWrapper-${size}__${withAnimation}`],
    ]);

    const sideClasses = classNames(styles.rubikSide, styles[`rubikSide-${size}`]);

    const renderSides = mapRender.map(({ id, content }) => (
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
