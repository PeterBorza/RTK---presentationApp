import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../app/constants";
import {
	addGasUnit,
	deleteGasUnit,
	getGasUnits,
	togglePayed,
	setGasError,
	setGasPending,
} from "./gasSlice";
import { GasStateUnit, GasState } from "./types";
import axios from "axios";

// ************************************************************************************

const instance = axios.create({
	baseURL: "http://localhost:5006/units",
	method: "POST",
});

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

export const toggleAsyncGasPayed = async (
	item: GasStateUnit,
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	dispatch(setGasPending(true));
	try {
		await axios
			.put(`${BaseAPI.GAS_UNITS_URL}/units/${item.id}`, {
				...item,
				platit: !item.platit,
			})
			.then(dispatch(togglePayed(item.id)));
	} catch {
		dispatch(setGasError());
	} finally {
		dispatch(setGasPending(false));
	}
};

export const togglePayedBill = createAsyncThunk(
	"gas/toggleAsyncGasPayed",
	toggleAsyncGasPayed
);

// ************************************************************************************

export const editAsyncGasUnit = async (
	{ id, payload }: { id: string; payload: GasStateUnit },
	{ dispatch, getState }: { dispatch: Function; getState: Function }
): Promise<void> => {
	dispatch(setGasPending(true));
	const { units } = getState() as GasState;
	// const editedGasIndex = units.findIndex(item => item.id === id);
	const edited = {
		...payload,
	};
	try {
		await axios.put(`${BaseAPI.GAS_UNITS_URL}/units/${id}`, edited);
		// .then(dispatch(addGasUnit(edited)));
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
