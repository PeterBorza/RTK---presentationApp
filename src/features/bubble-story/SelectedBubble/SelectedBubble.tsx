import { Bubble } from "../types";
import { BubbleMessages as msg } from "../constants";

import styles from "./SelectedBubble.module.scss";

interface Props {
    selectedBubble: Omit<Bubble, "selected">;
    isSelected: boolean;
}

const SelectedBubble = ({ selectedBubble, isSelected }: Props) => {
    return (
        <div className={styles.container}>
            {isSelected ? (
                <>
                    <h2>{selectedBubble.id}</h2>
                    <ul>
                        {Object.entries(selectedBubble.cssProps).map(([key, value]) => (
                            <li key={key}>
                                {key}: <span>{value}</span>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <h4>{msg.SELECT}</h4>
            )}
        </div>
    );
};

export default SelectedBubble;
