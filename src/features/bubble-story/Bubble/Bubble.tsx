import { CSSProperties, FC } from "react";

import { Bubble as Props } from "../types";
import { randomize } from "../../../utils";

import styles from "./Bubble.module.scss";
import classNames from "classnames";

interface BubbleProps extends Props {
	onClick: () => void;
	title: string;
}

const RANDOMIZER = 1000000;

const Bubble: FC<BubbleProps> = ({
	onClick,
	title,
	id,
	selected,
	cssProps,
}) => {
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
		backgroundColor: `${randomize(RANDOMIZER)}`,
	};

	return (
		<div
			className={bubbleClassNames}
			onClick={onClick}
			style={inlineStyles}
			title={title}
		>
			<span className={styles.bubbleStyle__span}>{id}</span>
		</div>
	);
};

export default Bubble;
