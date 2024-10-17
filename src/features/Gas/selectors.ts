import { RootState } from "app/store";
import { createSelector } from "@reduxjs/toolkit";

export const utilityState = ({ gas }: RootState) => gas;

export const unitsState = ({ gas }: RootState) => gas.units;

export const pendingState = ({ gas }: RootState) => gas.loading.isLoading;

export const errorState = ({ gas }: RootState) => gas.error;

export const isPayedSelector = createSelector(unitsState, items =>
  items.filter(items => items.payed === true),
);

export const billsSelector = createSelector(isPayedSelector, items =>
  items.map(items => items.bill),
);

export const sumOfBillsSelector = createSelector(billsSelector, items =>
  items.reduce((subtotal, item) => subtotal + +item, 0),
);

export const selectedGas = createSelector(unitsState, items =>
  items.find(unit => unit.selected === true),
);

export const editedGas = createSelector(unitsState, items =>
  items.filter(unit => unit.edit === true),
);

//TODO Create useRedux hook to export selectors and dispatch bulk
