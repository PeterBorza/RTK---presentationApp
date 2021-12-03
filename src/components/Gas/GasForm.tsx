import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuid } from "uuid";
import { useTime } from "../../hooks";
import { UtilityFormValues } from "./constants";
import { postUtility } from "./thunks";

import { TextInput, ModalForm } from "../../reusables";
import { UtilityStateUnit, FormProps } from "./types";
import { unitsState } from "./selectors";
import { initialFormValues } from "./state";

const GasForm: FC = () => {
	const units = useSelector(unitsState);
	const date = useTime("standard");
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

	const checkIfValid = (input: string) => {
		if (isNaN(parseInt(input))) return "0";
		return input;
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name !== "dataCitire" && e.target.value === "") return;

		setGasUnit({
			...gasUnit,
			[e.target.name]: getCorrectValues(e.target.value),
		});
	};

	const onSubmitHandler = () => {
		let lastCitire;
		if (units.length === 0) {
			lastCitire = gasUnit.citire;
		}
		lastCitire = units[units.length - 1].citire;
		const newConsum = parseInt(gasUnit.citire) - parseInt(lastCitire);
		const checkNewConsum = !isNaN(newConsum) ? newConsum : "0";

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
