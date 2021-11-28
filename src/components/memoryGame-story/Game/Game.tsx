import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	gamePhotosSelector,
	flippedCardsSelector,
	matchCardsSelector,
	clickCountSelector,
} from "../selectors";
import {
	GamePhotoData,
	toggleFlip,
	setMatch,
	incrementCount,
	resetGame,
} from "..";

import { Button, FlipCard } from "../../../reusables";
import merryChristmas from "../../../images/merryChristmas.png";

import classNames from "classnames";
import styles from "./Game.module.scss";

type ImageId = string;
type ImageSource = string;

const Game: FC = () => {
	const dispatch = useDispatch();
	const images = useSelector(gamePhotosSelector);
	const flippedCards = useSelector(flippedCardsSelector);
	const matchCards = useSelector(matchCardsSelector);
	const count = useSelector(clickCountSelector);
	const finishedGame = matchCards.length === images.length;

	const cardWrapperClasses = (isFlipped: boolean) =>
		classNames(styles.box, {
			[styles.disabled]: isFlipped,
		});

	useEffect(() => {
		console.log("ptr", "AFTERCLICK", { flippedCards, matchCards });
	}, [flippedCards]);

	const flipSide = (src: ImageSource, className: string) => {
		return (
			<div className={className}>
				<img className={styles.game_image} src={src} alt='' />
			</div>
		);
	};

	const frontContent = () => flipSide(merryChristmas, styles.front);
	const backContent = (src: ImageSource) => flipSide(src, styles.back);

	const flipFunction = (item: GamePhotoData) => {
		dispatch(toggleFlip(item.id));
		if (
			flippedCards.length !== 0 &&
			flippedCards[0].frontSrc.gameId === item.frontSrc.gameId
		) {
			dispatch(setMatch({ id: flippedCards[0].id, match: true }));
			dispatch(setMatch({ id: item.id, match: true }));
		}
		dispatch(incrementCount());
	};

	const resetGameHandler = () => {
		dispatch(resetGame());
	};

	const renderImages = (
		{ id, frontSrc, isFlipped, match }: GamePhotoData,
		idx: number
	) => {
		const checkIfMatchOrFLipped = !match ? isFlipped : match;
		return (
			<div key={id} className={cardWrapperClasses(checkIfMatchOrFLipped)}>
				<FlipCard
					frontContent={frontContent}
					backContent={() => backContent(frontSrc.src)}
					darkBack
					flipped={checkIfMatchOrFLipped}
					toggleFlip={() => flipFunction(images[idx])}
				/>
			</div>
		);
	};

	const renderGridTable = useMemo(() => images.map(renderImages), [images]);

	return (
		<section className={styles.container}>
			{!finishedGame ? (
				<>
					<div style={{ display: "flex" }}>
						<div>CLICKS:{count}</div>
						<button onClick={() => resetGameHandler()}>
							RESET
						</button>
					</div>
					<div className={styles.grid}>{renderGridTable}</div>
				</>
			) : (
				<div className={styles.finished}>
					<h1>CONGRATULATIONS, YOU FINISHED THE GAME</h1>
				</div>
			)}
		</section>
	);
};

export default Game;
