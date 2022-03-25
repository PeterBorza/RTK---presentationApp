import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Error } from "../../shared-components";
import {
    UtilityLabels,
    UtilityTableLabels,
    UtilityStateUnit,
    TotalPayedInfo,
    UtilitiesForm,
    initialFormValues,
    EditCard,
    UtilityTable,
    UtilityCard,
    titleStyle,
} from "../Utilities";
import { utilityState, errorLightState, sumOfBillsSelector } from "./selectors";
import { selectCard, resetEdit, editCard, resetSelected } from "./lightSlice";
import {
    deleteUtilityUnit,
    getAsyncUtility,
    togglePayedBill,
    postUtility,
    editUnit,
} from "./thunks";
import { darkModeSelector } from "../../app";

const LightTable = () => {
    const { units, loading } = useSelector(utilityState);
    const error = useSelector(errorLightState);
    const darkMode = useSelector(darkModeSelector);
    const sumOfBills = useSelector(sumOfBillsSelector);
    const dispatch = useDispatch();

    const isUnits = units.length !== 0;

    const fetchLightUnits = useCallback(() => {
        dispatch(getAsyncUtility());
    }, [dispatch]);

    useEffect(() => {
        fetchLightUnits();
    }, [fetchLightUnits]);

    const renderLightTableItems = units.map(unit => {
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
        <UtilityTable dark={darkMode}>
            <UtilityTable.Header>
                <h1 style={titleStyle(darkMode)}>{UtilityTableLabels.LIGHT_TITLE}</h1>
                <UtilitiesForm
                    postData={(newUnit: UtilityStateUnit) => dispatch(postUtility(newUnit))}
                    formValues={initialFormValues}
                    utilityUnits={units}
                />
            </UtilityTable.Header>
            <UtilityTable.Body>
                <Error message={error} isError={!!error} />
                <Table
                    headers={Object.values(UtilityLabels)}
                    onClickOutside={() => dispatch(resetSelected())}
                    loading={loading.isLoading}
                >
                    {isUnits && renderLightTableItems}
                </Table>
            </UtilityTable.Body>
            <UtilityTable.Footer>
                <TotalPayedInfo sumOfBills={sumOfBills} dark={darkMode} />
            </UtilityTable.Footer>
        </UtilityTable>
    );
};

export default LightTable;
