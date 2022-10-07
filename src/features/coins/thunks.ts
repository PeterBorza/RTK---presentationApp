import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, Url, AppDispatch } from "app";
import axios from "axios";
import { setUtilitiesPending } from "features/Gas/gasSlice";

export const getCoinsAPI = createAsyncThunk(
    `${Url.COINS}/getCoinsAPI`,
    async ({ dispatch }: { dispatch: AppDispatch }): Promise<void> => {
        dispatch(setUtilitiesPending(true));
        try {
            await axios
                .get(`${BaseAPI.COINS_URL}/${Url.COINS}`) // ?_limit= 2 "get only this amount"
                .then(response => {
                    console.log("COINS_API :", response.data);
                });
        } catch (error) {
            console.warn(`This is due to: ${error}`);
        } finally {
            dispatch(setUtilitiesPending(false));
        }
    },
);
