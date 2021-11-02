import styles from "./Bubble.module.scss";
import { Bubble as Props } from "../bubbleSlice";
import classNames from "classnames";
import React from "react";

interface BubbleProps {
	onClick: () => void;
	props: Props;
}

const Bubble: React.FC<BubbleProps> = ({ onClick, props }): JSX.Element => {
	const { id, selected, cssProps } = props;
	const { left, top, size, opacity } = cssProps;
	const bubbleClassNames = classNames(styles.bubbleStyle, {
		[styles.active]: selected,
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
