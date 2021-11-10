import { useState } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import { postGas } from "./thunks";

import Form, { ModalForm } from "../Form";
import { GasStateItem, GasFormProps } from "./gasSlice";

const GasForm = () => {
	const starterGas = {
		citire: "",
		consum: "",
		factura: "",
	};
	const [gasUnit, setGasUnit] = useState<GasFormProps>(starterGas);
	const dispatch = useDispatch();

	const cancelHandler = () => {
		setGasUnit(starterGas);
	};

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setGasUnit({
			...gasUnit,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitHandler = () => {
		const newGasUnit: GasStateItem = {
			id: uuid(),
			dataCitire: format(new Date(), "MM/dd/yyyy"),
			selected: false,
			citire: gasUnit.citire,
			consum: gasUnit.consum,
			factura: gasUnit.factura,
			platit: false,
		};
		dispatch(postGas(newGasUnit));
		setGasUnit(starterGas);
	};

	const labels: string[] = Object.keys(gasUnit);
	const values: string[] = Object.values(gasUnit);

	const renderInputs = () => {
		return (
			<>
				{labels.map((label, i) => (
					<Form.TextInput
						key={label}
						value={values[i]}
						name={label}
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
			formWidth='20'
			formTitle='Citire Lunara'
		/>
	);
};

export default GasForm;
