import { Gaz } from "./GasCard";
import { Table } from "../../reusables/ScrollTable";
import { gasState } from "./selectors";
import { errorState } from "../bubble-story/selectors";
import { selectGas, togglePayed } from "./gasSlice";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import { deleteGas, getAsyncGas } from "./thunks";
import { useEffect } from "react";
import GasForm from "./GasForm";

const GasTableContainer = () => {
	const dispatch = useDispatch();
	const { units, labels } = useSelector(gasState);
	const error = useSelector(errorState);

	useEffect(() => {
		dispatch(getAsyncGas());
	}, []);

	const newGas = {
		id: uuid(),
		selected: false,
		dataCitire: format(new Date(), "MM/dd/yyyy"),
		citire: 1200,
		consum: 150,
		factura: 233,
		platit: false,
	};

	const onGasClickHandler = (id: string) => {
		dispatch(selectGas(id));
		// dispatch(deleteGas(id));
	};

	const gasCards = () => {
		return units.map(item => (
			<li key={item.id}>
				<Gaz
					{...item}
					onClick={() => onGasClickHandler(item.id)}
					onPayedClick={() => dispatch(togglePayed(item.id))}
				/>
			</li>
		));
	};

	const labelHeader = () => {
		return labels.map(item => <span key={item}>{item}</span>);
	};

	return error ? (
		<p>{error}</p>
	) : (
		<>
			<GasForm />
			<Table renderBody={gasCards} renderHeader={labelHeader} />
		</>
	);
};

export default GasTableContainer;
