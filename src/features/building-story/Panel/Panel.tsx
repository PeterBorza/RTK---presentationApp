import { FC, ReactNode } from "react";

// import classNames from "classnames";
import styles from "./Panel.module.scss";

interface PanelProps {
    icons: ReactNode;
    renderButtons: () => ReactNode;
}

const Panel: FC<PanelProps> = ({ icons, renderButtons }) => {
    return (
        <div className={styles.panelWrapper}>
            <div className={styles.panelWrapper__icons}>{icons}</div>
            <div className={styles.panelWrapper__buttons}>
                {renderButtons()}
            </div>
        </div>
    );
};

export default Panel;
