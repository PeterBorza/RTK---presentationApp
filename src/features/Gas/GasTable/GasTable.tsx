import { FC } from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Error } from "../../../shared-components";
import { utilityState, errorState, selectSubtotal } from "../selectors";
import { selectCard, editCard, resetEdit } from "../gasSlice";
import {
    UtilityStateUnit,
    TableHeader,
    UtilitiesForm,
    initialFormValues,
    UtilityLabels,
    UtilityTableLabels,
    TotalPayedInfo,
    EditCard,
} from "../../Utilities";
import {
    deleteUtilityUnit,
    editUnit,
    getAsyncUtility,
    postUtility,
    togglePayedBill,
} from "../thunks";

import GasCard from "../GasCard";

import classNames from "classnames";
import styles from "./GasTable.module.scss";

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

    const isUnits = units.length !== 0;

    const fetchGasUnits = useCallback(() => {
        dispatch(getAsyncUtility());
    }, [dispatch]);

    useEffect(() => {
        fetchGasUnits();
    }, [fetchGasUnits]);

    const headers = Object.values(UtilityLabels).map(item => (
        <span key={item}>{item}</span>
    ));

    const renderListItems = units.map(unit => (
        <li key={unit.id}>
            {!unit.edit ? (
                <GasCard
                    onClick={() => dispatch(selectCard(unit.id))}
                    onPayedClick={() => dispatch(togglePayedBill(unit))}
                    onDelete={() => dispatch(deleteUtilityUnit(unit.id))}
                    onEdit={() => dispatch(editCard(unit.id))}
                    {...unit}
                />
            ) : (
                <EditCard
                    resetEdit={() => dispatch(resetEdit())}
                    editUnit={(editedUnit: UtilityStateUnit) =>
                        dispatch(editUnit(editedUnit))
                    }
                    {...unit}
                />
            )}
        </li>
    ));

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
                    renderHeader={() => headers}
                    renderBody={() => isUnits && renderListItems}
                    loading={loading.isLoading}
                />
            </div>
            <TotalPayedInfo sumOfBills={sumOfBills} />
        </div>
    );
};

export default GasTable;
