import { RootState } from "app";
import { shuffle } from "utils";

export const musicGameState = ({ musicGame }: RootState) => musicGame;

export const shuffledSongsState = (state: RootState) => {
    const songs = state.musicGame.players.map(player => player.chosenSong);

    return shuffle(songs);
};
