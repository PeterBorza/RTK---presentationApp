import { CSSProperties, FC } from "react";

import styles from "./Bubble.module.scss";
import { Bubble as Props } from "../types";
import classNames from "classnames";

interface BubbleProps extends Props {
	onClick: () => void;
}

const Bubble: FC<BubbleProps> = ({ onClick, id, selected, cssProps }) => {
	const { left, top, size, opacity } = cssProps;
	const bubbleClassNames = classNames(styles.bubbleStyle, {
		[styles.bubbleStyle__active]: selected,
		[styles.withImage]: false,
	});

	const inlineStyles: CSSProperties = {
		left,
		top,
		width: size,
		opacity,
	};

	return (
		<div
			className={bubbleClassNames}
			onClick={onClick}
			style={inlineStyles}
		>
			<span className={styles.bubbleStyle__span}>{id}</span>
		</div>
	);
};

export default Bubble;
