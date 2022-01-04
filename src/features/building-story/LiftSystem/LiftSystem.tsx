import { FC, PropsWithChildren, ReactNode } from "react";
import Lift from "../Lift/Lift";

import classNames from "classnames";
import styles from "./LiftSystem.module.scss";

type Props = {
    activated: boolean;
    panel: ReactNode;
    liftData: ReactNode;
};

const LiftSystem: FC<PropsWithChildren<Props>> = ({
    activated,
    panel,
    liftData,
}) => {
    const liftWrapper = classNames(styles.liftWrapper, {
        [styles.liftWrapper__show]: activated,
    });
    return (
        <div className={liftWrapper}>
            <Lift panel={panel} liftData={liftData} />
        </div>
    );
};

export default LiftSystem;
