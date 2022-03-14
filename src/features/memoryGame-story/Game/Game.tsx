import { useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MemoryGameMessages as msg } from "../messages";
import { gameImagesSlice } from "../game-images";
import { shuffle } from "../../../utils";

import {
    gamePhotosSelector,
    flippedCardsSelector,
    matchCardsSelector,
    clickCountSelector,
} from "../selectors";
import { darkModeSelector } from "../../../app";

import { GamePhotoData, toggleFlip, setMatch, incrementCount, resetGame, setNewGame } from "..";

import { Button, FlipCard } from "../../../shared-components";
import GameEnd from "../GameEnd";
import Controls from "../Controls";

import classNames from "classnames";
import styles from "./Game.module.scss";
import { useWindowSize } from "../../../hooks";

type ImageSource = string;

const Game = () => {
    const dispatch = useDispatch();
    const images = useSelector(gamePhotosSelector);
    const flippedCards = useSelector(flippedCardsSelector);
    const matchCards = useSelector(matchCardsSelector);
    const count = useSelector(clickCountSelector);
    const darkMode = useSelector(darkModeSelector);
    const { width } = useWindowSize();

    const SMALL_PORTRAIT_SCREEN = width < 400;
    const SMALL_LANDSCAPE_SCREEN = width < 800 && width > 400;

    const gridClasses = classNames(styles.grid, {
        [styles["grid__portrait"]]: SMALL_PORTRAIT_SCREEN,
        [styles["grid__landscape"]]: SMALL_LANDSCAPE_SCREEN,
    });

    const cardWrapperClasses = (isFlipped: boolean, match: boolean) =>
        classNames(styles.box, {
            [styles.disabled]: isFlipped,
            [styles.faded]: match,
        });

    const gameHasStarted = flippedCards.length !== 0;
    const finishedGame = matchCards.length === images.length;

    useEffect(() => {
        count > 25 && dispatch(resetGame());
    }, [count, dispatch]);

    const freezeIfMatch = useCallback(
        (item: GamePhotoData) => {
            if (gameHasStarted && flippedCards[0].frontSrc.gameId === item.frontSrc.gameId) {
                dispatch(setMatch({ id: flippedCards[0].id, match: true }));
                dispatch(setMatch({ id: item.id, match: true }));
            }
        },
        [gameHasStarted, flippedCards, dispatch],
    );

    const flipCardHandler = useCallback(
        (item: GamePhotoData) => {
            freezeIfMatch(item);
            dispatch(incrementCount());
            dispatch(toggleFlip(item.id));
        },
        [dispatch, freezeIfMatch],
    );

    const resetGameHandler = () => gameHasStarted && dispatch(resetGame());

    const newGameHandler = () => {
        const shuffled = shuffle(gameImagesSlice);
        dispatch(resetGame());
        dispatch(setNewGame(shuffled));
    };

    const gameButtons = [
        {
            onClick: resetGameHandler,
            value: msg.RESET,
        },
        {
            onClick: newGameHandler,
            value: msg.NEW_GAME,
        },
    ];

    const renderGameButtons = () =>
        gameButtons.map(button => (
            <Button key={button.value} {...button} className={styles.buttons} />
        ));

    const renderGridTable = useMemo(() => {
        const backContent = (src: ImageSource) => {
            return (
                <div className={styles.back}>
                    <img className={styles.game_image} src={src} alt="" />
                </div>
            );
        };

        const frontContent = () => <div className={styles.front} />;

        const renderImages = ({ id, frontSrc, isFlipped, match }: GamePhotoData, idx: number) => {
            const checkIfMatchOrFLipped = !match ? isFlipped : match;
            return (
                <div key={id} className={cardWrapperClasses(checkIfMatchOrFLipped, match)}>
                    <FlipCard
                        frontContent={frontContent}
                        backContent={() => backContent(frontSrc.src)}
                        darkBack
                        flipped={checkIfMatchOrFLipped}
                        toggleFlip={() => flipCardHandler(images[idx])}
                    />
                </div>
            );
        };
        return images.map(renderImages);
    }, [images, flipCardHandler]);

    return (
        <section className={styles.container}>
            {!finishedGame ? (
                <>
                    <Controls count={count} renderButtons={renderGameButtons} dark={darkMode} />
                    <div className={gridClasses}>{renderGridTable}</div>
                </>
            ) : (
                <GameEnd
                    count={count}
                    message={msg.CONGRATS}
                    onClick={newGameHandler}
                    buttonLabel={msg.NEW_GAME}
                />
            )}
        </section>
    );
};

export default Game;
