import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Error } from "../../app/constants";
import { GasStateUnit, GasState, UnitId } from "./types";
import { initialState } from "./state";

export const gasSlice = createSlice({
	name: "gas",
	initialState,
	reducers: {
		selectGas: (state: GasState, { payload }: PayloadAction<UnitId>) => {
			state.units.map(
				item => (item.selected = item.id === payload ? true : false)
			);
		},
		resetSelected: (state: GasState) => {
			state.units.map(item => (item.selected = false));
		},
		togglePayed: (state: GasState, { payload }: PayloadAction<UnitId>) => {
			const selected = state.units.find(unit => unit.id === payload);
			if (selected) {
				selected.platit = !selected.platit;
			}
		},
		addGasUnit: (
			state: GasState,
			{ payload }: PayloadAction<GasStateUnit>
		) => {
			state.units.push(payload);
		},
		getGasUnits: (
			state: GasState,
			{ payload }: PayloadAction<GasStateUnit[]>
		) => {
			state.units = [...state.units, ...payload];
		},
		deleteGasUnit: (
			state: GasState,
			{ payload }: PayloadAction<UnitId>
		) => {
			state.units = state.units.filter(units => units.id !== payload);
		},
		setGasPending: (
			state: GasState,
			{ payload }: PayloadAction<boolean>
		) => {
			state.loading.isLoading = payload;
		},
		setGasError: (state: GasState) => {
			state.error = Error.MESSAGE;
		},
	},
});

export const {
	selectGas,
	resetSelected,
	togglePayed,
	addGasUnit,
	getGasUnits,
	deleteGasUnit,
	setGasPending,
	setGasError,
} = gasSlice.actions;
export default gasSlice.reducer;
