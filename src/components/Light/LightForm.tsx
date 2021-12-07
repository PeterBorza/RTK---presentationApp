import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuid } from "uuid";
import { format } from "date-fns";
import { postUtility } from "./thunks";

import { TextInput, ModalForm } from "../../reusables";
import { UtilityStateUnit, FormProps, UtilityFormValues } from "../Utilities";
import { initialFormValues } from "./state";
import { unitsState } from "./selectors";

const LightForm: FC = () => {
	const units = useSelector(unitsState);
	const date = format(new Date(), "dd/MM/yyyy");

	const startingValues = {
		...initialFormValues,
		dataCitire: date,
	};
	const [lightUnit, setGasUnit] = useState<FormProps>(startingValues);
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
			...lightUnit,
			[e.target.name]: getCorrectValues(e.target.value),
		});
	};

	const onSubmitHandler = () => {
		let lastCitire;
		if (units.length === 0) {
			lastCitire = lightUnit.citire;
		}
		lastCitire = units[units.length - 1].citire;
		const newConsum = parseInt(lightUnit.citire) - parseInt(lastCitire);
		const checkNewConsum = !isNaN(newConsum) ? newConsum : "0";

		const newGasUnit: UtilityStateUnit = {
			id: uuid(),
			dataCitire: lightUnit.dataCitire,
			selected: false,
			citire: checkIfValid(lightUnit.citire),
			factura: checkIfValid(lightUnit.factura),
			consum: checkNewConsum.toString(),
			platit: false,
			edit: false,
		};

		dispatch(postUtility(newGasUnit));
		setGasUnit(startingValues);
	};

	const inputs = Object.entries(lightUnit);

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

export default LightForm;
