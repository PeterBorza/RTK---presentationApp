import { typeofGasState } from "../../app/store";

export const gasState = (state: typeofGasState) => state.gas;

export const selectedGas = (state: typeofGasState) => {
	state.gas.units.find(item => item.selected === true);
};

export const labels = (state: typeofGasState) => state.gas.labels;
