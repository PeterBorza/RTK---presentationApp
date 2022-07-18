import { FC, ReactNode } from "react";

// import classNames from "classnames";
import styles from "./Panel.module.scss";

interface PanelProps {
    renderButtons: ReactNode;
}

const Panel: FC<PanelProps> = ({ children, renderButtons }) => {
    return (
        <div className={styles.panelWrapper}>
            <div className={styles.panelWrapper__icons}>{children}</div>
            <div className={styles.panelWrapper__buttons}>{renderButtons}</div>
        </div>
    );
};

export default Panel;
