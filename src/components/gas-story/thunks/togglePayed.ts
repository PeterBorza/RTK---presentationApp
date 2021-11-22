import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import { togglePayed, setGasError, setGasPending } from "../gasSlice";
import { GasStateUnit } from "../types";
import axios from "axios";

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
