import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GasFormProps {
	citire: string;
	consum: string;
	factura: string;
}

export interface GasStateItem extends GasFormProps {
	id: string;
	selected: boolean;
	dataCitire: string;
	platit: boolean;
}

export interface GasState {
	units: GasStateItem[];
	labels: string[];
}

const initialState: GasState = {
	units: [],
	labels: ["data", "citire", "consum", "factura", "platit"],
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
	},
});

export const {
	selectGas,
	togglePayed,
	addGasUnit,
	getGasUnits,
	deleteGasUnit,
} = gasSlice.actions;
export default gasSlice.reducer;
