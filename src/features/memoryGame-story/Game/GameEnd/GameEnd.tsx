import React from "react";

import { MemoryGameMessages as msg } from "../redux/messages";
import { AlertModal } from "shared-components";

import styles from "./GameEnd.module.scss";

interface GameEndProps {
  count: number;
  isGameFinished: boolean;
  children?: React.ReactNode;
}

const GameEnd = ({ children, count, isGameFinished }: GameEndProps) => {
  const endMessage = msg.CONGRATS.replace("x", String(count));

  if (!isGameFinished) return null;
  return (
    <AlertModal openModal={isGameFinished}>
      <div className={styles.finished}>
        <h1>{endMessage}</h1>
        {children}
      </div>
    </AlertModal>
  );
};

export default GameEnd;
