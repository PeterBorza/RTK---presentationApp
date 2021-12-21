import { FC } from "react";
import { Bubble } from "../types";

import styles from "./SelectedBubble.module.scss";

interface Props {
	selected: Omit<Bubble, "selected">;
}

const SelectedBubble: FC<Props> = ({ selected }) => {
	return (
		<div className={styles.container}>
			<h2>{selected.id}</h2>
			<ul>
				{Object.entries(selected.cssProps).map(label => (
					<li key={label[0]}>
						{label[0]}: <span>{label[1]}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SelectedBubble;
