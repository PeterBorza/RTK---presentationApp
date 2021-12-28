import { CSSProperties, FC } from "react";

import classNames from "classnames";
import styles from "./LiftCabin.module.scss";

interface Props {
    openDoors: boolean;
    onClick: () => void;
    properties: CSSProperties;
}

const LiftCabin: FC<Props> = ({ openDoors, onClick, properties }) => {
    const cabinClasses = classNames(styles.cabinWrapper, {
        [styles.openDoors]: openDoors,
    });
    return (
        <div className={cabinClasses} onClick={onClick} style={properties} />
    );
};

export default LiftCabin;
