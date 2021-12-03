import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import { UtilityParam } from "../types";
import {
	getUnits,
	setUtilitiesError,
	setUtilitiesPending,
} from "../utilitiesSlice";
import axios from "axios";

export const getAsyncUtility = createAsyncThunk(
	"utilities/getAsyncUtility",
	async (utility: UtilityParam, thunkApi): Promise<void> => {
		thunkApi.dispatch(setUtilitiesPending(true));
		try {
			await axios
				.get(`${BaseAPI.UTILITIES_URL}/${utility}`) // ?_limit= 2 get only this amount
				.then(response => thunkApi.dispatch(getUnits(response.data)));
		} catch {
			thunkApi.dispatch(setUtilitiesError());
		} finally {
			thunkApi.dispatch(setUtilitiesPending(false));
		}
	}
);
