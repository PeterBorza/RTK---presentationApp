import { FC, ReactNode } from "react";
import styles from "./Lift.module.scss";

interface Props {
    label: string;
    value: string | ReactNode;
}

const DataRow: FC<Props> = ({ label, value }) => {
    return (
        <div className={styles.liftData__row}>
            <h3>{label}</h3>
            <span>{value}</span>
        </div>
    );
};

export default DataRow;
