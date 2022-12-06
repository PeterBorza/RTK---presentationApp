import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, LinkUrls } from "app/constants";
import { deleteUnit, setUtilitiesError, setUtilitiesPending } from "../gasSlice";
import axios from "axios";

export const deleteAsyncUtility = async (
    id: string,
    { dispatch }: { dispatch: Function },
): Promise<void> => {
    dispatch(setUtilitiesPending(true));
    try {
        await axios
            .delete(`${BaseAPI.UTILITIES_URL}/${LinkUrls.GAS}/${id}`)
            .then(dispatch(deleteUnit(id)));
    } catch {
        dispatch(setUtilitiesError(true));
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const deleteUtilityUnit = createAsyncThunk(
    `${LinkUrls.GAS}/deleteAsyncUtility`,
    deleteAsyncUtility,
);
