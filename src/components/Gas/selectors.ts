import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const utilityState = ({ gas }: RootState) => gas;

export const unitsState = ({ gas }: RootState) => gas.units;

export const pendingGasState = ({ gas }: RootState) => gas.loading.isLoading;

export const errorGasState = ({ gas }: RootState) => gas.error;

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
