import { GasFormProps, GasState } from "./types";
import { Pending } from "../../app/constants";
import { GasStateUnit } from ".";

const initialGasFormValues: GasFormProps = {
	citire: "",
	factura: "",
	dataCitire: "",
};

const initialState: GasState = {
	units: [],
	loading: {
		isLoading: false,
		message: Pending.MESSAGE,
	},
	error: null,
};

const initialEditUnit: GasStateUnit = {
	...initialGasFormValues,
	id: "",
	consum: "",
	selected: false,
	platit: false,
	edit: false,
};

export { initialGasFormValues, initialState, initialEditUnit };
