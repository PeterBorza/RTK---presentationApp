import { createAsyncThunk } from "@reduxjs/toolkit";
import { UTILITIES_URL, LinkUrls } from "app/constants";
import { deleteUnit, setUtilitiesError, setUtilitiesPending } from "../lightSlice";
import axios from "axios";
import { AppDispatch } from "app";

export const deleteAsyncUtility = async (
    id: string,
    { dispatch }: { dispatch: AppDispatch },
): Promise<void> => {
    dispatch(setUtilitiesPending(true));
    try {
        await axios
            .delete(`${UTILITIES_URL}/${LinkUrls.LIGHT}/${id}`)
            .then(() => dispatch(deleteUnit(id)));
    } catch {
        dispatch(setUtilitiesError(true));
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const deleteLight = createAsyncThunk<Promise<void>, string, { dispatch: AppDispatch }>(
    `${LinkUrls.LIGHT}/deleteLight`,
    deleteAsyncUtility,
);
