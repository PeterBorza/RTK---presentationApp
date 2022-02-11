import { FC, useRef } from "react";
import { useHover } from "../../hooks";

import styles from "./Box.module.scss";

const Box: FC = () => {
    const hoverRef = useRef(null);
    const isHover = useHover(hoverRef);

    return (
        <div className={styles.boxWrapper} ref={hoverRef}>
            {isHover ? <div className={styles.one}>1</div> : <div className={styles.two}>2</div>}
        </div>
    );
};

export default Box;
