import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { v4 as uuid } from "uuid";
import { postGas } from "./thunks";

import { TextInput, ModalForm } from "../../reusables";
import { GasStateUnit, GasFormProps } from "./types";
import { unitsState } from "./selectors";
import { initialGasFormValues } from "./state";

const GasForm: FC = () => {
	const units = useSelector(unitsState);
	const [gasUnit, setGasUnit] = useState<GasFormProps>(initialGasFormValues);
	const dispatch = useDispatch();

	const cancelHandler = () => {
		setGasUnit(initialGasFormValues);
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name !== "dataCitire" && e.target.value === "") return;

		setGasUnit({
			...gasUnit,
			[e.target.name]: e.target.value,
		});
	};

	const checkIfValid = (input: string) => {
		if (isNaN(parseInt(input))) return "";
		return input;
	};

	const onSubmitHandler = () => {
		const lastCitire = units[units.length - 1].citire;
		const newConsum = parseInt(gasUnit.citire) - parseInt(lastCitire);
		const checkNewConsum = typeof newConsum === "number" ? newConsum : "";
		console.log(newConsum);

		const newGasUnit: GasStateUnit = {
			citire: checkIfValid(gasUnit.citire),
			factura: checkIfValid(gasUnit.factura),
			dataCitire: gasUnit.dataCitire,
			consum: checkNewConsum.toString(),
			id: uuid(),
			selected: false,
			platit: false,
			edit: false,
		};

		dispatch(postGas(newGasUnit));
		setGasUnit(initialGasFormValues);
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
			buttonLabel='Adauga citire noua'
			formWidth='25'
			formTitle='Citire Lunara'
		/>
	);
};

export default GasForm;
