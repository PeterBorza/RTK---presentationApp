import { PayloadAction } from "@reduxjs/toolkit";
import { UnitId, UtilityState, UtilityStateUnit } from "features/Utilities";

const reducers = {
    selectCard: (state: UtilityState, { payload }: PayloadAction<UnitId>) => {
        state.units.map(item => (item.selected = item.id === payload ? true : false));
    },
    editCard: (state: UtilityState, { payload }: PayloadAction<UnitId>) => {
        state.units.map(item => (item.edit = item.id === payload ? true : false));
    },
    resetSelected: (state: UtilityState) => {
        state.units.forEach(item => (item.selected = false));
    },
    resetEdit: (state: UtilityState) => {
        state.units.forEach(item => (item.edit = false));
    },
    togglePayed: (state: UtilityState, { payload }: PayloadAction<UnitId>) => {
        const selected = state.units.find(unit => unit.id === payload);
        if (selected) {
            selected.payed = !selected.payed;
        }
    },
    addUnit: (state: UtilityState, { payload }: PayloadAction<UtilityStateUnit>) => {
        state.units.push(payload);
    },
    replaceUnit: (
        state: UtilityState,
        { payload }: PayloadAction<{ id: UnitId; unit: UtilityStateUnit }>,
    ) => {
        const index = state.units.findIndex(unit => unit.id === payload.id);
        state.units.splice(index, 1, payload.unit);
    },
    getUnits: (state: UtilityState, { payload }: PayloadAction<UtilityStateUnit[]>) => {
        state.units = payload;
    },
    deleteUnit: (state: UtilityState, { payload }: PayloadAction<UnitId>) => {
        state.units = state.units.filter(units => units.id !== payload);
    },
    setUtilitiesPending: (state: UtilityState, { payload }: PayloadAction<boolean>) => {
        state.loading.isLoading = payload;
    },
    setUtilitiesError: (state: UtilityState, { payload }: PayloadAction<boolean>) => {
        state.error = payload;
    },
};

export default reducers;
