import React, { ReactNode, useState, FormEvent } from "react";
import { Form } from ".";
import { Button, FadedModal } from "..";
export interface FormWrapProps {
	formWidth: "small" | "medium" | "large" | "xxl";
	renderFields: () => ReactNode;
	onSubmit: (e: FormEvent) => void;
	onCancel: () => void;
	buttonLabel?: string;
	formTitle?: string;
}

const ModalForm: React.FC<FormWrapProps> = ({
	formWidth,
	renderFields,
	onSubmit,
	onCancel,
	buttonLabel = "FORM",
	formTitle,
}) => {
	const [openModal, setIsOpenModal] = useState(false);

	const onCancelHandler = () => {
		onCancel();
		setIsOpenModal(false);
	};

	const onOpenHandler = () => {
		setIsOpenModal(true);
	};

	const submitHandler = (e: FormEvent) => {
		e.preventDefault();
		onSubmit(e);
		setIsOpenModal(false);
	};

	return (
		<>
			<Button value={buttonLabel} onClick={onOpenHandler} />
			<FadedModal isOpen={openModal}>
				<Form
					onSubmit={submitHandler}
					width={formWidth}
					renderFields={renderFields}
					onCancel={onCancelHandler}
					formTitle={formTitle}
				/>
			</FadedModal>
		</>
	);
};

export default ModalForm;
