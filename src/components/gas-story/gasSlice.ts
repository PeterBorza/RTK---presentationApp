import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pending, Error } from "../../app/constants";

export interface GasFormProps {
	citire: string;
	consum: string;
	factura: string;
	dataCitire: string;
}

export interface GasStateItem extends GasFormProps {
	id: string;
	selected: boolean;
	platit: boolean;
}

export interface GasState {
	units: GasStateItem[];
	labels: string[];
	loading: {
		isLoading: boolean;
		message: string;
	};
	error: string | null;
}

const initialState: GasState = {
	units: [],
	labels: ["data", "citire", "consum", "factura", "platit"],
	loading: {
		isLoading: false,
		message: Pending.MESSAGE,
	},
	error: null,
};

export const gasSlice = createSlice({
	name: "gas",
	initialState,
	reducers: {
		selectGas: (state: GasState, { payload }: PayloadAction<string>) => {
			state.units.map(
				item => (item.selected = item.id === payload ? true : false)
			);
		},
		togglePayed: (state: GasState, { payload }: PayloadAction<string>) => {
			const selected = state.units.find(unit => unit.id === payload);
			if (selected) {
				selected.platit = !selected.platit;
			}
		},
		addGasUnit: (
			state: GasState,
			{ payload }: PayloadAction<GasStateItem>
		) => {
			state.units.push(payload);
		},
		getGasUnits: (
			state: GasState,
			{ payload }: PayloadAction<GasStateItem[]>
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
	togglePayed,
	addGasUnit,
	getGasUnits,
	deleteGasUnit,
	setGasPending,
	setGasError,
} = gasSlice.actions;
export default gasSlice.reducer;
