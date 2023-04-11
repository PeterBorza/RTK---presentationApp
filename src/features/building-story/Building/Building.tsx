import city900 from "images/city900.jpg";

import { useLiftRedux } from "../selectors";
import { setLevelNumber } from "../liftSlice";
import LiftSystem from "../LiftSystem";
import BlockSystem from "../BlockSystem";

import styles from "./Building.module.scss";
import { FloatingImage, UserField } from "shared-components";
import { useEffect, useState } from "react";

const ElevatorSystem = () => {
    const {
        lifts: [liftA, liftB],
        dispatch,
    } = useLiftRedux();
    const [val, setVal] = useState("");

    const handleInputValues = (val: string) => {
        if (+val > 15) setVal("15");
        else if (+val < 3 || isNaN(+val)) setVal("3");
        else setVal(val);
    };

    useEffect(() => {
        val !== "" && dispatch(setLevelNumber(+val));
    }, [val, dispatch]);

    return (
        <div className={styles.container}>
            <UserField
                isDark
                onSubmit={val => handleInputValues(val)}
                name="number of levels"
                value={val}
            />
            <div className={styles.systemContainer}>
                <LiftSystem data={liftA} />
                <BlockSystem />
                <LiftSystem data={liftB} />
            </div>
        </div>
    );
};

// TODO add user input for speed and level of choice, limited to window possibilities

const Building = () => (
    <FloatingImage src={city900}>
        <ElevatorSystem />
    </FloatingImage>
);

export default Building;
