import React from "react";
import styles from "./MusicGame.module.scss";
import { featureFlags } from "flags";

const MusicGame = () => {
    return (
        <div className={styles.musicGameWrapper}>
            {featureFlags.musicGame ? "working on it" : "opening soon"}
        </div>
    );
};

export default MusicGame;
