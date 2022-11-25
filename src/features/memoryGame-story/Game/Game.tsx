import React, { useCallback, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";

import { MemoryGameMessages as msg } from "../messages";
import { shuffle } from "utils";
import { useWindowSize } from "hooks";
import { GameTheme, GameThemeType } from "../types";

import {
    gamePhotosSelector,
    flippedCardsSelector,
    memoryGameState,
    finishedGameSelector,
} from "../selectors";
import { useAppRedux } from "app";

import { GamePhotoData, toggleFlip, setMatch, incrementCount, resetGame, toggleTheme } from "..";

import { AlertModal, Button, ButtonWrapper, FlipCard } from "shared-components";
import Controls from "../Controls";

import classNames from "classnames";
import styles from "./Game.module.scss";

const Game = () => {
    const { isDarkMode, dispatch } = useAppRedux();
    const images = useSelector(gamePhotosSelector);
    const finishedGame = useSelector(finishedGameSelector);
    const {
        gamePhotos,
        currentTheme,
        maxCount,
        themes,
        currentCount: count,
    } = useSelector(memoryGameState);
    const flippedCards = useSelector(flippedCardsSelector);
    const { width } = useWindowSize();

    const SMALL_PORTRAIT_SCREEN = width < 400;
    const SMALL_LANDSCAPE_SCREEN = width < 800 && width > 400;

    const gridClasses = classNames(styles.grid, {
        [styles.grid__portrait]: SMALL_PORTRAIT_SCREEN,
        [styles.grid__landscape]: SMALL_LANDSCAPE_SCREEN,
    });

    const cardWrapperClasses = (isFlipped: boolean, match: boolean) =>
        classNames(styles.box, {
            [styles.disabled]: isFlipped,
            [styles.faded]: match,
        });

    const cardFrontClasses = classNames(styles.front, styles[`front__${currentTheme}`]);
    const containerClasses = classNames(styles.container, styles[`container__${currentTheme}`]);

    const gameHasStarted = flippedCards.length !== 0;

    useEffect(() => {
        count >= maxCount && dispatch(resetGame(gamePhotos));
    }, [count, dispatch, currentTheme, maxCount, themes]);

    const freezeIfMatch = useCallback(
        (item: GamePhotoData) => {
            if (gameHasStarted && flippedCards[0].frontSrc.gameId === item.frontSrc.gameId) {
                dispatch(setMatch(flippedCards[0].id));
                dispatch(setMatch(item.id));
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
        (gameTheme: GameTheme) => {
            const { images, theme } = themes.find(t => t.theme === gameTheme)!;
            if (theme && images) {
                const shuffled = shuffle(images);
                dispatch(resetGame(shuffled));
                dispatch(toggleTheme(theme));
            }
        },
        [dispatch],
    );

    const gameButton = ({ theme = GameTheme.MINIONS }: Partial<GameThemeType>) => (
        <Button
            key={theme}
            onClick={() => {
                newGameHandler(theme);
            }}
            value={theme}
            className={styles.buttons}
        />
    );

    const renderGridTable = useMemo(() => {
        const renderImages = ({ id, frontSrc, isFlipped, match }: GamePhotoData, idx: number) => {
            return (
                <div
                    key={`flip-image-${id}`}
                    className={cardWrapperClasses(match || isFlipped, match)}
                >
                    <FlipCard
                        flipped={match || isFlipped}
                        toggleFlip={() => flipCardHandler(images[idx])}
                    >
                        <FlipCard.Front>
                            <div className={cardFrontClasses} />
                        </FlipCard.Front>
                        <FlipCard.Back darkBack>
                            <div className={styles.back}>
                                <img className={styles.game_image} src={frontSrc.src} alt="" />
                            </div>
                        </FlipCard.Back>
                    </FlipCard>
                </div>
            );
        };
        return images.map(renderImages);
    }, [images, cardFrontClasses, flipCardHandler]);

    const endMessage = msg.CONGRATS.replace("x", `${count}`);

    return (
        <section className={containerClasses}>
            <Controls label={msg.SCORE} count={count} dark={isDarkMode}>
                {themes.map(gameButton)}
            </Controls>
            <div className={gridClasses}>{renderGridTable}</div>
            <AlertModal openModal={finishedGame}>
                <div className={styles.finished}>
                    <h1>{endMessage}</h1>
                    <ButtonWrapper position="center">{themes.map(gameButton)}</ButtonWrapper>
                </div>
            </AlertModal>
        </section>
    );
};

export default Game;
