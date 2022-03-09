import React from "react";

import styles from "./Panel.module.scss";

interface PanelProps {
    icons: React.ReactNode;
    renderButtons: () => React.ReactNode;
}

const Panel = ({ icons, renderButtons }: PanelProps) => {
    return (
        <div className={styles.panelWrapper}>
            <div className={styles.panelWrapper__icons}>{icons}</div>
            <div className={styles.panelWrapper__buttons}>{renderButtons()}</div>
        </div>
    );
};

export default Panel;
