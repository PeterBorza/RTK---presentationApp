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

export interface MyExpences {
	gas: GasState[];
	light: LightState[];
	water: WaterState[];
	labels: string[];
}