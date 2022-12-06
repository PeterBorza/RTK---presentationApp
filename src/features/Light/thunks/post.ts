import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, LinkUrls } from "app/constants";
import { addUnit, setUtilitiesError, setUtilitiesPending } from "../lightSlice";
import { UtilityStateUnit } from "../../Utilities";
import axios from "axios";

const instance = axios.create({
    baseURL: `${BaseAPI.UTILITIES_URL}/${LinkUrls.LIGHT}`,
    method: "POST",
});

export const postAsyncUtility = async (
    data: UtilityStateUnit,
    { dispatch }: { dispatch: Function },
): Promise<void> => {
    dispatch(setUtilitiesPending(true));
    try {
        await instance.request({ data }).then(response => dispatch(addUnit(response.data)));
    } catch {
        dispatch(setUtilitiesError(true));
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const postUtility = createAsyncThunk(`${LinkUrls.LIGHT}/postAsyncUtility`, postAsyncUtility);
