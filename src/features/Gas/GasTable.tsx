import React, { FC, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

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
import { Error, useAppRedux } from "app";
import { useOnClickOutside, useTime } from "hooks";

const GasTable: FC = () => {
    const { units, loading } = useSelector(utilityState);
    const error = useSelector(errorState);
    const { isDarkMode, dispatch } = useAppRedux();
    const sumOfBills = useSelector(sumOfBillsSelector);
    const errorRef = React.useRef<HTMLDivElement | null>(null);

    const isUnits = units.length > 0;

    useOnClickOutside([errorRef], () => setUtilitiesError(false));

    // TODO add sorting

    const timer = useTime("standard");

    const gasFormValues: FormProps = { ...initialFormValues, readDate: timer };

    const fetchGasUnits = useCallback(() => {
        dispatch(getAsyncUtility());
    }, [dispatch]);

    useEffect(() => {
        !isUnits && fetchGasUnits();
    }, [isUnits, fetchGasUnits]);

    const renderGasTableItems = (arr: UtilityStateUnit[]) =>
        arr.map(unit => (
            <UtilityTableItem
                key={unit.id}
                unit={unit}
                units={arr}
                darkMode={isDarkMode}
                editCard={() => dispatch(editCard(unit.id))}
                resetEdit={() => dispatch(resetEdit())}
                selectCard={() => dispatch(selectCard(unit.id))}
                deleteUtilityUnit={() => dispatch(deleteUtilityUnit(unit.id))}
                editUnit={unit => dispatch(editUnit(unit))}
                togglePayedBill={() => dispatch(togglePayedBill(unit))}
            />
        ));

    // TODO extract managing utility from table column into header , to handle selected utility from there
    // payed, delete and edit, also sorting would go into header

    // TODO extract error component

    return (
        <UtilityTable dark={isDarkMode}>
            <UtilityTable.Header>
                <h1 style={titleStyle(isDarkMode)}>{UtilityTableLabels.GAS_TITLE}</h1>
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
                    {isUnits && renderGasTableItems(units)}
                </Table>
            </UtilityTable.Body>
            <UtilityTable.Footer>
                <TotalPayedInfo sumOfBills={sumOfBills} dark={isDarkMode} />
            </UtilityTable.Footer>
        </UtilityTable>
    );
};

export default GasTable;
