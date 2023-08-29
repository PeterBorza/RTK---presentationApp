import React from "react";
import { format } from "date-fns";
import { UtilityTableLabels } from "./constants";

import classNames from "classnames";
import styles from "./UtilityTable/UtilityTable.module.scss";

type TotalPayedInfoType = {
    sumOfBills: number;
    dark?: boolean;
};

const TotalPayedInfo = ({ sumOfBills, dark }: TotalPayedInfoType) => {
    // const today = new Date().toLocaleDateString();
    const time = new Date();
    const today = format(time, "dd/MM/yyyy");
    const exactSumOfBillsPayed = sumOfBills.toFixed(2);

    const spanClasses = classNames(styles.tableFooter__info, {
        [styles.tableFooter__dark]: dark,
    });

    return (
        <h3 className={spanClasses}>
            {UtilityTableLabels.SUM_OF_BILLS}
            <span className={styles.tableFooter__data}>{today}</span>
            {UtilityTableLabels.IS}
            <span className={styles.tableFooter__data}>{exactSumOfBillsPayed}</span>
            {UtilityTableLabels.RON}
        </h3>
    );
};

export default TotalPayedInfo;
