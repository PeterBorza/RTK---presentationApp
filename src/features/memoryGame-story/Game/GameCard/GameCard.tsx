import { useCallback } from "react";

import { useMGameRedux } from "../redux/selectors";
import { FlipCard } from "shared-components";

import { toggleFlip, setMatch } from "../redux/memoryGameSlice";
import { GamePhotoData } from "../redux/types";

import classNames from "classnames";
import styles from "./GameCard.module.scss";

interface GameCardProps {
    card: GamePhotoData;
    idx: number;
}

const GameCard = ({ card: { id, frontSrc, isFlipped, match }, idx }: GameCardProps) => {
    const {
        memoryGame: { gamePhotos, currentTheme },
        flippedCards,
        dispatch,
    } = useMGameRedux();

    const cardWrapperClasses = classNames(styles.box, {
        [styles.disabled]: match || isFlipped,
        [styles.faded]: match,
    });
    const cardFrontClasses = classNames(styles.front, styles[`front__${currentTheme}`]);

    const gameHasStarted = flippedCards.length !== 0;

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

    return (
        <div key={`flip-image-${id}`} className={cardWrapperClasses}>
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

export default GameCard;
