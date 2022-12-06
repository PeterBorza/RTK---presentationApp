import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseAPI, LinkUrls } from "app/constants";
import { togglePayed, setUtilitiesError, setUtilitiesPending } from "../lightSlice";
import { UtilityStateUnit } from "../../Utilities";
import axios from "axios";

export const toggleAsyncPayed = async (
    item: UtilityStateUnit,
    { dispatch }: { dispatch: Function },
): Promise<void> => {
    dispatch(setUtilitiesPending(true));
    try {
        await axios
            .put(`${BaseAPI.UTILITIES_URL}/${LinkUrls.LIGHT}/${item.id}`, {
                ...item,
                payed: !item.payed,
            })
            .then(dispatch(togglePayed(item.id)));
    } catch {
        dispatch(setUtilitiesError(true));
    } finally {
        dispatch(setUtilitiesPending(false));
    }
};

export const togglePayedBill = createAsyncThunk(
    `${LinkUrls.LIGHT}/toggleAsyncPayed`,
    toggleAsyncPayed,
);
