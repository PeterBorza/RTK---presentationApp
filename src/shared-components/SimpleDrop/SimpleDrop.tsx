import { useState, useRef, FC } from "react";
import { useOnClickOutside } from "../../hooks";

import classNames from "classnames";
import styles from "./SimpleDrop.module.scss";

export interface DropDownProps {
    title?: string;
    contentStyle?: string | null;
    height: "small" | "medium" | "large" | "xxl";
}

const SimpleDrop: FC<DropDownProps> = ({ children, title = "Click", contentStyle, height }) => {
    const [drop, setDrop] = useState<boolean>(false);
    const headerRef = useRef(null);
    const dropDownRef = useRef(null);

    const handleClick = () => {
        setDrop(!drop);
    };

    useOnClickOutside(headerRef, () => setDrop(false));
    const classes = classNames(
        styles.content,
        styles[`content__${height}`],
        {
            [styles["content__drop"]]: drop,
            [styles["white-bg"]]: !contentStyle,
        },
        contentStyle,
    );

    const headerClasses = classNames(styles.header, [styles[height]]);

    const containerClasses = classNames(styles["dropdown-container"], {
        [styles["dropdown-container__collapsed"]]: !drop,
    });

    return (
        <div className={containerClasses} ref={dropDownRef}>
            <div className={headerClasses} onClick={handleClick} ref={headerRef}>
                <h3>{title}</h3>
            </div>
            <div className={classes}>{children}</div>
        </div>
    );
};

export default SimpleDrop;
