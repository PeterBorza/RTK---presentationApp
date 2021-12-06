import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, Url } from "../../../app/constants";
import { setUtilitiesError, setUtilitiesPending } from "../gasSlice";
import axios from "axios";
import { UtilityStateUnit } from "..";

export const editAsyncUnit = async (
	item: UtilityStateUnit,
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	dispatch(setUtilitiesPending(true));
	try {
		await axios.put(`${BaseAPI.UTILITIES_URL}/${Url.GAS}/${item.id}`, item);
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
