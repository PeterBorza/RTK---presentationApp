import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../../app/constants";
import {
	deleteUnit,
	setUtilitiesError,
	setUtilitiesPending,
} from "../utilitiesSlice";
import axios from "axios";

export const deleteAsyncUtility = async (
	{ id, utility }: { id: string; utility: string },
	{ dispatch }: { dispatch: Function }
): Promise<void> => {
	dispatch(setUtilitiesPending(true));
	try {
		await axios
			.delete(`${BaseAPI.UTILITIES_URL}/${utility}/${id}`)
			.then(dispatch(deleteUnit(id)));
	} catch {
		dispatch(setUtilitiesError());
	} finally {
		dispatch(setUtilitiesPending(false));
	}
};

export const deleteUtilityUnit = createAsyncThunk(
	"utilities/deleteAsyncUtility",
	deleteAsyncUtility
);
