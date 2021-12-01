import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import { addGasUnit, setGasError, setGasPending } from "../gasSlice";
import { GasStateUnit } from "../types";
import axios from "axios";

const instance = axios.create({
	baseURL: `${BaseAPI.UTILITIES_URL}/gas`,
	method: "POST",
});

export const postAsyncGas = async (
	data: GasStateUnit,
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	dispatch(setGasPending(true));
	try {
		await instance
			.request({ data })
			.then(response => dispatch(addGasUnit(response.data)));
	} catch {
		dispatch(setGasError());
	} finally {
		dispatch(setGasPending(false));
	}
};

export const postGas = createAsyncThunk("gas/postAsyncGas", postAsyncGas);
