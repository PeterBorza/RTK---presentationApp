import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, LinkUrls } from "app/constants";
import { setUtilitiesError, setUtilitiesPending, replaceUnit, selectCard } from "../lightSlice";
import axios from "axios";
import { UtilityStateUnit } from "../../Utilities";

export const editAsyncUnit = async (
    item: UtilityStateUnit,
    { dispatch }: { dispatch: Function },
): Promise<void> => {
    dispatch(setUtilitiesPending(true));
    try {
        await axios.put(`${BaseAPI.UTILITIES_URL}/${LinkUrls.LIGHT}/${item.id}`, item).then(() => {
            dispatch(replaceUnit({ id: item.id, unit: item }));
            dispatch(selectCard(item.id));
        });
    } catch {
        dispatch(setUtilitiesError(true));
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const editUnit = createAsyncThunk(`${LinkUrls.LIGHT}/editAsyncUnit`, editAsyncUnit);
