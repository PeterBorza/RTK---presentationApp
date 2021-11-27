import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { gamePhotosSelector } from "../selectors";
import { toggleFlipped } from "..";

import { FlipCard } from "../../../reusables";
import merryChristmas from "../../../images/merryChristmas.png";

import styles from "./Game.module.scss";

const Game: FC = () => {
	const dispatch = useDispatch();
	const images = useSelector(gamePhotosSelector);

	const toggleHandler = (index: number) => {
		dispatch(
			toggleFlipped({
				index,
				flipped: !images[index].isFlipped,
			})
		);
	};

	const front = (img: string) => {
		return (
			<div className={styles.front}>
				<img className={styles.game_image} src={img} alt='' />
			</div>
		);
	};

	const back = (img: string) => {
		return (
			<div className={styles.back}>
				<img className={styles.game_image} src={img} alt='' />
			</div>
		);
	};

	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{images.map(({ id, frontSrc, isFlipped }, idx) => (
					<div key={id} className={styles.box}>
						<FlipCard
							frontContent={() => front(merryChristmas)}
							backContent={() => back(frontSrc.src)}
							darkBack
							flipped={isFlipped}
							toggleFlip={() => toggleHandler(idx)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Game;
