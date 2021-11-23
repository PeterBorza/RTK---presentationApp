import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import { setGasError, setGasPending } from "../gasSlice";
import { typeofGasState } from "../../../app/store";
import axios from "axios";

export const editAsyncGasUnit = async (
	id: string,
	{ dispatch, getState }: { dispatch: Function; getState: Function }
): Promise<void> => {
	const state = getState() as typeofGasState;
	const gasUnits = state.gas.units;
	const selected = gasUnits.find(unit => unit.id === id);

	dispatch(setGasPending(true));
	try {
		await axios.put(`${BaseAPI.GAS_UNITS_URL}/units/${id}`, selected);
	} catch {
		dispatch(setGasError());
	} finally {
		dispatch(setGasPending(false));
	}
};

export const editUnit = createAsyncThunk(
	"gas/editAsyncGasUnit",
	editAsyncGasUnit
);
