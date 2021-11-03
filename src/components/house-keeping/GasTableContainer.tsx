import React from "react";
import ScrollTable from "../../reusables/ScrollTable";
import { Gaz } from "./GasCard";
import { gasState, gasLabelState } from "./selectors";
import { selectGas } from "./houseSlice";
import { useDispatch, useSelector } from "react-redux";

const TableContainer = () => {
	const dispatch = useDispatch();
	const gas = useSelector(gasState);
	const labels = useSelector(gasLabelState);

	const onGasClickHandler = (id: string) => {
		dispatch(selectGas(id));
	};

	return (
		<ScrollTable>
			<ScrollTable.Header>
				{labels.map(label => (
					<span key={label}>{label}</span>
				))}
			</ScrollTable.Header>
			<ScrollTable.Body>
				{gas.map(item => (
					<Gaz
						key={item.id}
						{...item}
						onClick={() => onGasClickHandler(item.id)}
					/>
				))}
			</ScrollTable.Body>
		</ScrollTable>
	);
};

export default TableContainer;
