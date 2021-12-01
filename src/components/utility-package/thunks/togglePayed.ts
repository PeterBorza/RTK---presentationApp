import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import {
	togglePayed,
	setUtilitiesError,
	setUtilitiesPending,
} from "../utilitiesSlice";
import { UtilityStateUnit } from "../types";
import axios from "axios";

export const toggleAsyncPayed = async (
	{ item, utility }: { item: UtilityStateUnit; utility: string },
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	dispatch(setUtilitiesPending(true));
	try {
		await axios
			.put(`${BaseAPI.UTILITIES_URL}/${utility}/${item.id}`, {
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
	"utilities/toggleAsyncPayed",
	toggleAsyncPayed
);
