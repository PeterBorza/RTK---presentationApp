import React, { FormEvent, PropsWithChildren, ReactNode } from "react";
import styles from "./Form.module.scss";

export interface FormProps {
	onSubmit: (e: FormEvent) => void;
	formTitle?: string;
	width?: string;
	children: ReactNode;
}

const Form: React.FC<PropsWithChildren<FormProps>> = ({
	onSubmit,
	formTitle = "Form",
	width = "50",
	children,
}) => {
	const formWidth = {
		width: `${width}%`,
	};
	return (
		<form
			className={styles.container}
			onSubmit={onSubmit}
			style={formWidth}
		>
			<h2>{formTitle}</h2>
			<div className={styles.wrapper}>{children}</div>
		</form>
	);
};

export default Form;
