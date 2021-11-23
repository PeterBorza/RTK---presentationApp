import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuid } from "uuid";
import { useTime } from "../../hooks";
import { GasFormValues } from "../../app/constants";
import { postGas } from "./thunks";

import { TextInput, ModalForm } from "../../reusables";
import { GasStateUnit, GasFormProps } from "./types";
import { unitsState } from "./selectors";
import { initialGasFormValues } from "./state";

const GasForm: FC = () => {
	const units = useSelector(unitsState);
	const date = useTime("standard");
	const startingValues = {
		...initialGasFormValues,
		dataCitire: date,
	};
	const [gasUnit, setGasUnit] = useState<GasFormProps>(startingValues);
	const dispatch = useDispatch();

	const cancelHandler = () => {
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
		const lastCitire = units[units.length - 1].citire;
		const newConsum = parseInt(gasUnit.citire) - parseInt(lastCitire);
		const checkNewConsum = !isNaN(newConsum) ? newConsum : "0";

		const newGasUnit: GasStateUnit = {
			id: uuid(),
			dataCitire: gasUnit.dataCitire,
			selected: false,
			citire: checkIfValid(gasUnit.citire),
			factura: checkIfValid(gasUnit.factura),
			consum: checkNewConsum.toString(),
			platit: false,
			edit: false,
		};

		dispatch(postGas(newGasUnit));
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
			render={renderInputs}
			onSubmit={onSubmitHandler}
			onCancel={cancelHandler}
			buttonLabel={GasFormValues.FORM_BUTTON_LABEL}
			formWidth={GasFormValues.FORM_WIDTH}
			formTitle={GasFormValues.FORM_TITLE}
		/>
	);
};

export default GasForm;
