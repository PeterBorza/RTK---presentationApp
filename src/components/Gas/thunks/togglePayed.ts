import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, Url } from "../../../app/constants";
import {
	togglePayed,
	setUtilitiesError,
	setUtilitiesPending,
} from "../gasSlice";
import { UtilityStateUnit } from "../types";
import axios from "axios";

export const toggleAsyncPayed = async (
	item: UtilityStateUnit,
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	dispatch(setUtilitiesPending(true));
	try {
		await axios
			.put(`${BaseAPI.UTILITIES_URL}/${Url.GAS}/${item.id}`, {
				...item,
				platit: !item.platit,
			})
			.then(dispatch(togglePayed(item.id)));
	} catch {
		dispatch(setUtilitiesError());
	} finally {
		dispatch(setUtilitiesPending(false));
	}
};

export const togglePayedBill = createAsyncThunk(
	`${Url.GAS}/toggleAsyncPayed`,
	toggleAsyncPayed
);
