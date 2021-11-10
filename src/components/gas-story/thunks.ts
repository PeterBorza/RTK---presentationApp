import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../app/constants";
import {
	addGasUnit,
	deleteGasUnit,
	GasStateItem,
	getGasUnits,
	togglePayed,
	setGasError,
	setGasPending,
} from "./gasSlice";
import axios from "axios";

// ************************************************************************************

export const getAsyncGas = createAsyncThunk(
	"gas/getAsyncGas",
	async (_, thunkApi): Promise<void> => {
		thunkApi.dispatch(setGasPending(true));
		try {
			await axios
				.get(`${BaseAPI.GAS_UNITS_URL}/units`) // ?_limit= 2 get only this amount
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

// ************************************************************************************

export const postAsyncGas = async (
	data: GasStateItem,
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	dispatch(setGasPending(true));
	try {
		await axios
			.post(`${BaseAPI.GAS_UNITS_URL}/units`, data)
			.then(response => dispatch(addGasUnit(response.data)));
	} catch {
		dispatch(setGasError());
	} finally {
		dispatch(setGasPending(false));
	}
};

export const postGas = createAsyncThunk("gas/postAsyncGas", postAsyncGas);

// ************************************************************************************

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
		dispatch(setGasError());
	}
};

export const togglePayedBill = createAsyncThunk(
	"gas/putAsyncGasPayed",
	putAsyncGasPayed
);

// ************************************************************************************

export const putAsyncGasDate = async (
	{ item, payload }: { item: GasStateItem; payload: string },
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	try {
		await axios
			.put(`${BaseAPI.GAS_UNITS_URL}/units/${item.id}`, {
				...item,
				dataCitire: payload,
			})
			.then(dispatch(togglePayed(item.id)));
	} catch {
		dispatch(setGasError());
	}
};

export const editDate = createAsyncThunk(
	"gas/putAsyncGasDate",
	putAsyncGasDate
);
