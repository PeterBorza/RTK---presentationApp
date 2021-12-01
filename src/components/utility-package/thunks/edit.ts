import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import { setUtilitiesError, setUtilitiesPending } from "../utilitiesSlice";
import { typeofUtilityState } from "../../../app/store";
import axios from "axios";

export const editAsyncUnit = async (
	{ id, utility }: { id: string; utility: string },
	{ dispatch, getState }: { dispatch: Function; getState: Function }
): Promise<void> => {
	const state = getState() as typeofUtilityState;
	const gasUnits = state.utilities.units;
	const selected = gasUnits.find(unit => unit.id === id);

	dispatch(setUtilitiesPending(true));
	try {
		await axios.put(`${BaseAPI.UTILITIES_URL}/${utility}/${id}`, selected);
	} catch {
		dispatch(setUtilitiesError());
	} finally {
		dispatch(setUtilitiesPending(false));
	}
};

export const editUnit = createAsyncThunk(
	"utilities/editAsyncUnit",
	editAsyncUnit
);
