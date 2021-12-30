import { CSSProperties, forwardRef, RefObject } from "react";

import classNames from "classnames";
import styles from "./LiftCabin.module.scss";

interface Props {
    openDoors: boolean;
    onClick: () => void;
    properties: CSSProperties;
    ref: RefObject<HTMLDivElement | null>;
}

const LiftCabin = forwardRef<HTMLDivElement, Props>(
    ({ openDoors, onClick, properties }, ref) => {
        const cabinClasses = classNames(styles.cabinWrapper, {
            [styles.openDoors]: openDoors,
            [styles.closeDoors]: !openDoors,
        });
        return (
            <div
                ref={ref}
                className={cabinClasses}
                onClick={onClick}
                style={properties}
            />
        );
    }
);

export default LiftCabin;
