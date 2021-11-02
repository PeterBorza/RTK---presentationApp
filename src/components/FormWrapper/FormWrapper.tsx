import React, { useState } from "react";
import Form from "../Form";
import Button from "../../reusables/Button";

import styles from "./FormWrapper.module.scss";

export interface FormWrapProp {
	formWidth: string;
}

const FormWrapper: React.FC<FormWrapProp> = ({ formWidth }) => {
	const [openModal, setIsOpenModal] = useState(false);

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Submitted");
	};

	const onCancelHandler = () => {
		console.log("Canceled");
		setIsOpenModal(false);
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};

	const onOpenHandler = () => {
		console.log("opening form");
		setIsOpenModal(true);
	};

	// const validName =
	// 	input.split("").length > 3 ? "valid" : "please enter a valid name";

	return openModal ? (
		<div className={styles.generalWrapper}>
			<Form onSubmit={onSubmitHandler} width={formWidth}>
				<Form.TextInput
					value={"name"}
					title={"name"}
					onChange={onChangeHandler}
				/>
				<div className={styles.buttons}>
					<Button type='submit' value='Submit' />
					<Button value='Cancel' onClick={onCancelHandler} />
				</div>
			</Form>
		</div>
	) : (
		<Button value='Open Form' onClick={onOpenHandler} />
	);
};

export default FormWrapper;
