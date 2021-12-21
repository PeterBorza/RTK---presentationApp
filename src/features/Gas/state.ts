import { FormProps, UtilityState, UtilityStateUnit } from "../Utilities";

import { Pending } from "../../app/constants";

const initialFormValues: FormProps = {
    index: "",
    bill: "",
    readDate: "",
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
    selected: false,
    payed: false,
    edit: false,
};

export { initialFormValues, initialState, initialEditUnit };
