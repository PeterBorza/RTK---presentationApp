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
    UtilityCard,
    TableTitle,
    titleStyle,
} from "../Utilities";
import {
    deleteUtilityUnit,
    editUnit,
    getAsyncUtility,
    postUtility,
    togglePayedBill,
} from "./thunks";
import { darkModeSelector } from "../../app";

const GasTable = () => {
    const { units, loading } = useSelector(utilityState);
    const error = useSelector(errorState);
    const darkMode = useSelector(darkModeSelector);
    const sumOfBills = useSelector(sumOfBillsSelector);
    const dispatch = useDispatch();

    const isUnits = units.length !== 0;

    const fetchGasUnits = useCallback(() => {
        dispatch(getAsyncUtility());
    }, [dispatch]);

    useEffect(() => {
        fetchGasUnits();
    }, [fetchGasUnits]);

    const renderGasTableItems = units.map(unit => {
        const billIsOut = unit.bill !== "";
        return (
            <li key={unit.id}>
                {!unit.edit ? (
                    <UtilityCard
                        onClick={() => dispatch(selectCard(unit.id))}
                        onPayedClick={() => billIsOut && dispatch(togglePayedBill(unit))}
                        onDelete={() => dispatch(deleteUtilityUnit(unit.id))}
                        onEdit={() => dispatch(editCard(unit.id))}
                        unit={unit}
                        dark={darkMode}
                    />
                ) : (
                    <EditCard
                        resetEdit={() => dispatch(resetEdit())}
                        editUnit={(editedUnit: UtilityStateUnit) => dispatch(editUnit(editedUnit))}
                        {...unit}
                    />
                )}
            </li>
        );
    });

    return (
        <>
            <UtilityTable dark={darkMode}>
                <UtilityTable.Header>
                    <h1 style={titleStyle(darkMode)}>{UtilityTableLabels.GAS_TITLE}</h1>
                    <UtilitiesForm
                        postData={(newUnit: UtilityStateUnit) => dispatch(postUtility(newUnit))}
                        formValues={initialFormValues}
                        utilityUnits={units}
                    />
                </UtilityTable.Header>
                <UtilityTable.Body>
                    <Error message={error} isError={!!error} />
                    <Table
                        renderHeader={() =>
                            Object.values(UtilityLabels).map(item => (
                                <TableTitle key={item} name={item} />
                            ))
                        }
                        renderBody={() => isUnits && renderGasTableItems}
                        onClickOutside={() => dispatch(resetSelected())}
                        loading={loading.isLoading}
                    />
                </UtilityTable.Body>
                <UtilityTable.Footer>
                    <TotalPayedInfo sumOfBills={sumOfBills} dark={darkMode} />
                </UtilityTable.Footer>
            </UtilityTable>
        </>
    );
};

export default GasTable;
