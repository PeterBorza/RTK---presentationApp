import { useLiftRedux } from "../selectors";
import LiftSystem from "../LiftSystem";
import BlockSystem from "../BlockSystem";

import styles from "./Building.module.scss";

const Building = () => {
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

export default Building;
