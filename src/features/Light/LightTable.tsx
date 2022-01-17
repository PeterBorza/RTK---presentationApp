import { FC, useCallback, useEffect } from "react";
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
    TableTitle,
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
        fetchLightUnits();
    }, [fetchLightUnits]);

    const renderLightTableItems = units.map(unit => (
        <li key={unit.id}>
            {!unit.edit ? (
                <UtilityCard
                    onClick={() => dispatch(selectCard(unit.id))}
                    onPayedClick={() => dispatch(togglePayedBill(unit))}
                    onDelete={() => dispatch(deleteUtilityUnit(unit.id))}
                    onEdit={() => dispatch(editCard(unit.id))}
                    unit={unit}
                    dark={darkMode}
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

    const renderLightTable = {
        tableTitle: UtilityTableLabels.LIGHT_TITLE,
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
                renderHeader={() =>
                    Object.values(UtilityLabels).map(item => (
                        <TableTitle name={item} />
                    ))
                }
                renderBody={() => isUnits && renderLightTableItems}
                onClickOutside={() => dispatch(resetSelected())}
                loading={loading.isLoading}
            />
        ),
        tableFooter: () => (
            <TotalPayedInfo sumOfBills={sumOfBills} dark={darkMode} />
        ),
    };

    return error ? (
        <Error message={error} />
    ) : (
        <UtilityTable {...renderLightTable} dark={darkMode} />
    );
};

export default LightTable;
