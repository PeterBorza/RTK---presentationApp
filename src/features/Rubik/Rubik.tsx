import { FC, useRef, useEffect, useState } from "react";
import styles from "./Rubik.module.scss";

const size = "125px";
const transforms = () => [
    `translateZ(-${size})`,
    `translateX(100%) rotateY(270deg) translateZ(${size})`,
    `translateX(-100%) rotateY(90deg) translateZ(${size})`,
    `rotateX(90deg) translateZ(${size})`,
    ` rotateX(270deg) translateZ(${size})`,
    ` translateZ(${size})`,
];

const Rubik: FC = () => {
    const wrapper = useRef<HTMLDivElement | null>(null);
    const [moveX, setMoveX] = useState("");

    useEffect(() => {
        if (wrapper.current) wrapper.current.style.transform += moveX;
        setMoveX("");
    }, [moveX]);

    const handleLeftRight = () => {
        setMoveX(`rotateX(90deg)`);
    };
    const handleUpDown = () => {
        setMoveX(`rotateY(90deg)`);
    };
    const handleFront = () => {
        setMoveX(`rotateZ(90deg)`);
    };

    return (
        <div className={styles.rubikContainer}>
            <div className={styles.buttonsWrapper}>
                <button onClick={handleUpDown} title="right">
                    right
                </button>
                <button onClick={handleLeftRight} title="up">
                    up
                </button>
                <button onClick={handleFront} title="front">
                    front
                </button>
            </div>
            <div ref={wrapper} className={styles.rubikWrapper}>
                {transforms().map((side, i) => (
                    <div
                        key={`side${i}`}
                        className={styles.rubikSide}
                        style={{ transform: side }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Rubik;
