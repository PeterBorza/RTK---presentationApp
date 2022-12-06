import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, LinkUrls } from "app/constants";
import { deleteUnit, setUtilitiesError, setUtilitiesPending } from "../lightSlice";
import axios from "axios";

export const deleteAsyncUtility = async (
    id: string,
    { dispatch }: { dispatch: Function },
): Promise<void> => {
    dispatch(setUtilitiesPending(true));
    try {
        await axios
            .delete(`${BaseAPI.UTILITIES_URL}/${LinkUrls.LIGHT}/${id}`)
            .then(dispatch(deleteUnit(id)));
    } catch {
        dispatch(setUtilitiesError(true));
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const deleteUtilityUnit = createAsyncThunk(
    `${LinkUrls.LIGHT}/deleteAsyncUtility`,
    deleteAsyncUtility,
);
