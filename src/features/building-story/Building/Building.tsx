import { useEffect } from "react";
import city900 from "images/city900.jpg";

import { Button, FloatingImage, UserField } from "shared-components";

import { INITIAL_NUMBER_OF_LEVELS } from "../state";
import { useLiftRedux } from "../selectors";
import { actions } from "../liftSlice";
import LiftSystem from "../LiftSystem";
import BlockSystem from "../BlockSystem";

import styles from "./Building.module.scss";

const LIFT_INPUT_LEVEL = "number of levels";

const ElevatorSystem = () => {
    const { setLevelNumber, resetLevelNumber, moveLift } = actions;
    const {
        lifts: [liftA, liftB],
        numberOfLevels,
        dispatch,
    } = useLiftRedux();

    const handleInputValues = (level: number) => {
        if (level > 15) dispatch(setLevelNumber(15));
        else if (level < 3 || isNaN(level)) dispatch(setLevelNumber(3));
        else dispatch(setLevelNumber(level));
    };

    useEffect(() => {
        if (numberOfLevels !== INITIAL_NUMBER_OF_LEVELS)
            dispatch(
                moveLift({
                    level: numberOfLevels - 1,
                    lift: { ...liftB, name: "B", position: numberOfLevels },
                }),
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                <UserField
                    isDark
                    onSubmit={val => handleInputValues(+val)}
                    name={LIFT_INPUT_LEVEL}
                    value=""
                />
                <Button value="Reset" onClick={() => dispatch(resetLevelNumber())} />
            </div>
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
