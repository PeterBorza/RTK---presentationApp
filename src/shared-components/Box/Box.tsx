import React from "react";
import { useHover } from "../../hooks";

import styles from "./Box.module.scss";

const Box = () => {
  const hoverRef = React.useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <div data-test-id="container" className={styles.boxWrapper} ref={hoverRef}>
      {isHover ? (
        <div data-test-id="div1" className={styles.one}>
          <span>1</span>
        </div>
      ) : (
        <div data-test-id="div2" className={styles.two}>
          <span>2</span>
        </div>
      )}
    </div>
  );
};

export default Box;
