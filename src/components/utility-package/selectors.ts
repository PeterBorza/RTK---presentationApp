import { typeofUtilityState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const utilityState = ({ utilities }: typeofUtilityState) => utilities;

export const unitsState = ({ utilities }: typeofUtilityState) =>
	utilities.units;

export const pendingGasState = ({ utilities }: typeofUtilityState) =>
	utilities.loading.isLoading;

export const errorGasState = ({ utilities }: typeofUtilityState) =>
	utilities.error;

export const isPayedSelector = createSelector(unitsState, items =>
	items.filter(items => items.platit === true)
);

export const billsSelector = createSelector(isPayedSelector, items =>
	items.map(items => items.factura)
);

export const selectSubtotal = createSelector(billsSelector, items =>
	items.reduce((subtotal, item) => subtotal + Number(item), 0)
);

export const selectedGas = createSelector(unitsState, items =>
	items.filter(unit => unit.selected === true)
);
