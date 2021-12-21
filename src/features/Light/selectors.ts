import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const utilityState = ({ light }: RootState) => light;

export const unitsState = ({ light }: RootState) => light.units;

export const pendingState = ({ light }: RootState) => light.loading.isLoading;

export const errorLightState = ({ light }: RootState) => light.error;

export const isPayedSelector = createSelector(unitsState, items =>
    items.filter(items => items.payed === true)
);

export const billsSelector = createSelector(isPayedSelector, items =>
    items.map(items => items.bill)
);

export const selectSubtotal = createSelector(billsSelector, items =>
    items.reduce((subtotal, item) => subtotal + Number(item), 0)
);

export const selectedGas = createSelector(unitsState, items =>
    items.filter(unit => unit.selected === true)
);
