import styles from "./Home.module.scss";
import { useTime } from "../../utils/useTime";

const Home = () => {
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
