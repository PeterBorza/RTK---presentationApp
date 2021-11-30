import { FC, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MemoryGameMessages as msg } from "../messages";
import { gameImagesSlice, shuffle } from "../../../utils";

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
	setNewGame,
} from "..";

import { Button, FlipCard } from "../../../reusables";
import GameEnd from "../GameEnd";
import Controls from "../Controls";

import merryChristmas from "../../../images/merryChristmas.png";

import classNames from "classnames";
import styles from "./Game.module.scss";

type ImageSource = string;

const Game: FC = () => {
	const dispatch = useDispatch();
	const images = useSelector(gamePhotosSelector);
	const flippedCards = useSelector(flippedCardsSelector);
	const matchCards = useSelector(matchCardsSelector);
	const count = useSelector(clickCountSelector);
	const finishedGame = matchCards.length === images.length;

	const cardWrapperClasses = (isFlipped: boolean, match: boolean) =>
		classNames(styles.box, {
			[styles.disabled]: isFlipped,
			[styles.faded]: match,
		});

	const gameHasStarted = flippedCards.length !== 0;

	const backContent = (src: ImageSource) => {
		return (
			<div className={styles.back}>
				<img className={styles.game_image} src={src} alt='' />
			</div>
		);
	};

	const frontContent = () => <div className={styles.front}></div>;

	const freezeIfMatch = useCallback(
		(item: GamePhotoData) => {
			if (
				gameHasStarted &&
				flippedCards[0].frontSrc.gameId === item.frontSrc.gameId
			) {
				dispatch(setMatch({ id: flippedCards[0].id, match: true }));
				dispatch(setMatch({ id: item.id, match: true }));
			}
		},
		[gameHasStarted, flippedCards, dispatch]
	);

	const flipCardHandler = useCallback(
		(item: GamePhotoData) => {
			freezeIfMatch(item);
			dispatch(incrementCount());
			dispatch(toggleFlip(item.id));
		},
		[dispatch, freezeIfMatch]
	);

	const resetGameHandler = () => gameHasStarted && dispatch(resetGame());

	const newGameHandler = () => {
		const shuffled = shuffle(gameImagesSlice);
		dispatch(resetGame());
		dispatch(setNewGame(shuffled));
	};

	const renderGameButtons = () => {
		return (
			<>
				<Button
					onClick={resetGameHandler}
					value={msg.RESET}
					className={styles.buttons}
				/>
				<Button
					onClick={newGameHandler}
					value={msg.NEW_GAME}
					className={styles.buttons}
				/>
			</>
		);
	};

	const renderGridTable = useMemo(() => {
		const renderImages = (
			{ id, frontSrc, isFlipped, match }: GamePhotoData,
			idx: number
		) => {
			const checkIfMatchOrFLipped = !match ? isFlipped : match;
			return (
				<div
					key={id}
					className={cardWrapperClasses(checkIfMatchOrFLipped, match)}
				>
					<FlipCard
						frontContent={() => frontContent()}
						backContent={() => backContent(frontSrc.src)}
						darkBack
						flipped={checkIfMatchOrFLipped}
						toggleFlip={() => flipCardHandler(images[idx])}
					/>
				</div>
			);
		};
		return images.map(renderImages);
	}, [images, backContent, flipCardHandler, frontContent]);

	return (
		<section className={styles.container}>
			{!finishedGame ? (
				<>
					<Controls count={count} renderButtons={renderGameButtons} />
					<div className={styles.grid}>{renderGridTable}</div>
				</>
			) : (
				<GameEnd
					count={count}
					message={msg.CONGRATS}
					onClick={() => newGameHandler()}
					buttonLabel={msg.NEW_GAME}
				/>
			)}
		</section>
	);
};

export default Game;
