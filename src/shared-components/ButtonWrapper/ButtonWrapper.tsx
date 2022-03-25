import styles from "./ButtonWrapper.module.scss";
import classNames from "classnames";

type Props = {
    renderButtons: () => React.ReactNode;
    dark?: boolean;
};

const ButtonWrapper = ({ renderButtons, dark = false }: Props) => {
    const buttonWrapper = classNames(styles.buttonWrapper, {
        [styles.buttonWrapper__dark]: dark,
    });
    return <div className={buttonWrapper}>{renderButtons()}</div>;
};

export default ButtonWrapper;
