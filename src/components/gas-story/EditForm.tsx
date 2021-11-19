import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextInput, Form } from "../../reusables";
import { GasStateUnit } from "./types";
import { selectedGas } from "./selectors";
import { editUnit } from ".";

const EditForm: FC = () => {
	const selected = useSelector(selectedGas);
	const [gasUnit, setGasUnit] = useState<GasStateUnit>(selected);
	const dispatch = useDispatch();
	const inputs = Object.entries(gasUnit);

	const cancelHandler = () => {
		setGasUnit({
			...gasUnit,
			edit: false,
		});
		dispatch(editUnit(gasUnit));
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.name !== "dataCitire" && e.target.value === "") return;

		setGasUnit({
			...gasUnit,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = () => {
		const newGasUnit: GasStateUnit = {
			...gasUnit,
			selected: false,
			edit: false,
		};
		dispatch(editUnit(newGasUnit));
	};

	const render = (inputs: Array<string[]>) => {
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
		<Form
			render={() => render(inputs)}
			onSubmit={onSubmitHandler}
			onCancel={cancelHandler}
			formTitle='Edit Mode'
		/>
	);
};

export default EditForm;
