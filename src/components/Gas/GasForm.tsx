import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuid } from "uuid";
import { postUtility } from "./thunks";

import { TextInput, ModalForm } from "../../reusables";
import { UtilityStateUnit, FormProps, UtilityFormValues } from "../Utilities";
import { unitsState } from "./selectors";

const GasForm: FC<FormProps> = ({ ...initialFormValues }) => {
	const units = useSelector(unitsState);
	const date = new Date().toLocaleDateString();

	const startingValues = {
		...initialFormValues,
		dataCitire: date,
	};
	const [gasUnit, setGasUnit] = useState<FormProps>(startingValues);
	const dispatch = useDispatch();

	const onCancelHandler = () => {
		setGasUnit(startingValues);
	};

	const getCorrectValues = (value: string) => {
		if (value.includes(",")) return value.replace(",", ".");
		return value;
	};

	const checkIfValid = (input: string) => (isNaN(+input) ? "0" : input);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name !== "dataCitire" && e.target.value === "") return;

		setGasUnit({
			...gasUnit,
			[e.target.name]: getCorrectValues(e.target.value),
		});
	};

	const onSubmitHandler = () => {
		let lastCitire;
		if (units.length === 0) lastCitire = gasUnit.citire;
		lastCitire = units[units.length - 1].citire;
		const newConsum = +gasUnit.citire - +lastCitire;
		const checkNewConsum = newConsum || "0";

		const newGasUnit: UtilityStateUnit = {
			id: uuid(),
			dataCitire: gasUnit.dataCitire,
			selected: false,
			citire: checkIfValid(gasUnit.citire),
			factura: checkIfValid(gasUnit.factura),
			consum: checkNewConsum.toString(),
			platit: false,
			edit: false,
		};

		dispatch(postUtility(newGasUnit));
		setGasUnit(startingValues);
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
			renderFields={renderInputs}
			onSubmit={onSubmitHandler}
			onCancel={onCancelHandler}
			buttonLabel={UtilityFormValues.FORM_BUTTON_LABEL}
			formWidth={UtilityFormValues.FORM_WIDTH}
			formTitle={UtilityFormValues.FORM_TITLE}
		/>
	);
};

export default GasForm;
