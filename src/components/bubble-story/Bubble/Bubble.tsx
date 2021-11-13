import { FC } from "react";

import styles from "./Bubble.module.scss";
import { Bubble as Props } from "../types";
import classNames from "classnames";

interface BubbleProps {
	onClick: () => void;
}

const Bubble: FC<BubbleProps & Props> = ({
	onClick,
	id,
	selected,
	cssProps,
}) => {
	const { left, top, size, opacity } = cssProps;
	const bubbleClassNames = classNames(styles.bubbleStyle, {
		[styles.active]: selected,
		[styles.withImage]: false,
	});

	const inlineStyles = {
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
			{id}
		</div>
	);
};

export default Bubble;
