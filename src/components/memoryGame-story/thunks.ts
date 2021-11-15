import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI } from "../../app/constants";
import { addColors } from "../memoryGame-story";
import { setError } from "../bubble-story/bubbleSlice";
import { setPending } from "./memoryGameSlice";

export const getAsyncColors = createAsyncThunk(
	"memoryGame/getAsyncColors",
	async (_, { dispatch }: { dispatch: Function }): Promise<void> => {
		dispatch(setPending(true));
		try {
			const response = await fetch(`${BaseAPI.COLORSETS_URL}/colorSets`);

			const data = await response.json();
			dispatch(addColors(data));

			return data;
		} catch {
			dispatch(setError());
		} finally {
			dispatch(setPending(false));
		}
	}
);
