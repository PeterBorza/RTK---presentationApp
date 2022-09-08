import React from "react";

import { UtilityStateUnit } from "features/Utilities";
import UtilityCard from "./UtilityCard";
import EditCard from "./EditCard";

export interface UtilityTableItemProps {
    unit: UtilityStateUnit;
    units: UtilityStateUnit[];
    darkMode: boolean;
    editCard: () => void;
    resetEdit: () => void;
    selectCard: () => void;
    deleteUtilityUnit: () => void;
    editUnit: (unit: UtilityStateUnit) => void;
    togglePayedBill: () => void;
}

const UtilityTableItem = ({
    unit,
    units,
    darkMode,
    editCard,
    resetEdit,
    selectCard,
    deleteUtilityUnit,
    editUnit,
    togglePayedBill,
}: UtilityTableItemProps) => {
    const billIsOut = unit.bill !== "";
    return (
        <li>
            {!unit.edit ? (
                <UtilityCard
                    onClick={selectCard}
                    onPayedClick={() => billIsOut && togglePayedBill()}
                    onDelete={deleteUtilityUnit}
                    onEdit={editCard}
                    unit={unit}
                    dark={darkMode}
                />
            ) : (
                <EditCard
                    resetEdit={resetEdit}
                    editUnit={editedUnit => editUnit(editedUnit)}
                    units={units}
                    {...unit}
                />
            )}
        </li>
    );
};

export default UtilityTableItem;
