import { FC } from "react";
import { liftsState } from "../selectors";
import { useDispatch, useSelector } from "react-redux";
import { toggleBuilding, liftOpenSelector } from "../../../app/";
import { BuildingMessages as msg } from "..";
import { Button } from "../../../shared-components";
import LiftSystem from "../LiftSystem";
import BlockSystem from "../BlockSystem";

import styles from "./Building.module.scss";

const Building: FC = () => {
    const openSideBar = useSelector(liftOpenSelector);
    const [liftA, liftB] = useSelector(liftsState);
    const dispatch = useDispatch();

    const menuButton = (
        <Button
            className={styles.menuButton}
            onClick={() => dispatch(toggleBuilding(!openSideBar))}
            value={msg.MENU_BUTTON}
            displayed={!openSideBar}
        />
    );

    return (
        <div className={styles.container}>
            {menuButton}
            <div className={styles.systemContainer}>
                <LiftSystem showPanel={!liftA.isActive} data={liftA} />
                <BlockSystem />
                <LiftSystem showPanel={!liftB.isActive} data={liftB} />
            </div>
        </div>
    );
};

export default Building;
