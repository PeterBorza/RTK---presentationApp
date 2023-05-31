import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";

import { useAppRedux, Error, Pending } from "app";
import { useOnClickOutside } from "hooks";
import { getTimeFormat } from "utils";
import { AlertModal, Loader, Table } from "shared-components";
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
    TableTitle,
} from "../Utilities";
import { utilityState, errorLightState, sumOfBillsSelector } from "./selectors";
import { selectCard, resetEdit, editCard, resetSelected, setUtilitiesError } from "./lightSlice";
import { deleteLight, togglePayedBill, createLight, editLight } from "./thunks";

const LightTable = () => {
    const { isDarkMode, dispatch } = useAppRedux();
    const {
        units,
        loading: { isLoading },
    } = useSelector(utilityState);
    const error = useSelector(errorLightState);
    const sumOfBills = useSelector(sumOfBillsSelector);
    const errorRef = useRef<HTMLDivElement | null>(null);

    useOnClickOutside([errorRef], () => setUtilitiesError(false));

    const lightFormValues: FormProps = {
        ...initialFormValues,
        readDate: getTimeFormat(),
    };

    const renderLightTableItems = useMemo(
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
                    deleteUtilityUnit={() => dispatch(deleteLight(unit.id))}
                    editUnit={unit => dispatch(editLight(unit))}
                    togglePayedBill={() => dispatch(togglePayedBill(unit))}
                />
            )),
        [units, isDarkMode, dispatch],
    );

    const renderHeaders = useMemo(
        () =>
            Object.values(UtilityLabels).map(label => (
                <TableTitle key={label} name={label} isDarkMode={isDarkMode} onSort={() => null} />
            )),
        [isDarkMode],
    );

    return (
        <UtilityTable dark={isDarkMode}>
            <UtilityTable.Header>
                <h1 style={titleStyle(isDarkMode)}>{UtilityTableLabels.LIGHT_TITLE}</h1>
                <UtilitiesForm
                    postData={(newUnit: UtilityStateUnit) => dispatch(createLight(newUnit))}
                    formValues={lightFormValues}
                    lastUnit={units.at(-1)!}
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
                    renderHeaders={() => renderHeaders}
                    onClickOutside={() => dispatch(resetSelected())}
                >
                    {isLoading ? <Loader message={Pending.MESSAGE} /> : renderLightTableItems}
                </Table>
            </UtilityTable.Body>
            <UtilityTable.Footer>
                <TotalPayedInfo sumOfBills={sumOfBills} dark={isDarkMode} />
            </UtilityTable.Footer>
        </UtilityTable>
    );
};

export default LightTable;
