import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleUtils } from "../../../app";
import { CustomInput } from "../../../shared-components";
import { UtilityTableLabels } from "../constants";
import styles from "./UtilityPlatform.module.scss";

const UtilityPlatform = () => {
    const [name, setName] = useState("");
    const validPass = name === "Peter";
    const dispatch = useDispatch();
    useEffect(() => {
        validPass ? dispatch(toggleUtils(true)) : dispatch(toggleUtils(false));
    }, [dispatch, validPass]);
    return (
        <div className={styles.container}>
            <h2 style={{ color: validPass ? "limegreen" : "crimson" }}>
                {validPass ? UtilityTableLabels.CORRECT_PASSWORD : UtilityTableLabels.NAME}
            </h2>
            <div className={styles.inputContent}>
                <CustomInput name="Password" value={name} onChange={e => setName(e.target.value)} />
            </div>
        </div>
    );
};

export default UtilityPlatform;
