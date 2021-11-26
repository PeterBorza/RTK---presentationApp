import { typeofGasState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

export const gasState = ({ gas }: typeofGasState) => gas;

export const unitsState = ({ gas }: typeofGasState) => gas.units;

// export const selectedGas = ({ gas }: typeofGasState) => {
// 	const idx = gas.units.findIndex(item => item.selected === true);
// 	return gas.units[idx];
// };

export const pendingGasState = ({ gas }: typeofGasState) =>
	gas.loading.isLoading;

export const errorGasState = ({ gas }: typeofGasState) => gas.error;

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
