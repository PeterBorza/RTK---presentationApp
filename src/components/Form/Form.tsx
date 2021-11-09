import React, { FormEvent, PropsWithChildren, ReactNode } from "react";
import Button from "../../reusables/Button";
import styles from "./Form.module.scss";

export interface FormProps {
	onSubmit: (e: FormEvent) => void;
	onCancel: () => void;
	formTitle?: string;
	width?: string;
	render: () => ReactNode;
}

const Form: React.FC<PropsWithChildren<FormProps>> = ({
	onSubmit,
	onCancel,
	formTitle = "Form",
	width = "50",
	render,
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
			<div className={styles.wrapper}>{render && render()}</div>
			<div className={styles.buttons}>
				<Button
					type='submit'
					value='Submit'
					customClass={styles.submit}
				/>
				<Button
					value='Cancel'
					onClick={onCancel}
					customClass={styles.cancel}
				/>
			</div>
		</form>
	);
};

export default Form;
