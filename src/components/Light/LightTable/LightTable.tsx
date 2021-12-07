import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Error } from "../../../reusables";
import {
	UtilityLabels,
	UtilityTableLabels,
	UtilityStateUnit,
	TotalPayedInfo,
} from "../../Utilities";
import { utilityState, errorLightState, selectSubtotal } from "../selectors";
import { selectCard, resetSelected } from "../lightSlice";
import { deleteUtilityUnit, getAsyncUtility, togglePayedBill } from "../thunks";

import LightCard from "../LightCard";
import UtilityForm from "../LightForm";

import classNames from "classnames";
import styles from "./LightTable.module.scss";

type Props = {
	dark?: boolean;
};

const LightTable: FC<Props> = ({ dark = false }) => {
	const { units, loading } = useSelector(utilityState);
	const error = useSelector(errorLightState);
	const sumOfBills = useSelector(selectSubtotal);
	const dispatch = useDispatch();

	const wrapper = classNames(styles.container, {
		[styles.container__dark]: dark,
	});

	const isUnits = units && units.length !== 0;

	useEffect(() => {
		dispatch(resetSelected());
	}, [dispatch]);

	const fetchGasUnits = useCallback(() => {
		dispatch(getAsyncUtility());
	}, [dispatch]);

	useEffect(() => {
		fetchGasUnits();
	}, [fetchGasUnits]);

	const onTogglePayedBill = (item: UtilityStateUnit) => {
		dispatch(togglePayedBill(item));
		dispatch(resetSelected());
	};

	const onGasClickHandler = (id: string) => {
		dispatch(selectCard(id));
	};

	const onDeleteGasHandler = (id: string) => {
		dispatch(deleteUtilityUnit(id));
	};

	const onEditGasHandler = (id: string) => {
		console.log("editing work", id);
	};

	const renderListItems = (item: Array<UtilityStateUnit>) =>
		item.map(unit => (
			<li key={unit.id}>
				<LightCard
					{...unit}
					onClick={() => onGasClickHandler(unit.id)}
					onPayedClick={() => onTogglePayedBill(unit)}
					onDelete={() => onDeleteGasHandler(unit.id)}
					onEdit={() => onEditGasHandler(unit.id)}
				/>
			</li>
		));

	const table = {
		header: () =>
			Object.keys(UtilityLabels).map(item => (
				<span key={item}>{item}</span>
			)),
		body: () => isUnits && renderListItems(units),
	};

	return error ? (
		<Error message={error} />
	) : (
		<div className={wrapper}>
			<div className={styles.tableHeader}>
				<h1>{UtilityTableLabels.LIGHT_TITLE}</h1>
				<UtilityForm />
			</div>
			<Table
				renderHeader={table.header}
				renderBody={table.body}
				loading={loading.isLoading}
			/>
			<TotalPayedInfo sumOfBills={sumOfBills} />
		</div>
	);
};

export default LightTable;
