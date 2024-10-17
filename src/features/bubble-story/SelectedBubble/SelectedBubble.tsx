import { Bubble } from "../types";
import { BubbleMessages as msg } from "../constants";

import styles from "./SelectedBubble.module.scss";

interface Props {
  selectedBubble: Bubble | null;
}

const SelectedBubble = ({ selectedBubble }: Props) => {
  return (
    <div className={styles.container}>
      {selectedBubble ? (
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
