import { FC } from "react";
import { Bubble } from "../types";
import { BubbleMessages as msg } from "../constants";

import styles from "./SelectedBubble.module.scss";

interface Props {
    selectedBubble: Omit<Bubble, "selected">;
    isSelected: boolean;
}

const SelectedBubble: FC<Props> = ({ selectedBubble, isSelected }) => {
    return (
        <div className={styles.container}>
            {isSelected ? (
                <>
                    {" "}
                    <h2>{selectedBubble.id}</h2>
                    <ul>
                        {Object.entries(selectedBubble.cssProps).map(label => (
                            <li key={label[0]}>
                                {label[0]}: <span>{label[1]}</span>
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
