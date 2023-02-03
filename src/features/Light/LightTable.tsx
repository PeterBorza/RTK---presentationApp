import { FC, useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { AlertModal, Table } from "shared-components";
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
    FormProps,
} from "../Utilities";
import { utilityState, errorLightState, sumOfBillsSelector } from "./selectors";
import { selectCard, resetEdit, editCard, resetSelected, setUtilitiesError } from "./lightSlice";
import {
    deleteUtilityUnit,
    getAsyncUtility,
    togglePayedBill,
    postUtility,
    editUnit,
} from "./thunks";
import { useAppRedux, Error } from "app";
import { useOnClickOutside, useTime } from "hooks";

const LightTable: FC = () => {
    const { isDarkMode, dispatch } = useAppRedux();
    const { units, loading } = useSelector(utilityState);
    const error = useSelector(errorLightState);
    const sumOfBills = useSelector(sumOfBillsSelector);
    const errorRef = useRef<HTMLDivElement | null>(null);

    useOnClickOutside([errorRef], () => setUtilitiesError(false));

    const timer = useTime("standard");

    const isUnits = units.length !== 0;

    const lightFormValues: FormProps = { ...initialFormValues, readDate: timer };

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
                darkMode={isDarkMode}
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
        <UtilityTable dark={isDarkMode}>
            <UtilityTable.Header>
                <h1 style={titleStyle(isDarkMode)}>{UtilityTableLabels.LIGHT_TITLE}</h1>
                <UtilitiesForm
                    postData={(newUnit: UtilityStateUnit) => dispatch(postUtility(newUnit))}
                    formValues={lightFormValues}
                    utilityUnits={units}
                />
            </UtilityTable.Header>
            <UtilityTable.Body>
                <AlertModal
                    ref={errorRef}
                    openModal={!!error}
                    message={Error.MESSAGE}
                    variant="text"
                />
                <Table
                    headers={Object.values(UtilityLabels)}
                    onClickOutside={() => dispatch(resetSelected())}
                    loading={loading.isLoading}
                >
                    {isUnits && renderLightTableItems}
                </Table>
            </UtilityTable.Body>
            <UtilityTable.Footer>
                <TotalPayedInfo sumOfBills={sumOfBills} dark={isDarkMode} />
            </UtilityTable.Footer>
        </UtilityTable>
    );
};

export default LightTable;
