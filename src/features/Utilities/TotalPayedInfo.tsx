import { FC } from "react";

import { format } from "date-fns";
import { UtilityTableLabels } from "./constants";

const TotalPayedInfo: FC<{ sumOfBills: number }> = ({ sumOfBills }) => {
    // const today = new Date().toLocaleDateString();
    const time = new Date();
    const today = format(time, "dd/MM/yyyy");

    const exactSumOfBillsPayed = sumOfBills.toFixed(2);
    return (
        <h3>
            {UtilityTableLabels.SUM_OF_BILLS}
            <span style={{ color: "crimson" }}>{today}</span>
            {UtilityTableLabels.IS}
            <span style={{ color: "crimson" }}>{exactSumOfBillsPayed}</span>
            {UtilityTableLabels.RON}
        </h3>
    );
};

export default TotalPayedInfo;
