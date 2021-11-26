import React, { FC, useEffect } from "react";

import { gamePhotosSelector, pairSelector } from "../selectors";
import { toggleFlipped, addToPair, resetPair } from "..";

import { FlipCard } from "../../../reusables";
import styles from "./Game.module.scss";
import { useDispatch, useSelector } from "react-redux";

const Game: FC = () => {
	const dispatch = useDispatch();
	const images = useSelector(gamePhotosSelector);
	const pair = useSelector(pairSelector);

	useEffect(() => {
		if (pair.length === 2) {
			// pair.forEach(item =>
			// 	dispatch(
			// 		toggleFlipped({ id: item.frontSrc.gameId, flipped: false })
			// 	)
			// );
			dispatch(resetPair());
		}
	}, [pair.length, dispatch]);
	const front = (img: any, bg: string) => {
		return (
			<div className={styles.front} style={{ backgroundColor: `${bg}` }}>
				<img className={styles.game_image} src={img} alt='' />
			</div>
		);
	};

	const back = (img: any, bg: string) => {
		return (
			<div className={styles.back} style={{ backgroundColor: `${bg}` }}>
				<img className={styles.game_image} src={img} alt='' />
			</div>
		);
	};

	const toggleHandler = (gameId: number) => {
		const selectedCard = images.find(
			item => item.frontSrc.gameId === gameId
		);
		if (selectedCard) {
			dispatch(
				toggleFlipped({
					id: selectedCard.frontSrc.gameId,
					flipped: !selectedCard.isFlipped,
				})
			);
			dispatch(addToPair(selectedCard));
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{images.map(image => (
					<div key={image.id} className={styles.box}>
						<FlipCard
							frontContent={() =>
								front(
									image.backSrc.src,
									image.backSrc.backGround
								)
							}
							backContent={() =>
								back(
									image.frontSrc.src,
									image.frontSrc.backGround
								)
							}
							darkBack
							flipped={image.isFlipped}
							toggleFlip={() =>
								toggleHandler(image.frontSrc.gameId)
							}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Game;
