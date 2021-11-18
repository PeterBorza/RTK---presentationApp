import { typeofGasState } from "../../app/store";

export const gasState = ({ gas }: typeofGasState) => gas;

export const unitsState = ({ gas }: typeofGasState) => gas.units;

export const selectedGas = ({ gas }: typeofGasState) => {
	const idx = gas.units.findIndex(item => item.selected === true);
	return gas.units[idx];
};

export const labels = ({ gas }: typeofGasState) => gas.labels;

export const pendingGasState = ({ gas }: typeofGasState) =>
	gas.loading.isLoading;

export const errorGasState = ({ gas }: typeofGasState) => gas.error;
