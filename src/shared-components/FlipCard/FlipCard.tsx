import classNames from "classnames";
import styles from "./FlipCard.module.scss";
const { flip_box, inner, turn } = styles;

type Props = {
    flipped: boolean;
    toggleFlip?: () => void;
    children?: React.ReactNode;
};

const FlipCard = ({ children, flipped, toggleFlip }: Props) => {
    const classes = classNames(inner, { [turn]: flipped });
    return (
        <div className={flip_box} onClick={toggleFlip}>
            <div className={classes}>{children}</div>
        </div>
    );
};

export default FlipCard;
