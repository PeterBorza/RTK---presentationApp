import { createAsyncThunk } from "@reduxjs/toolkit";
import { LinkUrls, UTILITIES_URL } from "app/constants";
import { replaceUnit, selectCard, setUtilitiesError, setUtilitiesPending } from "../gasSlice";
import axios from "axios";
import { UtilityStateUnit } from "../../Utilities";
import { AppDispatch } from "app";

export const editAsyncUnit = async (
    item: UtilityStateUnit,
    { dispatch }: { dispatch: AppDispatch },
): Promise<void> => {
    dispatch(setUtilitiesPending(true));
    try {
        await axios.put(`${UTILITIES_URL}/${LinkUrls.GAS}/${item.id}`, item).then(() => {
            dispatch(replaceUnit({ id: item.id, unit: item }));
            dispatch(selectCard(item.id));
        });
    } catch {
        dispatch(setUtilitiesError(true));
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const editUnit = createAsyncThunk<
    Promise<void>,
    UtilityStateUnit,
    { dispatch: AppDispatch }
>(`${LinkUrls.GAS}/editAsyncUnit`, editAsyncUnit);
