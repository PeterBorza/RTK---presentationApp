import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../app/constants";
import { typeofGasState } from "../../app/store";
import {
	addGasUnit,
	deleteGasUnit,
	GasStateItem,
	getGasUnits,
	togglePayed,
} from "./gasSlice";
import { setError } from "../bubble-story/bubbleSlice";
import axios from "axios";

// ************************************************************************************

export const getAsyncGas = createAsyncThunk(
	"gas/getAsyncGas",
	async (_, thunkApi): Promise<void> => {
		try {
			await axios
				.get(`${BaseAPI.GAS_UNITS_URL}/units?`) // ?_limit= 2 get only this amount
				.then(response =>
					thunkApi.dispatch(getGasUnits(response.data))
				);
		} catch {
			thunkApi.dispatch(setError());
		}
	}
);

// ************************************************************************************

export const postAsyncGas = async (
	data: GasStateItem,
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	try {
		await axios
			.post(`${BaseAPI.GAS_UNITS_URL}/units`, data)
			.then(response => dispatch(addGasUnit(response.data)));
	} catch {
		dispatch(setError());
	}
};

export const postGas = createAsyncThunk("gas/postAsyncGas", postAsyncGas);

// ************************************************************************************

export const deleteAsyncGas = async (
	id: string,
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	try {
		await axios
			.delete(`${BaseAPI.GAS_UNITS_URL}/units/${id}`)
			.then(dispatch(deleteGasUnit(id)));
	} catch {
		dispatch(setError());
	}
};

export const deleteGas = createAsyncThunk("gas/deleteAsyncGas", deleteAsyncGas);

// ************************************************************************************

export const putAsyncGasPayed = async (
	item: GasStateItem,
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	try {
		await axios
			.put(`${BaseAPI.GAS_UNITS_URL}/units/${item.id}`, {
				...item,
				platit: !item.platit,
			})
			.then(dispatch(togglePayed(item.id)));
	} catch {
		dispatch(setError());
	}
};

export const togglePayedBill = createAsyncThunk(
	"gas/putAsyncGasPayed",
	putAsyncGasPayed
);
