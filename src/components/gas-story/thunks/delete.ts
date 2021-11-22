import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import { deleteGasUnit, setGasError, setGasPending } from "../gasSlice";
import axios from "axios";

export const deleteAsyncGas = async (
	id: string,
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	dispatch(setGasPending(true));
	try {
		await axios
			.delete(`${BaseAPI.GAS_UNITS_URL}/units/${id}`)
			.then(dispatch(deleteGasUnit(id)));
	} catch {
		dispatch(setGasError());
	} finally {
		dispatch(setGasPending(false));
	}
};

export const deleteGas = createAsyncThunk("gas/deleteAsyncGas", deleteAsyncGas);
