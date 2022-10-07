import classNames from "classnames";
import styles from "./FlipCard.module.scss";
const { flip_box, inner, turn } = styles;

type Props = {
    flipped: boolean;
    toggleFlip?: () => void;
};

const FlipCard: React.FC<Props> = ({ children, flipped, toggleFlip }) => {
    const classes = classNames(inner, { [turn]: flipped });
    return (
        <div className={flip_box} onClick={toggleFlip}>
            <div className={classes}>{children}</div>
        </div>
    );
};

export default FlipCard;
