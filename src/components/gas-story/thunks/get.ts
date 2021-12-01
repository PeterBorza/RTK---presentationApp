import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import { getGasUnits, setGasError, setGasPending } from "../gasSlice";
import axios from "axios";

export const getAsyncGas = createAsyncThunk(
	"gas/getAsyncGas",
	async (_, thunkApi): Promise<void> => {
		thunkApi.dispatch(setGasPending(true));
		try {
			await axios
				.get(`${BaseAPI.UTILITIES_URL}/gas`) // ?_limit= 2 get only this amount
				.then(response =>
					thunkApi.dispatch(getGasUnits(response.data))
				);
		} catch {
			thunkApi.dispatch(setGasError());
		} finally {
			thunkApi.dispatch(setGasPending(false));
		}
	}
);
