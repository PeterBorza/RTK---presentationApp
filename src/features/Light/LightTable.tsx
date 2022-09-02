import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table, Error } from "shared-components";
import {
    UtilityLabels,
    UtilityTableLabels,
    UtilityStateUnit,
    TotalPayedInfo,
    UtilitiesForm,
    initialFormValues,
    UtilityTable,
    titleStyle,
    UtilityTableItem,
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
import { darkModeSelector } from "app";

const LightTable: FC = () => {
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
        !isUnits && fetchLightUnits();
    }, [isUnits, fetchLightUnits]);

    const renderLightTableItems = units.map(unit => {
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
