import { FormProps, UtilityState, UtilityStateUnit } from "../Utilities";
import { UtilitiesLoading } from "./constants";

const initialFormValues: FormProps = {
  index: "",
  bill: "",
  readDate: "",
};

const initialState: UtilityState = {
  units: [],
  loading: {
    isLoading: false,
    message: UtilitiesLoading.MESSAGE,
  },
  error: false,
  maxIndex: 300,
};

// TODO add selected to state, represented with id.

const initialEditUnit: UtilityStateUnit = {
  ...initialFormValues,
  id: "",
  consumption: 0,
  estimate: null,
  selected: false,
  payed: false,
  edit: false,
};

export { initialFormValues, initialState, initialEditUnit };
