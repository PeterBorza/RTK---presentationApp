import { useCallback, useEffect } from "react";

import { MemoryGameMessages as msg } from "./redux/messages";
import { useAppRedux } from "app";
import { shuffle } from "utils";
import { Button, FadeOnScroll } from "shared-components";

import { GameTheme } from "./redux/types";
import { useMGameRedux } from "./redux/selectors";

import { resetGame, setTheme, setGameFinished } from "./redux/memoryGameSlice";
import Controls from "./Controls";
import GridTable from "./GridTable";
import GameEnd from "./GameEnd";
import GameButtons from "./GameButtons";

import classNames from "classnames";
import styles from "./Game.module.scss";

const Game = () => {
  const { isDarkMode, dispatch } = useAppRedux();
  const {
    memoryGame: { gamePhotos, currentTheme, maxCount, themes, currentCount: count },
    isGameFinished,
  } = useMGameRedux();

  const themeContainerClasses = classNames(styles.container, styles[`container__${currentTheme}`]);

  useEffect(() => {
    count > maxCount && dispatch(resetGame(gamePhotos));
  }, [count, dispatch, maxCount, gamePhotos]);

  useEffect(() => {
    gamePhotos.every(photo => photo.match === true) && dispatch(setGameFinished(true));
  }, [dispatch, gamePhotos]);

  const newGameHandler = useCallback(
    (gameTheme: GameTheme) => {
      const { images, theme } = themes.find(t => t.theme === gameTheme)!;
      if (theme && images) {
        const shuffled = shuffle(images);
        setTimeout(() => {
          dispatch(setTheme(theme));
          dispatch(resetGame(shuffled));
        }, 500);
      }
    },
    [dispatch, themes],
  );

  return (
    <FadeOnScroll>
      <section className={themeContainerClasses}>
        <Controls label={msg.SCORE} count={count}>
          <GameButtons
            themes={themes}
            onNewGame={theme => newGameHandler(theme)}
            dark={isDarkMode}
          />
        </Controls>
        <GridTable gamePhotos={gamePhotos} />
        <GameEnd count={count} isGameFinished={isGameFinished}>
          <GameButtons themes={themes} onNewGame={theme => newGameHandler(theme)} dark={isDarkMode}>
            <Button value={msg.RETURN_LINK} onClick={() => dispatch(setGameFinished(false))} />
          </GameButtons>
        </GameEnd>
      </section>
    </FadeOnScroll>
  );
};

export default Game;
