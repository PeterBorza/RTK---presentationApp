import styles from "./Home.module.scss";
import { format } from "date-fns";

const Home = () => {
	return (
		<>
			<div className={styles.container}>
				<p>{format(new Date(), "MM/dd/yyyy/iii/H:m")}</p>
			</div>
		</>
	);
};

export default Home;
