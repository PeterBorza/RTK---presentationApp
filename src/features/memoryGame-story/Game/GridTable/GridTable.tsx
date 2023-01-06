import React from "react";

import GameCard from "../GameCard";
import { GamePhotoData } from "../redux/types";

import styles from "./GridTable.module.scss";

interface GridTableProps {
    gamePhotos: GamePhotoData[];
}

const GridTable = ({ gamePhotos }: GridTableProps) => {
    return (
        <div className={styles.grid}>
            {gamePhotos.map((card, idx) => (
                <GameCard key={card.id} card={card} idx={idx} />
            ))}
        </div>
    );
};

export default GridTable;
