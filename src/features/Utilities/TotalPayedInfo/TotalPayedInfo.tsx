import { FC } from "react";

import { format } from "date-fns";
import { UtilityTableLabels } from "../constants";
import styles from "./TotalPayedInfo.module.scss";

interface TotalSumOfBill {
	sumOfBills: number;
}

const TotalPayedInfo: FC<TotalSumOfBill> = ({ sumOfBills }) => {
	// const today = new Date().toLocaleDateString();
	const time = new Date();
	const today = format(time, "dd/MM/yyyy");

	const exactSumOfBillsPayed = sumOfBills.toFixed(2);
	return (
		<div className={styles.billTotalInfo}>
			<h3>
				{UtilityTableLabels.SUM_OF_BILLS}
				<span className={styles.highlighted}>{today}</span>
				{UtilityTableLabels.IS}
				<span className={styles.highlighted}>
					{exactSumOfBillsPayed}
				</span>
				{UtilityTableLabels.RON}
			</h3>
		</div>
	);
};

export default TotalPayedInfo;
