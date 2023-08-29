import React from "react";

import { UtilityStateUnit } from "features/Utilities";
import UtilityCard from "./UtilityCard";
import EditCard from "./EditCard";

export interface UtilityTableItemProps {
    unit: UtilityStateUnit;
    units: UtilityStateUnit[];
    darkMode: boolean;
    resetEdit: () => void;
    selectCard: () => void;
    editUnit: (unit: UtilityStateUnit) => void;
}

const UtilityTableItem = ({
    unit,
    units,
    darkMode,
    resetEdit,
    selectCard,
    editUnit,
}: UtilityTableItemProps) => {
    return (
        <li>
            {!unit.edit ? (
                <UtilityCard onClick={selectCard} unit={unit} dark={darkMode} />
            ) : (
                <EditCard resetEdit={resetEdit} editUnit={editUnit} units={units} {...unit} />
            )}
        </li>
    );
};

export default UtilityTableItem;
