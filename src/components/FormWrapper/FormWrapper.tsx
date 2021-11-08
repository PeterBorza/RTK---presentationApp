import React, { ReactNode, useState, FormEvent } from "react";
import Form from "../Form";
import Button from "../../reusables/Button";

import styles from "./FormWrapper.module.scss";
export interface FormWrapProp {
	formWidth?: string;
	render?: () => ReactNode;
	onSubmit?: (e: FormEvent) => void;
	onCancel?: () => void;
	buttonLabel?: string;
}

const FormWrapper: React.FC<FormWrapProp> = ({
	formWidth,
	render,
	onSubmit,
	onCancel,
	buttonLabel = "FORM",
}) => {
	const [openModal, setIsOpenModal] = useState(false);

	const onCancelHandler = () => {
		console.log("Canceled");
		onCancel && onCancel();
		setIsOpenModal(false);
	};

	const onOpenHandler = () => {
		console.log("opening form");
		setIsOpenModal(true);
	};

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		onSubmit && onSubmit(e);
		setIsOpenModal(false);
	};

	// const validName =
	// 	input.split("").length > 3 ? "valid" : "please enter a valid name";

	return openModal ? (
		<div className={styles.generalWrapper}>
			<Form
				onSubmit={submitHandler}
				width={formWidth}
				render={() => render && render()}
				onCancel={onCancelHandler}
			></Form>
		</div>
	) : (
		<div className={styles.activateForm}>
			<Button value={buttonLabel} onClick={onOpenHandler} />
		</div>
	);
};

export default FormWrapper;
