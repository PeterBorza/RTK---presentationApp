import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, Url } from "app/constants";
import { getUnits, setUtilitiesError, setUtilitiesPending } from "../lightSlice";
import axios from "axios";

export const getAsyncUtility = createAsyncThunk(
    `${Url.LIGHT}/getAsyncUtility`,
    async (_, thunkApi): Promise<void> => {
        thunkApi.dispatch(setUtilitiesPending(true));
        try {
            await axios
                .get(`${BaseAPI.UTILITIES_URL}/${Url.LIGHT}`) // ?_limit= 2 get only this amount
                .then(response => thunkApi.dispatch(getUnits(response.data)));
        } catch (error) {
            thunkApi.dispatch(setUtilitiesError(true));
            console.warn(`This is due to: ${error}`);
        } finally {
            thunkApi.dispatch(setUtilitiesPending(false));
        }
    },
);
