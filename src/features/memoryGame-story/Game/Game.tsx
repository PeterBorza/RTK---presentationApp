import React, { useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MemoryGameMessages as msg } from "../messages";
import { ImageType } from "utils/my-images";
import { shuffle } from "utils";
import { useWindowSize } from "hooks";

import {
    gamePhotosSelector,
    flippedCardsSelector,
    matchCardsSelector,
    memoryGameState,
} from "../selectors";
import { darkModeSelector } from "app";

import { GamePhotoData, toggleFlip, setMatch, incrementCount, resetGame, toggleTheme } from "..";

import { Button, FlipCard } from "shared-components";
import GameEnd from "../GameEnd";
import Controls from "../Controls";

import classNames from "classnames";
import styles from "./Game.module.scss";

const Game = () => {
    const images = useSelector(gamePhotosSelector);
    const { currentTheme, maxCount, themes, clickCount: count } = useSelector(memoryGameState);
    const flippedCards = useSelector(flippedCardsSelector);
    const matchCards = useSelector(matchCardsSelector);
    const darkMode = useSelector(darkModeSelector);
    const { width } = useWindowSize();
    const dispatch = useDispatch();

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

    const cardFrontClasses = classNames(styles.front, styles[`front__${currentTheme}`]);
    const containerClasses = classNames(styles.container, styles[`container__${currentTheme}`]);

    const gameHasStarted = flippedCards.length !== 0;
    const finishedGame = matchCards.length === images.length;

    useEffect(() => {
        count > maxCount && dispatch(resetGame(themes[0].images));
    }, [count, dispatch, currentTheme]);

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

    const newGameHandler = useCallback(
        (arr: GamePhotoData[]) => {
            const shuffled = shuffle(arr);
            dispatch(resetGame(shuffled));
        },
        [dispatch],
    );

    const gameButtons = () =>
        themes.map(button => (
            <Button
                key={button.theme}
                onClick={() => {
                    newGameHandler(button.images);
                    dispatch(toggleTheme(button.theme));
                }}
                value={button.theme}
                className={styles.buttons}
            />
        ));

    const renderGridTable = useMemo(() => {
        const backContent = (src: ImageType) => (
            <div className={styles.back}>
                <img className={styles.game_image} src={src} alt="" />
            </div>
        );

        const renderImages = ({ id, frontSrc, isFlipped, match }: GamePhotoData, idx: number) => {
            const checkIfMatchOrFLipped = match || isFlipped;
            return (
                <div
                    key={`flip-image-${id}`}
                    className={cardWrapperClasses(checkIfMatchOrFLipped, match)}
                >
                    <FlipCard
                        frontContent={() => <div className={cardFrontClasses} />}
                        backContent={() => backContent(frontSrc.src)}
                        darkBack
                        flipped={checkIfMatchOrFLipped}
                        toggleFlip={() => flipCardHandler(images[idx])}
                    />
                </div>
            );
        };
        return images.map(renderImages);
    }, [images, cardFrontClasses, flipCardHandler]);

    if (finishedGame)
        <GameEnd
            count={count}
            message={msg.CONGRATS}
            onClick={() => newGameHandler(themes[0].images)}
            buttonLabel={msg.NEW_GAME}
        />;

    return (
        <section className={containerClasses}>
            <Controls count={count} renderButtons={gameButtons} dark={darkMode} />
            <div className={gridClasses}>{renderGridTable}</div>
        </section>
    );
};

export default Game;
