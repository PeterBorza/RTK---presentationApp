import classNames from "classnames";
import styles from "./CustomIcon.module.scss";

export type IconProps = {
    onClick?: () => void;
    title: string;
    icon: JSX.Element;
    isDisabled?: boolean;
    size?: "small" | "medium" | "large" | "xxl";
};

const CustomIcon = ({ onClick, title, icon, isDisabled = false, size = "small" }: IconProps) => {
    const iconStyles = classNames(
        styles.icon,
        styles[`icon__${title}`],
        [styles[`icon__${size}`]],
        {
            [styles["icon__disabled"]]: isDisabled,
        },
    );
    return (
        <span className={iconStyles} onClick={onClick} title={title}>
            {icon}
        </span>
    );
};

export default CustomIcon;
