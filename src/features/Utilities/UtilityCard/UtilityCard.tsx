import React from "react";
import { UtilityTableLabels } from "../constants";
import { UtilityStateUnit } from "../types";

import { CustomIcon } from "../../../shared-components";

import classNames from "classnames";
import styles from "./UtilityCard.module.scss";
import { icons } from "../../../utils";
import CardCell from "./CardCell";

interface Props {
    onClick: () => void;
    onPayedClick: () => void;
    onDelete: () => void;
    onEdit: () => void;
    dark?: boolean;
    unit: UtilityStateUnit;
}

const UtilityCard: React.FC<Props> = ({
    onClick,
    onPayedClick,
    onDelete,
    onEdit,
    dark = false,
    unit,
}) => {
    const { readDate, index, consumption, estimate, bill, payed, selected } =
        unit;
    const classes = classNames(styles.wrapper, {
        [styles.selected]: selected,
        [styles.wrapper__dark]: dark,
    });

    const iconGroup = [
        {
            onClick: onPayedClick,
            title: payed
                ? UtilityTableLabels.PAYED
                : UtilityTableLabels.NOT_PAYED,
            icon: payed ? icons["check"] : icons["danger"],
        },
        {
            onClick: onDelete,
            title: UtilityTableLabels.DELETE,
            icon: icons["trash"],
        },
        {
            onClick: onEdit,
            title: UtilityTableLabels.EDIT,
            icon: icons["edit2"],
        },
    ];

    const settingsContent = iconGroup.map(icon => (
        <CustomIcon key={icon.title} {...icon} />
    ));

    return (
        <div className={classes} onClick={onClick}>
            <CardCell dark={dark} title={readDate} content={readDate} />
            <CardCell dark={dark} title={index} content={index} />
            <CardCell
                dark={dark}
                title={consumption.toString()}
                content={consumption}
            />
            <CardCell dark={dark} content={estimate} />
            <CardCell dark={dark} title={bill} content={bill} />
            <CardCell dark={dark} content={settingsContent} />
        </div>
    );
};

export default UtilityCard;
