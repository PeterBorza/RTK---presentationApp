import React from "react";
import styles from "./SlideText.module.scss";

interface Props {
	text?: string;
}

const SlideText: React.FC<Props> = ({
	text = "This component is for animated text",
}) => {
	return (
		<h1 className={styles.title}>
			<span className={styles["title__span"]}>{text}</span>
		</h1>
	);
};

export default SlideText;
