import { useEffect } from "react";
import city900 from "images/city900.jpg";

import { FloatingImage } from "shared-components";

import { useLiftRedux } from "../selectors";
import LiftSystem from "../LiftSystem";
import BlockSystem from "../BlockSystem";

import styles from "./Building.module.scss";
import ManageLevels from "../ManageLevels";

const ElevatorSystem = () => {
    const {
        lifts: [liftA, liftB],
    } = useLiftRedux();

    return (
        <div className={styles.container}>
            <ManageLevels />
            <div className={styles.systemContainer}>
                <LiftSystem data={liftA} />
                <BlockSystem />
                <LiftSystem data={liftB} />
            </div>
        </div>
    );
};

const Building = () => (
    <FloatingImage src={city900}>
        <ElevatorSystem />
    </FloatingImage>
);

export default Building;
