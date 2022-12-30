import React, { useCallback, useMemo, useEffect } from "react";

import { MemoryGameMessages as msg } from "../messages";
import { shuffle } from "utils";
import { GameTheme, GameThemeType } from "../types";

import { useMGameRedux } from "../selectors";
import { useAppRedux } from "app";

import { GamePhotoData, toggleFlip, setMatch, resetGame, setTheme, setGameFinished } from "..";

import { AlertModal, Button, ButtonWrapper, FlipCard } from "shared-components";
import Controls from "../Controls";

import classNames from "classnames";
import styles from "./Game.module.scss";

const Game = () => {
    const { isDarkMode, dispatch } = useAppRedux();
    const {
        memoryGame: { gamePhotos, currentTheme, maxCount, themes, currentCount: count },
        flippedCards,
        isGameFinished,
    } = useMGameRedux();

    const cardWrapperClasses = (isFlipped: boolean, match: boolean) =>
        classNames(styles.box, {
            [styles.disabled]: isFlipped,
            [styles.faded]: match,
        });

    const cardFrontClasses = classNames(styles.front, styles[`front__${currentTheme}`]);
    const containerClasses = classNames(styles.container, styles[`container__${currentTheme}`]);

    const gameHasStarted = flippedCards.length !== 0;

    useEffect(() => {
        count > maxCount && dispatch(resetGame(gamePhotos));
    }, [count, dispatch, maxCount, gamePhotos]);

    useEffect(() => {
        gamePhotos.every(photo => photo.match === true) && dispatch(setGameFinished(true));
    }, [dispatch, gamePhotos]);

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
                dispatch(setTheme(theme));
            }
        },
        [dispatch, themes],
    );

    const gameButton = ({ theme = currentTheme! }: Partial<GameThemeType>) => (
        <Button key={theme} onClick={() => newGameHandler(theme)} value={theme} />
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
                        toggleFlip={() => flipCardHandler(gamePhotos[idx])}
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
        return gamePhotos.map(renderImages);
    }, [gamePhotos, cardFrontClasses, flipCardHandler]);

    const endMessage = msg.CONGRATS.replace("x", `${count}`);

    return (
        <section className={containerClasses}>
            <Controls label={msg.SCORE} count={count} dark={isDarkMode}>
                {themes.map(gameButton)}
            </Controls>
            <div className={styles.grid}>{renderGridTable}</div>
            <AlertModal openModal={isGameFinished}>
                <div className={styles.finished}>
                    <h1>{endMessage}</h1>
                    <ButtonWrapper position="end">
                        {themes.map(gameButton)}
                        <Button
                            value={msg.RETURN_LINK}
                            onClick={() => dispatch(setGameFinished(false))}
                        />
                    </ButtonWrapper>
                </div>
            </AlertModal>
        </section>
    );
};

export default Game;
