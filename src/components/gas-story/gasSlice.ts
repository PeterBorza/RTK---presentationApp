import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Error } from "../../app/constants";
import { GasStateUnit, GasState } from "./types";
import { initialState } from "./state";

export const gasSlice = createSlice({
	name: "gas",
	initialState,
	reducers: {
		selectGas: (state: GasState, { payload }: PayloadAction<string>) => {
			state.units.map(
				item => (item.selected = item.id === payload ? true : false)
			);
		},
		editGas: (
			state: GasState,
			{ payload }: PayloadAction<{ id: string; edit: boolean }>
		) => {
			state.units.forEach(unit => (unit.selected = false));
			const selected = state.units.find(unit => unit.id === payload.id);
			if (selected) selected.edit = payload.edit;
		},
		togglePayed: (state: GasState, { payload }: PayloadAction<string>) => {
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
			{ payload }: PayloadAction<string>
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
	editGas,
	togglePayed,
	addGasUnit,
	getGasUnits,
	deleteGasUnit,
	setGasPending,
	setGasError,
} = gasSlice.actions;
export default gasSlice.reducer;
