import React, { FC } from "react";

import classNames from "classnames";
import styles from "./DemoBox.module.scss";
import { GradientText } from "shared-components";

interface DemoBoxProps {
    componentName?: string;
    darkMode?: boolean;
}

const DemoBox: FC<DemoBoxProps> = ({ children, componentName, darkMode = true }) => {
    const classes = classNames(styles.demoBox__title, {
        [styles.demoBox__title__dark]: darkMode,
    });
    return (
        <div className={styles.demoBox}>
            <span className={classes}>
                <GradientText animatedText={componentName} />
            </span>
            {children}
        </div>
    );
};

export default DemoBox;
