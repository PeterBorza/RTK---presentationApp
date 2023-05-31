import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { Error, Pending, useAppRedux } from "app";
import { useOnClickOutside } from "hooks";
import { AlertModal, Loader, Table } from "shared-components";
import { formatToDate, getTimeFormat } from "utils";

import { utilityState, errorState, sumOfBillsSelector } from "./selectors";
import { selectCard, editCard, resetEdit, resetSelected, setUtilitiesError } from "./gasSlice";
import {
    UtilityStateUnit,
    UtilitiesForm,
    initialFormValues,
    UtilityLabels,
    UtilityTableLabels,
    UtilityTable as T,
    TotalPayedInfo,
    titleStyle,
    UtilityTableItem,
    TableTitle,
} from "../Utilities";
import { deleteUtilityUnit, editUnit, createGas, togglePayedBill } from "./thunks";

const GasTable = () => {
    const {
        units,
        loading: { isLoading },
    } = useSelector(utilityState);
    const error = useSelector(errorState);
    const { isDarkMode, dispatch } = useAppRedux();
    const sumOfBills = useSelector(sumOfBillsSelector);
    const errorRef = React.useRef<HTMLDivElement | null>(null);

    // TODO below state should be set in redux  - getUnits - rename it to setUnits -

    useOnClickOutside([errorRef], () => setUtilitiesError(false));

    const sortByDate = (units: UtilityStateUnit[]) => {
        const formated = (dateA: string, dateB: string) =>
            formatToDate(dateA).getTime() - formatToDate(dateB).getTime();
        return units.slice().sort((a, b) => formated(a.readDate, b.readDate));
    };

    // TODO add sorting

    const renderGasTableItems = useMemo(
        () =>
            units.map(unit => (
                <UtilityTableItem
                    key={unit.id}
                    unit={unit}
                    units={units}
                    darkMode={isDarkMode}
                    editCard={() => dispatch(editCard(unit.id))}
                    resetEdit={() => dispatch(resetEdit())}
                    selectCard={() => dispatch(selectCard(unit.id))}
                    deleteUtilityUnit={() => dispatch(deleteUtilityUnit(unit.id))}
                    editUnit={unit => dispatch(editUnit(unit))}
                    togglePayedBill={() => dispatch(togglePayedBill(unit))}
                />
            )),
        [units, isDarkMode, dispatch],
    );

    // TODO extract managing utility from table column into header , to handle selected utility from there
    // payed, delete and edit, also sorting would go into header

    // TODO extract error component

    const renderHeaders = useMemo(
        () =>
            Object.values(UtilityLabels).map(label => (
                <TableTitle key={label} name={label} isDarkMode={isDarkMode} />
            )),
        [isDarkMode],
    );

    return (
        <T dark={isDarkMode}>
            <T.Header>
                <h1 style={titleStyle(isDarkMode)}>{UtilityTableLabels.GAS_TITLE}</h1>
                <UtilitiesForm
                    postData={newUnit => dispatch(createGas(newUnit))}
                    formValues={{
                        ...initialFormValues,
                        readDate: getTimeFormat(),
                    }}
                    lastUnit={units.at(-1)!}
                />
            </T.Header>
            <T.Body>
                <AlertModal
                    ref={errorRef}
                    openModal={error}
                    message={Error.MESSAGE}
                    variant="text"
                />
                <Table
                    renderHeaders={() => renderHeaders}
                    onClickOutside={() => dispatch(resetSelected())}
                >
                    {isLoading ? <Loader message={Pending.MESSAGE} /> : renderGasTableItems}
                </Table>
            </T.Body>
            <T.Footer>
                <TotalPayedInfo sumOfBills={sumOfBills} dark={isDarkMode} />
            </T.Footer>
        </T>
    );
};

export default GasTable;
