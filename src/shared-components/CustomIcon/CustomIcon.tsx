import classNames from "classnames";
import styles from "./CustomIcon.module.scss";

// TODO combine IconType from "utils" as IconTypeProp when more icons are custom styled

type IconTypeProp = "disabled" | "check" | "danger" | "delete" | "edit" | "confirm" | "cancel";

export type IconProps = {
    onClick?: () => void;
    title?: string;
    type?: IconTypeProp;
    icon: JSX.Element;
    isDisabled?: boolean;
    size?: "small" | "medium" | "large" | "xxl";
};

const CustomIcon = ({
    onClick,
    title,
    type,
    icon,
    isDisabled = false,
    size = "small",
}: IconProps) => {
    const iconStyles = classNames(
        styles.icon,
        type && styles[`icon__${type}`],
        [styles[`icon__${size}`]],
        {
            [styles["icon__disabled"]]: isDisabled,
        },
    );
    return (
        <span
            className={iconStyles}
            onClick={() => onClick && !isDisabled && onClick()}
            title={title}
        >
            {icon}
        </span>
    );
};

export default CustomIcon;
