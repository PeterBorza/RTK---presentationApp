import { FormProps, UtilityState, UtilityStateUnit } from "../Utilities";
import { Pending } from "../../app/constants";
import { format } from "date-fns";
import { DateFormats } from "../../app";

const initialFormValues: FormProps = {
    citire: "",
    factura: "",
    dataCitire: format(new Date(), DateFormats.STANDARD),
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
