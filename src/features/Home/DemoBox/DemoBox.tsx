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
    const demoBoxClasses = classNames(styles.demoBox, {
        [styles.demoBox__dark]: darkMode,
    });
    return (
        <div className={demoBoxClasses}>
            <span className={classes}>
                <GradientText animatedText={componentName} />
            </span>
            {children}
        </div>
    );
};

export default DemoBox;
