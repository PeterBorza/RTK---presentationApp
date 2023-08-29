import React, { ReactNode } from "react";

import classNames from "classnames";
import styles from "./DemoBox.module.scss";
import { GradientText } from "shared-components";

interface DemoBoxProps {
    componentName?: string;
    darkMode?: boolean;
    children?: ReactNode;
}

// TODO move this to shared components once it's done

const DemoBox = ({ children, componentName, darkMode = true }: DemoBoxProps) => {
    const classes = classNames(styles.demoBox__title, {
        [styles.demoBox__title__dark]: darkMode,
    });
    const demoBoxClasses = classNames(styles.demoBox, {
        [styles.demoBox__dark]: darkMode,
    });
    return (
        <div className={demoBoxClasses}>
            <span className={classes}>
                <GradientText animatedText={componentName || ""} size={25} />
            </span>
            {children}
        </div>
    );
};

export default DemoBox;
