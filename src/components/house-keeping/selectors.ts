import { typeofHouseState } from "../../app/store";

export const houseState = ({ house }: typeofHouseState) => house;

export const gasState = ({ house }: typeofHouseState) => house.gas;

export const selectedGas = ({ house }: typeofHouseState) => {
	house.gas.find(item => item.selected === true);
};

export const lightState = ({ house }: typeofHouseState) => house.light;

export const waterState = ({ house }: typeofHouseState) => house.water;

export const gasLabelState = ({ house }: typeofHouseState) => house.gasLabels;
