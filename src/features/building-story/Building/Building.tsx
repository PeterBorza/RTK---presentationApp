import { FC } from "react";
import { liftsState } from "../selectors";
import { useSelector } from "react-redux";
import LiftSystem from "../LiftSystem";
import BlockSystem from "../BlockSystem";

import styles from "./Building.module.scss";

const Building: FC = () => {
    const [liftA, liftB] = useSelector(liftsState);

    return (
        <div className={styles.container}>
            <div className={styles.systemContainer}>
                <LiftSystem showPanel data={liftA} />
                <BlockSystem />
                <LiftSystem showPanel data={liftB} />
            </div>
        </div>
    );
};

export default Building;
