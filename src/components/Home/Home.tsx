import { FC } from "react";
import { useTime } from "../hooks";

import styles from "./Home.module.scss";

const Home: FC = () => {
	const hour = useTime("hour");
	const date = useTime("date");
	const day = useTime("day");
	const all = useTime("all");

	return (
		<div className={styles.container}>
			<p className={styles.time}>{hour}</p>
			<p className={styles.time}>{date}</p>
			<p className={styles.time}>{day}</p>
			<p className={styles.time}>{all}</p>
		</div>
	);
};

export default Home;
