import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, Url } from "../../../app/constants";
import {
	getUnits,
	resetSelected,
	setUtilitiesError,
	setUtilitiesPending,
} from "../gasSlice";
import axios from "axios";

export const getAsyncUtility = createAsyncThunk(
	`${Url.GAS}/getAsyncUtility`,
	async (_, thunkApi): Promise<void> => {
		thunkApi.dispatch(setUtilitiesPending(true));
		try {
			await axios
				.get(`${BaseAPI.UTILITIES_URL}/${Url.GAS}`) // ?_limit= 2 get only this amount
				.then(response => {
					thunkApi.dispatch(getUnits(response.data));
					thunkApi.dispatch(resetSelected());
				});
		} catch {
			thunkApi.dispatch(setUtilitiesError());
		} finally {
			thunkApi.dispatch(setUtilitiesPending(false));
		}
	}
);
