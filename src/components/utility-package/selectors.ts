import { typeofGasState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const utilityState = ({ utilities }: typeofGasState) => utilities;

export const unitsState = ({ utilities }: typeofGasState) => utilities.units;

export const pendingGasState = ({ utilities }: typeofGasState) =>
	utilities.loading.isLoading;

export const errorGasState = ({ utilities }: typeofGasState) => utilities.error;

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
