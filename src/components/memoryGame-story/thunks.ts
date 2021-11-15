import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../app/constants";
import { addColors, setError, setPending } from "../memoryGame-story";

export const getAsyncColors = async (
	colors: string,
	{
		dispatch,
	}: {
		dispatch: Function;
	}
): Promise<void> => {
	dispatch(setPending(true));
	try {
		const response = await fetch(`${BaseAPI.COLORSETS_URL}/${colors}`);

		const data = await response.json();
		data && dispatch(addColors(data));
	} catch {
		dispatch(setError(true));
	} finally {
		dispatch(setPending(false));
	}
};

export const getColors = createAsyncThunk(
	"memoryGame/getAsyncColors",
	getAsyncColors
);
