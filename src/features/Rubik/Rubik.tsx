import { FC, useRef, useEffect, useState } from "react";
import { Button } from "../../shared-components";

import styles from "./Rubik.module.scss";

enum RubikDirections {
    UP = "up",
    DOWN = "down",
    FRONT = "front",
}

const RUBIK_SIDES = 6;

const moves = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180];

const Rubik: FC = () => {
    const wrapper = useRef<HTMLDivElement | null>(null);
    const [moveX, setMoveX] = useState("");

    const moveRandomly = Math.floor(Math.random() * moves.length);

    useEffect(() => {
        if (wrapper.current) wrapper.current.style.transform += moveX;
        setMoveX("");
    }, [moveX]);

    const handleLeftRight = () => {
        setMoveX(`rotateX(${moves[moveRandomly]}deg)`);
    };
    const handleUpDown = () => {
        setMoveX(`rotateY(${moves[moveRandomly]}deg)`);
    };
    const handleFront = () => {
        setMoveX(`rotateZ(${moves[moveRandomly]}deg)`);
    };

    const sides = Array(RUBIK_SIDES)
        .fill(null)
        .map((_, i) => <div key={`side${i}`} className={styles.rubikSide} />);

    return (
        <div className={styles.rubikContainer}>
            <div className={styles.buttonsWrapper}>
                <Button onClick={handleUpDown} value={RubikDirections.DOWN} />
                <Button onClick={handleLeftRight} value={RubikDirections.UP} />
                <Button onClick={handleFront} value={RubikDirections.FRONT} />
            </div>
            <div ref={wrapper} className={styles.rubikWrapper}>
                {sides}
            </div>
        </div>
    );
};

export default Rubik;
