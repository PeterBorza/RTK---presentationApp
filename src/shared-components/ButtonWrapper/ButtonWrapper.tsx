import styles from "./ButtonWrapper.module.scss";
import classNames from "classnames";

type Props = {
    dark?: boolean;
    position?: "start" | "center" | "end";
};

const ButtonWrapper: React.FC<Props> = ({ children, dark = false, position = "end" }) => {
    const buttonWrapper = classNames(styles.buttonWrapper, [styles[`buttonWrapper--${position}`]], {
        [styles.buttonWrapper__dark]: dark,
    });
    return <div className={buttonWrapper}>{children}</div>;
};

export default ButtonWrapper;
