import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface GasUnits {
	gasUnitsReadingDate: string;
	gasUnits: number;
	gasUsage: number;
	sumOfGasBill: number;
	isGasBillPayed: boolean;
}

export interface GasState {
	id: string;
	units: GasUnits;
	selected: boolean;
}

export interface LightState {
	id: string;
	lightUnits: number;
	lightUnitsReadingDate: string;
	sumOfLightBill: number;
	isLightBillPayed: boolean;
	lightUsage: number;
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
	gasLabels: string[];
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
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: false,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: false,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: false,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: false,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: false,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: false,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: false,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: true,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: false,
			},
			selected: false,
		},
		{
			id: uuid(),
			units: {
				gasUnits: 450,
				gasUnitsReadingDate: "02/09/2021",
				sumOfGasBill: 389,
				gasUsage: 1100,
				isGasBillPayed: false,
			},
			selected: false,
		},
	],
	light: [
		{
			id: uuid(),
			lightUnits: 200,
			lightUnitsReadingDate: "",
			sumOfLightBill: 176.5,
			isLightBillPayed: true,
			lightUsage: 250,
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
	gasLabels: ["data", "citire", "consum", "factura", "platit?"],
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
	},
});

export const { selectGas } = houseSlice.actions;

export default houseSlice.reducer;
