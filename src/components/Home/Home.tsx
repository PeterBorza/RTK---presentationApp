import styles from "./Home.module.scss";
import { useTime } from "../../utils/useTime";

const Home = () => {
	const today = useTime("hour");

	return (
		<div className={styles.container}>
			<p>{today}</p>
		</div>
	);
};

export default Home;
