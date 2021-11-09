import React, { ReactNode, useState, FormEvent } from "react";
import Form from ".";
import Button from "../../reusables/Button";

import BlackModal from "../../reusables/BlackModal";
export interface FormWrapProps {
	formWidth?: string;
	render?: () => ReactNode;
	onSubmit?: (e: FormEvent) => void;
	onCancel?: () => void;
	buttonLabel?: string;
	formTitle?: string;
}

const ModalForm: React.FC<FormWrapProps> = ({
	formWidth,
	render,
	onSubmit,
	onCancel,
	buttonLabel = "FORM",
	formTitle,
}) => {
	const [openModal, setIsOpenModal] = useState(false);

	const onCancelHandler = () => {
		onCancel && onCancel();
		setIsOpenModal(false);
	};

	const onOpenHandler = () => {
		setIsOpenModal(true);
	};

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		onSubmit && onSubmit(e);
		setIsOpenModal(false);
	};

	const renderForm = () => {
		return (
			<Form
				onSubmit={submitHandler}
				width={formWidth}
				render={() => render && render()}
				onCancel={onCancelHandler}
				formTitle={formTitle}
			/>
		);
	};

	return (
		<>
			<BlackModal render={() => renderForm()} isOpen={openModal} />
			<Button value={buttonLabel} onClick={onOpenHandler} />
		</>
	);
};

export default ModalForm;
