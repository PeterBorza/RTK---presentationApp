import city900 from "images/city900.jpg";

import { useLiftRedux } from "../selectors";
import LiftSystem from "../LiftSystem";
import BlockSystem from "../BlockSystem";

import styles from "./Building.module.scss";
import { FloatingImage } from "shared-components";

const ElevatorSystem = () => {
    const {
        lifts: [liftA, liftB],
    } = useLiftRedux();

    return (
        <div className={styles.container}>
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
