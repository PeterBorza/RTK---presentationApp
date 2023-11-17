import { useEffect } from "react";

import { Button, UserField } from "shared-components";
import { useLiftRedux } from "../selectors";
import { actions } from "../liftSlice";
import { INITIAL_NUMBER_OF_LEVELS } from "../state";

import styles from "./ManageLevels.module.scss";

const LIFT_INPUT_LEVEL = "number of levels";

const ManageLevels = () => {
    const { setLevelNumber, resetLevelNumber, moveLift } = actions;
    const {
        lifts: [, liftB],
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
        <div className={styles.controls}>
            <UserField
                isDark
                onSubmit={val => handleInputValues(+val)}
                name={LIFT_INPUT_LEVEL}
                value=""
            />
            <Button value="Reset" onClick={() => dispatch(resetLevelNumber())} />
        </div>
    );
};

export default ManageLevels;
