import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import { setGasError, setGasPending } from "../gasSlice";
import { GasStateUnit } from "../types";
import axios from "axios";

export const editAsyncGasUnit = async (
	editedItem: GasStateUnit,
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	dispatch(setGasPending(true));
	try {
		await axios.put(`${BaseAPI.GAS_UNITS_URL}/units/${editedItem.id}`, {
			...editedItem,
		});
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
