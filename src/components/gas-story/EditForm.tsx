import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { format } from "date-fns";
import { v4 as uuid } from "uuid";

import { postGas } from "./thunks";

import { TextInput, ModalForm } from "../../reusables";
import { GasStateUnit } from "./types";
import { unitsState, selectedGas } from "./selectors";
import { editUnit } from ".";
import { editGas } from "./gasSlice";

const EditForm = () => {
	const units = useSelector(unitsState);
	const selected = useSelector(selectedGas);

	// const initialGasFormValues = {
	// 	citire: "",
	// 	factura: "",
	// 	dataCitire: format(new Date(), "dd/MM/yyyy"),
	// };
	const [gasUnit, setGasUnit] = useState<GasStateUnit>(selected);
	const dispatch = useDispatch();

	const cancelHandler = () => {
		setGasUnit(selected);
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name !== "dataCitire" && e.target.name === "") return;

		setGasUnit({
			...gasUnit,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = () => {
		const lastCitire = units[units.length - 1].citire;
		const newConsum = parseInt(gasUnit.citire) - parseInt(lastCitire);
		const newGasUnit: GasStateUnit = {
			...gasUnit,
		};

		dispatch(editUnit({ id: newGasUnit.id, payload: newGasUnit }));
		setGasUnit(selected);
		dispatch(editGas({ id: newGasUnit.id, edit: false }));
	};

	const inputs = Object.entries(gasUnit);

	const renderInputs = () => {
		return (
			<>
				{inputs.map(input => (
					<TextInput
						key={input[0]}
						value={input[1]}
						name={input[0]}
						onChange={onChangeHandler}
					/>
				))}
			</>
		);
	};

	return (
		<ModalForm
			render={() => renderInputs()}
			onSubmit={onSubmitHandler}
			onCancel={cancelHandler}
			buttonLabel='Adauga citire noua'
			formWidth='25'
			formTitle='Citire Lunara'
		/>
	);
};

export default EditForm;
