import { FC } from "react";
import { useTime } from "../../hooks";
import { FlipBox, LoadingWrapper, Error as ErrorBlock } from "../../reusables";
import { Error } from "../../app/constants";

import styles from "./Home.module.scss";

const Home: FC = () => {
	const flipCard = [
		{
			frontContent: () => <LoadingWrapper loading={true} />,
			backContent: () => <ErrorBlock message={Error.MESSAGE} />,
			darkBack: false,
		},
		{
			frontContent: () => (
				<p className={styles.time}>{timeFormats.date}</p>
			),
			backContent: () => (
				<p className={styles.time}>{timeFormats.hour}</p>
			),
			darkBack: true,
		},
	];

	const timeFormats = {
		hour: useTime("hour"),
		date: useTime("date"),
		day: useTime("day"),
		all: useTime("all"),
	};

	return (
		<div className={styles.container}>
			<div className={styles.flipWrap}>
				<FlipBox {...flipCard[0]} />
			</div>
			<div className={styles.flipWrap}>
				<FlipBox {...flipCard[1]} />
			</div>
		</div>
	);
};

export default Home;
