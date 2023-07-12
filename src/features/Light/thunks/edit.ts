import { createAsyncThunk } from "@reduxjs/toolkit";
import { UTILITIES_URL, LinkUrls } from "app/constants";
import { setUtilitiesError, setUtilitiesPending, replaceUnit, selectCard } from "../lightSlice";
import axios from "axios";
import { UtilityStateUnit } from "../../Utilities";
import { AppDispatch } from "app";

export const editAsyncUnit = async (
    item: UtilityStateUnit,
    { dispatch }: { dispatch: AppDispatch },
): Promise<void> => {
    dispatch(setUtilitiesPending(true));
    try {
        await axios.put(`${UTILITIES_URL}/${LinkUrls.LIGHT}/${item.id}`, item).then(() => {
            dispatch(replaceUnit({ id: item.id, unit: item }));
            dispatch(selectCard(item.id));
        });
    } catch {
        dispatch(setUtilitiesError(true));
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const editLight = createAsyncThunk<
    Promise<void>,
    UtilityStateUnit,
    { dispatch: AppDispatch }
>(`${LinkUrls.LIGHT}/editLight`, editAsyncUnit);
