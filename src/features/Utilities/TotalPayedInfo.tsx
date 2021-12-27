import { FC } from "react";

import { format } from "date-fns";
import { UtilityTableLabels } from "./constants";

import styles from "./UtilityTable/UtilityTable.module.scss";

const TotalPayedInfo: FC<{ sumOfBills: number }> = ({ sumOfBills }) => {
    // const today = new Date().toLocaleDateString();
    const time = new Date();
    const today = format(time, "dd/MM/yyyy");
    const exactSumOfBillsPayed = sumOfBills.toFixed(2);

    return (
        <h3 className={styles.tableFooter__info}>
            {UtilityTableLabels.SUM_OF_BILLS}
            <span className={styles.tableFooter__data}>{today}</span>
            {UtilityTableLabels.IS}
            <span className={styles.tableFooter__data}>
                {exactSumOfBillsPayed}
            </span>
            {UtilityTableLabels.RON}
        </h3>
    );
};

export default TotalPayedInfo;
