import { FC, ReactNode } from "react";
import styles from "./Lift.module.scss";

interface Props {
	panel: ReactNode;
	liftData: ReactNode;
}

const Lift: FC<Props> = ({ panel, liftData }) => {
	return (
		<div className={styles.liftContainer}>
			<div className={styles.liftData}>{liftData}</div>
			<div className={styles.liftButtons}>{panel}</div>
		</div>
	);
};

export default Lift;
