import { FC } from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Error } from "../../../shared-components";
import { utilityState, errorState, selectSubtotal } from "../selectors";
import { selectCard, editCard } from "../gasSlice";
import {
    UtilityStateUnit,
    TableHeader,
    UtilitiesForm,
    initialFormValues,
    UtilityLabels,
    UtilityTableLabels,
    TotalPayedInfo,
    UnitId,
} from "../../Utilities";
import {
    deleteUtilityUnit,
    getAsyncUtility,
    postUtility,
    togglePayedBill,
} from "../thunks";

import GasCard from "../GasCard";

import classNames from "classnames";
import styles from "./GasTable.module.scss";
import EditCard from "../EditCard";

type Props = {
    dark?: boolean;
};

const GasTable: FC<Props> = ({ dark = false }) => {
    const { units, loading } = useSelector(utilityState);
    const error = useSelector(errorState);
    const sumOfBills = useSelector(selectSubtotal);
    const dispatch = useDispatch();

    const wrapper = classNames(styles.container, {
        [styles.container__dark]: dark,
    });

    const isUnits = units && units.length !== 0;

    const fetchGasUnits = useCallback(() => {
        dispatch(getAsyncUtility());
    }, [dispatch]);

    useEffect(() => {
        fetchGasUnits();
    }, [fetchGasUnits]);

    const onTogglePayedBill = (item: UtilityStateUnit) => {
        dispatch(togglePayedBill(item));
    };

    const onGasClickHandler = (id: string) => {
        dispatch(selectCard(id));
    };

    const onDeleteGasHandler = (id: string) => {
        dispatch(deleteUtilityUnit(id));
    };

    const onEditGasHandler = (id: UnitId) => {
        dispatch(editCard(id));
    };

    const renderListItems = (item: Array<UtilityStateUnit>) =>
        item.map(unit => (
            <li key={unit.id}>
                {!unit.edit ? (
                    <GasCard
                        {...unit}
                        onClick={() => onGasClickHandler(unit.id)}
                        onPayedClick={() => onTogglePayedBill(unit)}
                        onDelete={() => onDeleteGasHandler(unit.id)}
                        onEdit={() => onEditGasHandler(unit.id)}
                    />
                ) : (
                    <EditCard unit={unit} />
                )}
            </li>
        ));

    const table = {
        header: () =>
            Object.values(UtilityLabels).map(item => (
                <span key={item}>{item}</span>
            )),
        body: () => isUnits && renderListItems(units),
    };

    return error ? (
        <Error message={error} />
    ) : (
        <div className={wrapper}>
            <TableHeader
                tableTitle={UtilityTableLabels.GAS_TITLE}
                className={styles.tableHeader}
            >
                <UtilitiesForm
                    postData={(newUnit: UtilityStateUnit) =>
                        dispatch(postUtility(newUnit))
                    }
                    formValues={initialFormValues}
                    utilityUnits={units}
                />
            </TableHeader>
            <div className={styles.tableWrapper}>
                <Table
                    renderHeader={table.header}
                    renderBody={table.body}
                    loading={loading.isLoading}
                />
            </div>
            <TotalPayedInfo sumOfBills={sumOfBills} />
        </div>
    );
};

export default GasTable;
