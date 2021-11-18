import { format } from "date-fns";
import { GasFormProps, GasState } from "./types";
import { Pending } from "../../app/constants";

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

export { initialGasFormValues, initialState };
