import { createAsyncThunk } from "@reduxjs/toolkit";
import { LinkUrls, AppDispatch, UTILITIES_URL } from "app";
import { deleteUnit, setUtilitiesError, setUtilitiesPending } from "../gasSlice";
import axios from "axios";

export const deleteAsyncUtility = async (
    id: string,
    { dispatch }: { dispatch: AppDispatch },
): Promise<void> => {
    dispatch(setUtilitiesPending(true));
    try {
        await axios.delete(`${UTILITIES_URL}/${LinkUrls.GAS}/${id}`);
        dispatch(deleteUnit(id));
    } catch {
        dispatch(setUtilitiesError(true));
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const deleteUtilityUnit = createAsyncThunk<Promise<void>, string, { dispatch: AppDispatch }>(
    `${LinkUrls.GAS}/deleteAsyncUtility`,
    deleteAsyncUtility,
);
