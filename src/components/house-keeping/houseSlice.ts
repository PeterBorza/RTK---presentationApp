import { createSlice } from "@reduxjs/toolkit";
import { typeofHouseState } from "../../app/store";

interface GasState {
	gasUnits: number;
	gasUnitsReadingDate: string;
	sumOfGasBill: number;
	isGasBillPayed: boolean;
	gasUsage: number;
}

interface LightState {
	lightUnits: number;
	lightUnitsReadingDate: string;
	sumOfLightBill: number;
	isLightBillPayed: boolean;
	lightUsage: number;
}

interface WaterState {
	kitchenUnits: number;
	bathUnits: number;
	waterReadingDate: string;
	expences: number;
	month: string;
	isExpencesPayed: boolean;
}

interface MyExpences {
	gas: GasState[];
	light: LightState[];
	water: WaterState[];
}

const initialState: MyExpences = {
	gas: [
		{
			gasUnits: 450,
			gasUnitsReadingDate: "",
			sumOfGasBill: 389,
			isGasBillPayed: false,
			gasUsage: 1100,
		},
	],
	light: [
		{
			lightUnits: 200,
			lightUnitsReadingDate: "",
			sumOfLightBill: 176.5,
			isLightBillPayed: true,
			lightUsage: 250,
		},
	],
	water: [
		{
			kitchenUnits: 455,
			bathUnits: 654,
			waterReadingDate: "",
			expences: 180,
			month: "",
			isExpencesPayed: false,
		},
	],
};

export const houseSlice = createSlice({
	name: "house",
	initialState,
	reducers: {},
});

// export const {} = houseSlice.actions;
export const HouseState = (state: typeofHouseState) => state.house;

export default houseSlice.reducer;
