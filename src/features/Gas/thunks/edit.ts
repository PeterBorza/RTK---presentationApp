import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, LinkUrls } from "app/constants";
import { replaceUnit, selectCard, setUtilitiesError, setUtilitiesPending } from "../gasSlice";
import axios from "axios";
import { UtilityStateUnit } from "../../Utilities";

export const editAsyncUnit = async (
    item: UtilityStateUnit,
    { dispatch }: { dispatch: Function },
): Promise<void> => {
    dispatch(setUtilitiesPending(true));
    try {
        await axios.put(`${BaseAPI.UTILITIES_URL}/${LinkUrls.GAS}/${item.id}`, item).then(() => {
            dispatch(replaceUnit({ id: item.id, unit: item }));
            dispatch(selectCard(item.id));
        });
    } catch {
        dispatch(setUtilitiesError(true));
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const editUnit = createAsyncThunk(`${LinkUrls.GAS}/editAsyncUnit`, editAsyncUnit);
