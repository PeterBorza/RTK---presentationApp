import { FormProps, UtilityState } from "./types";
import { Pending } from "../../app/constants";
import { UtilityStateUnit } from ".";

const initialFormValues: FormProps = {
	citire: "",
	factura: "",
	dataCitire: "",
};

const initialState: UtilityState = {
	units: [],
	loading: {
		isLoading: false,
		message: Pending.MESSAGE,
	},
	error: null,
};

const initialEditUnit: UtilityStateUnit = {
	...initialFormValues,
	id: "",
	consum: "",
	selected: false,
	platit: false,
	edit: false,
};

export { initialFormValues, initialState, initialEditUnit };
