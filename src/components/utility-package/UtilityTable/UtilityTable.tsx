import { FC } from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Error } from "../../../reusables";
import { GasLabels, GasTableLabels } from "../../../app/constants";
import { utilityState, errorGasState, selectSubtotal } from "../selectors";
import { selectCard, resetSelected } from "../utilitiesSlice";
import { UtilityStateUnit } from "../types";
import { useTime } from "../../../hooks";
import { deleteUtilityUnit, getAsyncUtility, togglePayedBill } from "../thunks";

import { Card } from "../UtilityCard";
import UtilityForm from "../UtilityForm";

import classNames from "classnames";
import styles from "./UtilityTable.module.scss";

type Props = {
	dark?: boolean;
	utility: string;
};

const UtilityTable: FC<Props> = ({ dark = false, utility }) => {
	const { units, loading } = useSelector(utilityState);
	const error = useSelector(errorGasState);
	const sumofBills = useSelector(selectSubtotal);
	const dispatch = useDispatch();

	const today = useTime("standard");
	const exactSumOfBillsPayed = sumofBills.toFixed(2);

	const wrapper = classNames(styles.container, {
		[styles.container__dark]: dark,
	});

	const isUnits = units && units.length !== 0;

	useEffect(() => {
		dispatch(resetSelected());
	}, [dispatch]);

	const fetchGasUnits = useCallback(() => {
		dispatch(getAsyncUtility(utility));
	}, [utility, dispatch]);

	useEffect(() => {
		fetchGasUnits();
	}, [fetchGasUnits]);

	const onTogglePayedBill = (item: UtilityStateUnit) => {
		dispatch(togglePayedBill({ item, utility }));
		dispatch(resetSelected());
	};

	const onGasClickHandler = (id: string) => {
		dispatch(selectCard(id));
	};

	const onDeleteGasHandler = (id: string) => {
		dispatch(deleteUtilityUnit({ id, utility }));
	};

	const onEditGasHandler = (id: string) => {
		console.log("editing work", id);
	};

	const renderListItems = (item: Array<UtilityStateUnit>) =>
		item.map(unit => (
			<li key={unit.id}>
				<Card
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
			Object.keys(GasLabels).map(item => <span key={item}>{item}</span>),
		body: () => isUnits && renderListItems(units),
	};

	return (
		<div className={wrapper}>
			<h1>{utility}</h1>
			<UtilityForm utility={utility} />
			<Table
				renderHeader={table.header}
				renderBody={table.body}
				loading={loading.isLoading}
				message={loading.message}
			/>
			<div className={styles.billTotalInfo}>
				<h3>
					{GasTableLabels.SUM_OF_BILLS}
					<span className={styles.highlighted}>{today}</span>
					{GasTableLabels.IS}
					<span className={styles.highlighted}>
						{exactSumOfBillsPayed}
					</span>
					{GasTableLabels.RON}
				</h3>
			</div>
			{error && <Error message={error} />}
		</div>
	);
};

export default UtilityTable;
