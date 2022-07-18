import { liftsState } from "../selectors";
import { useSelector } from "react-redux";
import LiftSystem from "../LiftSystem";
import BlockSystem from "../BlockSystem";

import styles from "./Building.module.scss";

const Building = () => {
    const [liftA, liftB] = useSelector(liftsState);

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
