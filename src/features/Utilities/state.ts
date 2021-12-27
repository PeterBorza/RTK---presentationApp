import { FormProps, UtilityState, UtilityStateUnit } from "../Utilities";
import { Pending } from "../../app/constants";
import { format } from "date-fns";
import { DateFormats } from "../../app";

const initialFormValues: FormProps = {
    index: "",
    bill: "",
    readDate: format(new Date(), DateFormats.STANDARD),
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
    consumption: "",
    estimate: null,
    selected: false,
    payed: false,
    edit: false,
};

export { initialFormValues, initialState, initialEditUnit };
