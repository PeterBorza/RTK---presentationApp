import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface GasUnits {
	gasUnitsReadingDate: string;
	gasUnits: number;
	gasUsage: number;
	sumOfGasBill: number;
	isGasBillPayed: boolean;
}
export interface LightUnits {
	lightUnitsReadingDate: string;
	lightUnits: number;
	lightUsage: number;
	sumOfLightBill: number;
	isLightBillPayed: boolean;
}

export interface GasState {
	id: string;
	units: GasUnits;
	selected: boolean;
}

export interface LightState {
	id: string;
	units: LightUnits;
	selected: boolean;
}

export interface WaterState {
	id: string;
	kitchenUnits: number;
	bathUnits: number;
	waterReadingDate: string;
	expences: number;
	month: string;
	isExpencesPayed: boolean;
	selected: boolean;
}

interface MyExpences {
	gas: GasState[];
	light: LightState[];
	water: WaterState[];
	labels: string[];
}

const initialState: MyExpences = {
	gas: [
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "29/10/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
	],
	light: [
		{
			id: uuid(),
			units: {
				lightUnits: 200,
				lightUnitsReadingDate: "29/10/2021",
				sumOfLightBill: 176.5,
				isLightBillPayed: true,
				lightUsage: 250,
			},
			selected: false,
		},
	],
	water: [
		{
			id: uuid(),
			kitchenUnits: 455,
			bathUnits: 654,
			waterReadingDate: "",
			expences: 180,
			month: "",
			isExpencesPayed: false,
			selected: false,
		},
	],
	labels: ["data", "citire", "consum", "factura", "platit?"],
};

export const houseSlice = createSlice({
	name: "house",
	initialState,
	reducers: {
		selectGas: (
			{ gas }: MyExpences,
			{ payload }: PayloadAction<string>
		) => {
			gas.map(
				item => (item.selected = item.id === payload ? true : false)
			);
		},
		selectLight: (
			{ light }: MyExpences,
			{ payload }: PayloadAction<string>
		) => {
			light.map(
				item => (item.selected = item.id === payload ? true : false)
			);
		},
	},
});

export const { selectGas, selectLight } = houseSlice.actions;

export default houseSlice.reducer;
