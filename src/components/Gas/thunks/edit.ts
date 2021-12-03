import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, Url } from "../../../app/constants";
import { setUtilitiesError, setUtilitiesPending } from "../gasSlice";
import { RootState } from "../../../app/store";
import axios from "axios";

export const editAsyncUnit = async (
	id: string,
	{ dispatch, getState }: { dispatch: Function; getState: Function }
): Promise<void> => {
	const state = getState() as RootState;
	const gasUnits = state.gas.units;
	const selected = gasUnits.find(unit => unit.id === id);

	dispatch(setUtilitiesPending(true));
	try {
		await axios.put(`${BaseAPI.UTILITIES_URL}/${Url.GAS}/${id}`, selected);
	} catch {
		dispatch(setUtilitiesError());
	} finally {
		dispatch(setUtilitiesPending(false));
	}
};

export const editUnit = createAsyncThunk(
	`${Url.GAS}/editAsyncUnit`,
	editAsyncUnit
);
