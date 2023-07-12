import { createAsyncThunk } from "@reduxjs/toolkit";
import { LinkUrls, UTILITIES_URL } from "app/constants";
import { getUnits, setUtilitiesError, setUtilitiesPending } from "../gasSlice";
import axios from "axios";
import { AppDispatch } from "app";

const getGas = async (_: void, { dispatch }: { dispatch: AppDispatch }) => {
    try {
        dispatch(setUtilitiesPending(true));
        await axios
            .get(`${UTILITIES_URL}/${LinkUrls.GAS}`) // ?_limit= 2 "get only this amount"
            .then(response => {
                dispatch(getUnits(response.data));
            });
    } catch (error) {
        dispatch(setUtilitiesError(true));
        console.warn(`This is due to: ${error}`);
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const getAsyncUtility = createAsyncThunk<Promise<void>, void, { dispatch: AppDispatch }>(
    `${LinkUrls.GAS}/getAsyncUtility`,
    getGas,
);
