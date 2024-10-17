import React from "react";
import { useSelector } from "react-redux";

import { Error, Pending, useAppRedux } from "app";
import { useOnClickOutside, useToggle } from "hooks";
import { AlertModal, Loader, Table, WarningModal } from "shared-components";
import { getTimeFormat } from "utils";

import { utilityState, errorState, sumOfBillsSelector, selectedGas, editedGas } from "./selectors";
import { selectCard, resetEdit, setUtilitiesError, resetSelected } from "./gasSlice";
import {
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
import { deleteUtilityUnit, editUnit, createGas } from "./thunks";
import ManageGas from "./ManageGas";

const GasTable = () => {
  const [modalOpen, , setModalOpen] = useToggle();
  const {
    units,
    loading: { isLoading },
  } = useSelector(utilityState);
  const { isDarkMode, dispatch } = useAppRedux();
  const error = useSelector(errorState);
  const sumOfBills = useSelector(sumOfBillsSelector);
  const selectedGasUnit = useSelector(selectedGas);
  const errorRef = React.useRef<HTMLDivElement>(null);
  const manageContentRef = React.useRef<HTMLDivElement>(null);
  const tableRef = React.useRef<HTMLDivElement>(null);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const editedGasUnit = useSelector(editedGas);
  const isInEditMode = editedGasUnit.length > 0;
  // TODO below state should be set in redux  - getUnits - rename it to setUnits -

  // const sortByDate = (units: UtilityStateUnit[]) => {
  //     const formated = (dateA: string, dateB: string) =>
  //         formatToDate(dateA).getTime() - formatToDate(dateB).getTime();
  //     return units.slice().sort((a, b) => formated(a.readDate, b.readDate));
  // };

  // TODO add sorting

  const renderGasTableItems = React.useMemo(
    () =>
      units.map(unit => (
        <UtilityTableItem
          key={unit.id}
          unit={unit}
          units={units}
          darkMode={isDarkMode}
          resetEdit={() => dispatch(resetEdit())}
          selectCard={() => dispatch(selectCard(unit.id))}
          editUnit={unit => dispatch(editUnit(unit))}
        />
      )),
    [units, isDarkMode, dispatch],
  );

  // TODO extract managing utility from table column into header , to handle selected utility from there
  // payed, delete and edit, also sorting would go into header

  // TODO extract error component

  const renderHeaders = React.useMemo(
    () =>
      Object.values(UtilityLabels).map(label => (
        <TableTitle key={label} name={label} isDarkMode={isDarkMode} />
      )),
    [isDarkMode],
  );

  const resetSelection = () => {
    selectedGasUnit && dispatch(resetSelected());
    if (isInEditMode) dispatch(resetEdit());
  };

  useOnClickOutside([errorRef], () => setUtilitiesError(false));
  useOnClickOutside([tableRef, manageContentRef], () => {
    if (!modalRef.current) resetSelection();
  });
  useOnClickOutside([modalRef], () => {
    setModalOpen(false);
    resetSelection();
  });

  return (
    <>
      <AlertModal ref={errorRef} openModal={error} message={Error.MESSAGE} variant="text" />
      <WarningModal
        onClose={() => setModalOpen(false)}
        isModalopen={modalOpen}
        title={UtilityTableLabels.WARNING}
        onApply={() => selectedGasUnit && dispatch(deleteUtilityUnit(selectedGasUnit.id))}
        cancelLabel={UtilityTableLabels.CANCEL}
        applyLabel={UtilityTableLabels.DELETE}
        ref={modalRef}
      />
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
          <ManageGas ref={manageContentRef} openModal={() => setModalOpen(true)} />
        </T.Header>
        <T.Body>
          <Table renderHeaders={() => renderHeaders} ref={tableRef}>
            {isLoading ? <Loader message={Pending.MESSAGE} /> : renderGasTableItems}
          </Table>
        </T.Body>
        <T.Footer>
          <TotalPayedInfo sumOfBills={sumOfBills} dark={isDarkMode} />
        </T.Footer>
      </T>
    </>
  );
};

export default GasTable;
