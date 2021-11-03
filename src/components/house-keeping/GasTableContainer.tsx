import { Gaz } from "./GasCard";
import { Table } from "../../reusables/ScrollTable";
import { gasState } from "./selectors";
import { selectGas } from "./houseSlice";
import { useDispatch, useSelector } from "react-redux";

const GasTableContainer = () => {
	const dispatch = useDispatch();
	const gas = useSelector(gasState);

	const onGasClickHandler = (id: string) => {
		dispatch(selectGas(id));
	};

	const gasCards = () => {
		return gas.map(item => (
			<li key={item.id}>
				<Gaz {...item} onClick={() => onGasClickHandler(item.id)} />
			</li>
		));
	};

	return <Table renderBody={() => gasCards()} />;
};

export default GasTableContainer;
