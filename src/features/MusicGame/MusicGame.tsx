import React from "react";
import styles from "./MusicGame.module.scss";
import { featureFlags } from "flags";
import { useSelector } from "react-redux";
import { musicGameState, shuffledSongsState } from "./redux/selectors";

const MusicGame = () => {
    const music = useSelector(musicGameState);
    const songs = useSelector(shuffledSongsState);
    console.log(music, songs);

    if (!featureFlags.musicGame) return <div>opening soon</div>;
    return (
        <div className={styles.musicGameWrapper}>
            {music.players.map(player => (
                <div key={player.id}>{player.playerName}</div>
            ))}
        </div>
    );
};

export default MusicGame;
