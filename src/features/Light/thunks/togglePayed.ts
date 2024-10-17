import { createAsyncThunk } from "@reduxjs/toolkit";
import { UTILITIES_URL, LinkUrls } from "app/constants";
import { togglePayed, setUtilitiesError, setUtilitiesPending } from "../lightSlice";
import { UtilityStateUnit } from "../../Utilities";
import axios from "axios";
import { AppDispatch } from "app";

export const toggleLightThunk = async (
  item: UtilityStateUnit,
  { dispatch }: { dispatch: AppDispatch },
): Promise<void> => {
  dispatch(setUtilitiesPending(true));
  try {
    await axios
      .put(`${UTILITIES_URL}/${LinkUrls.LIGHT}/${item.id}`, {
        ...item,
        payed: !item.payed,
      })
      .then(() => dispatch(togglePayed(item.id)));
  } catch {
    dispatch(setUtilitiesError(true));
  } finally {
    dispatch(setUtilitiesPending(false));
  }
};

export const togglePayedBill = createAsyncThunk<
  Promise<void>,
  UtilityStateUnit,
  { dispatch: AppDispatch }
>(`${LinkUrls.LIGHT}/togglePayedBill`, toggleLightThunk);
