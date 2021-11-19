import { GasFormProps, GasState } from "./types";
import { format } from "date-fns";
import { Pending } from "../../app/constants";
import { GasStateUnit } from ".";

const initialGasFormValues: GasFormProps = {
	citire: "",
	factura: "",
	dataCitire: format(new Date(), "dd/MM/yyyy"),
};

const initialState: GasState = {
	units: [],
	labels: ["data", "citire", "consum", "factura", "platit"],
	loading: {
		isLoading: false,
		message: Pending.MESSAGE,
	},
	error: null,
};

const initialEditUnit: GasStateUnit = {
	citire: "",
	factura: "",
	dataCitire: format(new Date(), "dd/MM/yyyy"),
	id: "",
	consum: "",
	selected: false,
	platit: false,
	edit: false,
};

export { initialGasFormValues, initialState, initialEditUnit };
