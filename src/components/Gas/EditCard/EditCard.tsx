import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UtilityStateUnit, FormProps } from "../types";

import { useParams } from "react-router";
import { UtilityFormValues } from "../constants";

import { selectedGas, unitsState } from "..";
import { TextInput, ModalForm } from "../../../reusables";

import styles from "./EditCard.module.scss";
import { editUnit } from "../thunks";

const EditCard: FC = () => {
	const params = useParams();
	const units = useSelector(unitsState);
	const isSelected = useSelector(selectedGas);
	const selected = units.find(unit => unit.id === params.id);

	// const editValues = {
	// 	citire: selected?.citire,
	// 	factura: selected?.factura,
	// 	dataCitire: selected?.dataCitire,
	// };

	// const [gasUnit, setGasUnit] = useState(editValues);
	// const dispatch = useDispatch();

	// const onCancelHandler = () => {
	// 	setGasUnit(editValues);
	// };

	// const getCorrectValues = (value: string) => {
	// 	if (value.includes(",")) return value.replace(",", ".");
	// 	return value;
	// };

	// const checkIfValid = (input: string) => (isNaN(+input) ? "0" : input);

	// const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	if (e.target.name !== "dataCitire" && e.target.value === "") return;

	// 	setGasUnit({
	// 		...gasUnit,
	// 		[e.target.name]: getCorrectValues(e.target.value),
	// 	});
	// };

	// const onSubmitHandler = () => {
	// 	let lastCitire;
	// 	if (units.length === 0) lastCitire = gasUnit.citire;
	// 	lastCitire = units[units.length - 1].citire;
	// 	const newConsum = +gasUnit.citire - +lastCitire;
	// 	const checkNewConsum = newConsum || "0";

	// 	const newGasUnit: UtilityStateUnit = {
	// 		...selected,
	// 		dataCitire: gasUnit.dataCitire,
	// 		citire: checkIfValid(gasUnit.citire),
	// 		factura: checkIfValid(gasUnit.factura),
	// 		consum: checkNewConsum.toString(),
	// 	};

	// 	dispatch(editUnit(newGasUnit));
	// 	setGasUnit(editValues);
	// };

	// const inputs = Object.entries(gasUnit);

	// const renderInputs = () => {
	// 	return (
	// 		<>
	// 			{inputs.map(input => (
	// 				<TextInput
	// 					key={input[0]}
	// 					value={input[1]}
	// 					name={input[0]}
	// 					onChange={onChangeHandler}
	// 				/>
	// 			))}
	// 		</>
	// 	);
	// };

	console.log({ selected, isSelected });

	return (
		<div className={styles.editContainer}>
			{/* <ModalForm
				renderFields={renderInputs}
				onSubmit={onSubmitHandler}
				onCancel={onCancelHandler}
				buttonLabel={UtilityFormValues.FORM_BUTTON_LABEL}
				formWidth={UtilityFormValues.FORM_WIDTH}
				formTitle={UtilityFormValues.FORM_TITLE}
			/> */}
			{selected?.id} <br />
			{isSelected.map(item => item.id)}
		</div>
	);
};

export default EditCard;
