import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Error } from "../../app/constants";
import { UtilityStateUnit, UtilityState, UnitId } from "./types";
import { initialState } from "./state";

export const gasSlice = createSlice({
	name: "gas",
	initialState,
	reducers: {
		selectCard: (
			state: UtilityState,
			{ payload }: PayloadAction<UnitId>
		) => {
			state.units.map(
				item => (item.selected = item.id === payload ? true : false)
			);
		},
		resetSelected: (state: UtilityState) => {
			const selected = state.units.find(unit => unit.selected === true);
			if (selected) selected.selected = false;
		},
		togglePayed: (
			state: UtilityState,
			{ payload }: PayloadAction<UnitId>
		) => {
			const selected = state.units.find(unit => unit.id === payload);
			if (selected) {
				selected.platit = !selected.platit;
			}
		},
		addUnit: (
			state: UtilityState,
			{ payload }: PayloadAction<UtilityStateUnit>
		) => {
			state.units.push(payload);
		},
		getUnits: (
			state: UtilityState,
			{ payload }: PayloadAction<UtilityStateUnit[]>
		) => {
			state.units = payload;
		},
		deleteUnit: (
			state: UtilityState,
			{ payload }: PayloadAction<UnitId>
		) => {
			state.units = state.units.filter(units => units.id !== payload);
		},
		setUtilitiesPending: (
			state: UtilityState,
			{ payload }: PayloadAction<boolean>
		) => {
			state.loading.isLoading = payload;
		},
		setUtilitiesError: (state: UtilityState) => {
			state.error = Error.MESSAGE;
		},
	},
});

export const {
	selectCard,
	resetSelected,
	togglePayed,
	addUnit,
	getUnits,
	deleteUnit,
	setUtilitiesPending,
	setUtilitiesError,
} = gasSlice.actions;
export default gasSlice.reducer;