import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";
import { UtilityStateUnit } from "../Utilities";

export const utilityState = ({ gas }: RootState) => gas;

export const unitsState = ({ gas }: RootState) => gas.units;

export const pendingState = ({ gas }: RootState) => gas.loading.isLoading;

export const errorState = ({ gas }: RootState) => gas.error;

export const isPayedSelector = createSelector(
    unitsState,
    items => items.filter(items => items.payed === true) as UtilityStateUnit[],
);

export const billsSelector = createSelector(
    isPayedSelector,
    items => items.map(items => items.bill) as string[],
);

export const sumOfBillsSelector = createSelector(
    billsSelector,
    items => items.reduce((subtotal, item) => subtotal + +item, 0) as number,
);

export const selectedGas = createSelector(
    unitsState,
    items => items.filter(unit => unit.selected === true) as UtilityStateUnit[],
);

export const editedGas = createSelector(
    unitsState,
    items => items.filter(unit => unit.edit === true) as UtilityStateUnit[],
);
