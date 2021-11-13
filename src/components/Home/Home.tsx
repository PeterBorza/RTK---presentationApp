import { FC, useContext, useEffect } from "react";
// import { CheckBox } from "../../reusables";
import { useTime } from "../../utils";
// import { SideBarContext } from "../../context";

import styles from "./Home.module.scss";

const Home: FC = () => {
	// const [isOpen, setIsOpen] = useContext(SideBarContext);
	// useEffect(() => {
	// 	console.log(isOpen);
	// }, [isOpen]);

	const hour = useTime("hour");
	const date = useTime("date");
	const day = useTime("day");
	const all = useTime("all");

	return (
		<div className={styles.container}>
			{/* <CheckBox
				id='red'
				name='red'
				label='open'
				value='red'
				isChecked={isOpen}
				onChange={e => setIsOpen(e.target.checked)}
			/> */}
			<p className={styles.time}>{hour}</p>
			<p className={styles.time}>{date}</p>
			<p className={styles.time}>{day}</p>
			<p className={styles.time}>{all}</p>
		</div>
	);
};

export default Home;
