import { iconCollection } from "./svg-icons";
import { SvgIconSize, SvgIconType } from "./types";

import styles from "./Icon.module.scss";
import classNames from "classnames";

interface IconProps {
    darkMode?: boolean;
    svgIcon: SvgIconType;
    styled?: boolean;
    size?: SvgIconSize;
    isDisabled?: boolean;
    onClick: () => void;
}

const Icon = ({
    svgIcon,
    onClick,
    darkMode = false,
    styled = false,
    size = "medium",
    isDisabled = false,
}: IconProps) => {
    const svgClasses = classNames(styles.svgStyle, [styles[`svgStyle__${size}`]], {
        [styles.svgStyle__dark]: darkMode,
        [styles.svgStyle__bordered]: size !== "mini",
        [styles.svgStyle__disabled]: isDisabled,
    });
    return (
        <button
            type="button"
            aria-label={`${styled ? "styled-" : ""}icon-button`}
            className={styles ? svgClasses : styles[`svgStyle__${size}`]}
            disabled={isDisabled}
            onClick={onClick}
            tabIndex={0}
        >
            {iconCollection[svgIcon]}
        </button>
    );
};

export default Icon;
