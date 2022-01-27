import { FC, ReactNode } from "react";

import classNames from "classnames";
import styles from "./CustomIcon.module.scss";

export type IconProps = {
    onClick?: () => void | undefined;
    title: string;
    icon: ReactNode;
};

const CustomIcon: FC<IconProps> = ({ onClick, title, icon }) => {
    const iconStyles = classNames(styles.icon, styles[`icon__${title}`]);
    return (
        <span className={iconStyles} onClick={onClick} title={title}>
            {icon}
        </span>
    );
};

export default CustomIcon;
