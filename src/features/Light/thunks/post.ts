import { createAsyncThunk } from "@reduxjs/toolkit";
import { UTILITIES_URL, LinkUrls } from "app/constants";
import { addUnit, setUtilitiesError, setUtilitiesPending } from "../lightSlice";
import { UtilityStateUnit } from "../../Utilities";
import axios from "axios";
import { AppDispatch } from "app";

const instance = axios.create({
    baseURL: `${UTILITIES_URL}/${LinkUrls.LIGHT}`,
    method: "POST",
});

export const createLightThunk = async (
    data: UtilityStateUnit,
    { dispatch }: { dispatch: AppDispatch },
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

export const createLight = createAsyncThunk<
    Promise<void>,
    UtilityStateUnit,
    { dispatch: AppDispatch }
>(`${LinkUrls.LIGHT}/createLight`, createLightThunk);
