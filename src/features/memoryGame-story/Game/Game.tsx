import React, { useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MemoryGameMessages as msg } from "../messages";
import { minionGameImages, christmasGameImages } from "../game-images";
import { ImageType } from "utils/my-images";
import { shuffle } from "utils";
import { useWindowSize } from "hooks";

import {
    gamePhotosSelector,
    flippedCardsSelector,
    matchCardsSelector,
    clickCountSelector,
    gameThemeSelector,
} from "../selectors";
import { darkModeSelector } from "app";

import {
    GamePhotoData,
    toggleFlip,
    setMatch,
    incrementCount,
    resetGame,
    gameThemes,
    toggleTheme,
} from "..";

import { Button, FlipCard } from "shared-components";
import GameEnd from "../GameEnd";
import Controls from "../Controls";

import classNames from "classnames";
import styles from "./Game.module.scss";

const MAX_CLICK_COUNT = 26;

const Game = () => {
    const images = useSelector(gamePhotosSelector);
    const flippedCards = useSelector(flippedCardsSelector);
    const matchCards = useSelector(matchCardsSelector);
    const theme = useSelector(gameThemeSelector);
    const count = useSelector(clickCountSelector);
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

    const cardFrontClasses = classNames(styles.front, styles[`front__${theme}`]);
    const containerClasses = classNames(styles.container, styles[`container__${theme}`]);

    const gameHasStarted = flippedCards.length !== 0;
    const finishedGame = matchCards.length === images.length;

    useEffect(() => {
        count > MAX_CLICK_COUNT && dispatch(resetGame(gameThemes[theme]));
    }, [count, dispatch, theme]);

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

    const gameButtons = [
        {
            onClick: () => {
                newGameHandler(minionGameImages);
                dispatch(toggleTheme("minions"));
            },
            value: msg.NEW_MINIONS,
        },
        {
            onClick: () => {
                newGameHandler(christmasGameImages);
                dispatch(toggleTheme("christmas"));
            },
            value: msg.NEW_CHRISTMAS,
        },
    ];

    const renderGameButtons = () =>
        gameButtons.map(button => (
            <Button key={button.value} {...button} className={styles.buttons} />
        ));

    const renderGridTable = useMemo(() => {
        const backContent = (src: ImageType) => {
            return (
                <div className={styles.back}>
                    <img className={styles.game_image} src={src} alt="" />
                </div>
            );
        };

        const renderImages = ({ id, frontSrc, isFlipped, match }: GamePhotoData, idx: number) => {
            const checkIfMatchOrFLipped = !match ? isFlipped : match;
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

    return (
        <section className={containerClasses}>
            {!finishedGame ? (
                <>
                    <Controls count={count} renderButtons={renderGameButtons} dark={darkMode} />
                    <div className={gridClasses}>{renderGridTable}</div>
                </>
            ) : (
                <GameEnd
                    count={count}
                    message={msg.CONGRATS}
                    onClick={() => newGameHandler(gameThemes[theme])}
                    buttonLabel={msg.NEW_GAME}
                />
            )}
        </section>
    );
};

export default Game;
