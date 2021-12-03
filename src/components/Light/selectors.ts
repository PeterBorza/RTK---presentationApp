import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const utilityState = ({ light }: RootState) => light;

export const unitsState = ({ light }: RootState) => light.units;

export const pendingGasState = ({ light }: RootState) =>
	light.loading.isLoading;

export const errorGasState = ({ light }: RootState) => light.error;

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
