import { FC } from "react";
import styles from "./TotalPayedInfo.module.scss";
import { useSelector } from "react-redux";
import { selectSubtotal } from "../selectors";

import { UtilityTableLabels } from "../constants";

const TotalPayedInfo: FC = () => {
	const sumofBills = useSelector(selectSubtotal);

	const today = new Date().toLocaleDateString();
	const exactSumOfBillsPayed = sumofBills.toFixed(2);
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
