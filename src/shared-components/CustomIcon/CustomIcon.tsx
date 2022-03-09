import React from "react";

import classNames from "classnames";
import styles from "./CustomIcon.module.scss";

export type IconProps = {
    onClick?: () => void | undefined;
    title: string;
    icon: React.ReactNode;
};

const CustomIcon = ({ onClick, title, icon }: IconProps) => {
    const iconStyles = classNames(styles.icon, styles[`icon__${title}`]);
    return (
        <span className={iconStyles} onClick={onClick} title={title}>
            {icon}
        </span>
    );
};

export default CustomIcon;
