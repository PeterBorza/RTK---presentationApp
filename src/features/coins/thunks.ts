import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, Url } from "app/constants";
import axios from "axios";
import { setUtilitiesPending } from "features/Gas/gasSlice";

export const getCoinsAPI = createAsyncThunk(
    `${Url.COINS}/getCoinsAPI`,
    async (_, thunkApi): Promise<void> => {
        thunkApi.dispatch(setUtilitiesPending(true));
        try {
            await axios
                .get(`${BaseAPI.COINS_URL}/${Url.COINS}`) // ?_limit= 2 "get only this amount"
                .then(response => {
                    console.log(response.data);
                });
        } catch (error) {
            console.warn(`This is due to: ${error}`);
        } finally {
            thunkApi.dispatch(setUtilitiesPending(false));
        }
    },
);
