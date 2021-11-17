import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { format } from "date-fns";
import { v4 as uuid } from "uuid";

import { postGas } from "./thunks";

import Form, { ModalForm } from "../../reusables/Form";
import { GasStateItem, GasFormProps } from "./gasSlice";
import { unitsState, selectedGas } from "./selectors";

const EditForm = () => {
	const units = useSelector(unitsState);
	const selected = useSelector(selectedGas);
	console.log(selected);

	const initialGasFormValues = {
		citire: "",
		factura: "",
		dataCitire: format(new Date(), "dd/MM/yyyy"),
	};
	const [gasUnit, setGasUnit] = useState<GasFormProps>(initialGasFormValues);
	const dispatch = useDispatch();

	const cancelHandler = () => {
		setGasUnit(initialGasFormValues);
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
		const newGasUnit: GasStateItem = {
			...gasUnit,
			consum: newConsum.toString(),
			id: uuid(),
			selected: false,
			platit: false,
		};

		dispatch(postGas(newGasUnit));
		setGasUnit(initialGasFormValues);
	};

	const inputs = Object.entries(gasUnit);

	const renderInputs = () => {
		return (
			<>
				{inputs.map(input => (
					<Form.TextInput
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
