import { useMemo, useRef } from "react";
import { useSelector } from "react-redux";

import { useAppRedux, Error, Pending } from "app";
import { useOnClickOutside } from "hooks";
import { getTimeFormat } from "utils";
import { AlertModal, Button, Loader, Table } from "shared-components";
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
import { utilityState, errorLightState, sumOfBillsSelector, selectedLight } from "./selectors";
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
    const selectedLightUnit = useSelector(selectedLight);
    const errorRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);

    useOnClickOutside([errorRef], () => setUtilitiesError(false));
    useOnClickOutside([tableRef], () => dispatch(resetSelected()));

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
                    resetEdit={() => dispatch(resetEdit())}
                    selectCard={() => dispatch(selectCard(unit.id))}
                    editUnit={unit => dispatch(editLight(unit))}
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
                <Button
                    value="Manage"
                    onClick={() => selectedLightUnit && dispatch(editCard(selectedLightUnit.id))}
                />
                {!selectedLightUnit?.payed && (
                    <Button
                        value="Pay"
                        onClick={() =>
                            selectedLightUnit && dispatch(togglePayedBill(selectedLightUnit))
                        }
                    />
                )}
                <Button
                    value="Delete"
                    onClick={() => selectedLightUnit && dispatch(deleteLight(selectedLightUnit.id))}
                />
                <h2>{selectedLightUnit?.index}</h2>
            </UtilityTable.Header>
            <UtilityTable.Body>
                <AlertModal
                    ref={errorRef}
                    openModal={!!error}
                    message={Error.MESSAGE}
                    variant="text"
                />
                <Table renderHeaders={() => renderHeaders} ref={tableRef}>
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
