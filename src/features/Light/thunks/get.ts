import { createAsyncThunk } from "@reduxjs/toolkit";
import { UTILITIES_URL, LinkUrls } from "app/constants";
import { getUnits, setUtilitiesError, setUtilitiesPending } from "../lightSlice";
import axios from "axios";
import { AppDispatch } from "app";

const getLightThunk = async (_: void, { dispatch }: { dispatch: AppDispatch }) => {
    try {
        dispatch(setUtilitiesPending(true));
        await axios
            .get(`${UTILITIES_URL}/${LinkUrls.LIGHT}`) // ?_limit= 2 get only this amount
            .then(response => dispatch(getUnits(response.data)));
    } catch (error) {
        dispatch(setUtilitiesError(true));
        console.warn(`This is due to: ${error}`);
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const getLight = createAsyncThunk<Promise<void>, void, { dispatch: AppDispatch }>(
    `${LinkUrls.LIGHT}/getLight`,
    getLightThunk,
);
