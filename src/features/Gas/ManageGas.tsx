import React from "react";
import { useAppRedux } from "app";
import { useSelector } from "react-redux";

import { UtilityManager, UtilityTableLabels } from "features/Utilities";
import { IconProps } from "shared-components/CustomIcon/CustomIcon";
import { icons } from "utils";
import { selectedGas } from "./selectors";
import { editCard } from "./gasSlice";
import { togglePayedBill } from "./thunks";

interface Props {
    openModal: () => void;
}

const ManageGas = React.forwardRef<HTMLDivElement, Props>(({ openModal }, ref) => {
    const { dispatch } = useAppRedux();
    const { check, trash, edit } = icons;
    const selectedGasUnit = useSelector(selectedGas);

    const iconGroup: IconProps[] = [
        {
            onClick: () => dispatch(editCard(selectedGasUnit!.id)),
            type: "edit",
            title: UtilityTableLabels.EDIT,
            icon: edit,
            isDisabled: !selectedGasUnit,
        },
        {
            onClick: openModal,
            type: "delete",
            title: UtilityTableLabels.DELETE,
            icon: trash,
            isDisabled: !selectedGasUnit,
        },
        {
            onClick: () => dispatch(togglePayedBill(selectedGasUnit!)),
            type: "check",
            title: UtilityTableLabels.PAY,
            icon: check,
            isDisabled: !selectedGasUnit || !selectedGasUnit?.bill || selectedGasUnit?.payed,
        },
    ];

    return <UtilityManager icons={iconGroup} isManageActive={Boolean(selectedGasUnit)} ref={ref} />;
});

export default ManageGas;
