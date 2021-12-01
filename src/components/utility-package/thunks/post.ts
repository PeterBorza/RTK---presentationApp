import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import {
	addUnit,
	setUtilitiesError,
	setUtilitiesPending,
} from "../utilitiesSlice";
import { UtilityStateUnit, UtilityParam } from "../types";
import axios from "axios";

const instance = (utility: UtilityParam) =>
	axios.create({
		baseURL: `${BaseAPI.UTILITIES_URL}/${utility}`,
		method: "POST",
	});

export const postAsyncUtility = async (
	{ data, utility }: { data: UtilityStateUnit; utility: UtilityParam },
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	dispatch(setUtilitiesPending(true));
	try {
		await instance(utility)
			.request({ data })
			.then(response => dispatch(addUnit(response.data)));
	} catch {
		dispatch(setUtilitiesError());
	} finally {
		dispatch(setUtilitiesPending(false));
	}
};

export const postUtility = createAsyncThunk(
	"utilities/postAsyncUtility",
	postAsyncUtility
);
