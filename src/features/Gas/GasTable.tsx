import React, { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AlertModal, Table } from "shared-components";
import { utilityState, errorState, sumOfBillsSelector } from "./selectors";
import { selectCard, editCard, resetEdit, resetSelected, setUtilitiesError } from "./gasSlice";
import {
    UtilityStateUnit,
    UtilitiesForm,
    initialFormValues,
    UtilityLabels,
    UtilityTableLabels,
    UtilityTable,
    TotalPayedInfo,
    titleStyle,
    UtilityTableItem,
    FormProps,
} from "../Utilities";
import {
    deleteUtilityUnit,
    editUnit,
    getAsyncUtility,
    postUtility,
    togglePayedBill,
} from "./thunks";
import { darkModeSelector, Error } from "app";
import { useOnClickOutside, useTime } from "hooks";

const GasTable: FC = () => {
    const { units, loading } = useSelector(utilityState);
    const error = useSelector(errorState);
    const darkMode = useSelector(darkModeSelector);
    const sumOfBills = useSelector(sumOfBillsSelector);
    const dispatch = useDispatch();
    const errorRef = React.useRef<HTMLDivElement | null>(null);

    useOnClickOutside(errorRef, () => setUtilitiesError(false));

    const timer = useTime("standard");

    const isUnits = units.length !== 0;

    const gasFormValues: FormProps = { ...initialFormValues, readDate: timer };

    const fetchGasUnits = useCallback(() => {
        dispatch(getAsyncUtility());
    }, [dispatch]);

    useEffect(() => {
        !isUnits && fetchGasUnits();
    }, [isUnits, fetchGasUnits]);

    const renderGasTableItems = units.map(unit => {
        return (
            <UtilityTableItem
                key={unit.id}
                unit={unit}
                units={units}
                darkMode={darkMode}
                editCard={() => dispatch(editCard(unit.id))}
                resetEdit={() => dispatch(resetEdit())}
                selectCard={() => dispatch(selectCard(unit.id))}
                deleteUtilityUnit={() => dispatch(deleteUtilityUnit(unit.id))}
                editUnit={unit => dispatch(editUnit(unit))}
                togglePayedBill={() => dispatch(togglePayedBill(unit))}
            />
        );
    });

    return (
        <UtilityTable dark={darkMode}>
            <UtilityTable.Header>
                <h1 style={titleStyle(darkMode)}>{UtilityTableLabels.GAS_TITLE}</h1>
                <UtilitiesForm
                    postData={(newUnit: UtilityStateUnit) => dispatch(postUtility(newUnit))}
                    formValues={gasFormValues}
                    utilityUnits={units}
                />
            </UtilityTable.Header>
            <UtilityTable.Body>
                <AlertModal
                    ref={errorRef}
                    openModal={error}
                    message={Error.MESSAGE}
                    variant="text"
                />
                <Table
                    headers={Object.values(UtilityLabels)}
                    onClickOutside={() => dispatch(resetSelected())}
                    loading={loading.isLoading}
                >
                    {isUnits && renderGasTableItems}
                </Table>
            </UtilityTable.Body>
            <UtilityTable.Footer>
                <TotalPayedInfo sumOfBills={sumOfBills} dark={darkMode} />
            </UtilityTable.Footer>
        </UtilityTable>
    );
};

export default GasTable;
