import { FC } from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Error } from "../../shared-components";
import { utilityState, errorState, sumOfBillsSelector } from "./selectors";
import { selectCard, editCard, resetEdit, resetSelected } from "./gasSlice";
import {
    UtilityStateUnit,
    UtilitiesForm,
    initialFormValues,
    UtilityLabels,
    UtilityTableLabels,
    EditCard,
    UtilityTable,
    TotalPayedInfo,
} from "../Utilities";
import {
    deleteUtilityUnit,
    editUnit,
    getAsyncUtility,
    postUtility,
    togglePayedBill,
} from "./thunks";

import GasCard from "./GasCard";

const GasTable: FC = () => {
    const { units, loading } = useSelector(utilityState);
    const error = useSelector(errorState);
    const sumOfBills = useSelector(sumOfBillsSelector);
    const dispatch = useDispatch();

    const isUnits = units.length !== 0;

    const fetchGasUnits = useCallback(() => {
        dispatch(getAsyncUtility());
    }, [dispatch]);

    useEffect(() => {
        fetchGasUnits();
    }, [fetchGasUnits]);

    const renderTableHeader = () =>
        Object.values(UtilityLabels).map(item => (
            <span key={item}>{item}</span>
        ));

    const renderGasTableItems = units.map(unit => (
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

    const renderGasTable = {
        tableTitle: UtilityTableLabels.GAS_TITLE,
        tableHeader: () => (
            <UtilitiesForm
                postData={(newUnit: UtilityStateUnit) =>
                    dispatch(postUtility(newUnit))
                }
                formValues={initialFormValues}
                utilityUnits={units}
            />
        ),
        tableBody: () => (
            <Table
                renderHeader={renderTableHeader}
                renderBody={() => isUnits && renderGasTableItems}
                onClickOutside={() => dispatch(resetSelected())}
                loading={loading.isLoading}
            />
        ),
        tableFooter: () => <TotalPayedInfo sumOfBills={sumOfBills} />,
    };

    return error ? (
        <Error message={error} />
    ) : (
        <UtilityTable {...renderGasTable} />
    );
};

export default GasTable;
