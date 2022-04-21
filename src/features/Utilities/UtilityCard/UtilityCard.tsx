import React from "react";
import { UtilityTableLabels } from "../constants";
import { UtilityStateUnit } from "../types";

import CardCell from "./CardCell";
import { CustomIcon } from "shared-components";
import { icons } from "utils";
import { IconProps } from "shared-components/CustomIcon/CustomIcon";

import classNames from "classnames";
import styles from "./UtilityCard.module.scss";

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
    const { check, danger, trash, edit2, threeDots } = icons;
    const { readDate, index, consumption, estimate, bill, payed, selected } = unit;
    const manageCssClasses = classNames(styles.hiddenManage, {
        [styles.hiddenManage__show]: selected,
    });
    const classes = classNames(styles.wrapper, {
        [styles.selected]: selected,
        [styles.wrapper__dark]: dark,
    });

    const iconGroup: IconProps[] = [
        {
            onClick: onPayedClick,
            title: payed ? UtilityTableLabels.PAYED : UtilityTableLabels.NOT_PAYED,
            icon: payed ? check : danger,
        },
        {
            onClick: onDelete,
            title: UtilityTableLabels.DELETE,
            icon: trash,
        },
        {
            onClick: onEdit,
            title: UtilityTableLabels.EDIT,
            icon: edit2,
        },
    ];

    const manageContent = iconGroup.map(icon => <CustomIcon key={icon.title} {...icon} />);

    const manageCell = (
        <div className={styles.manageCell}>
            {selected ? (
                <div className={manageCssClasses}>{manageContent}</div>
            ) : (
                <CustomIcon title={UtilityTableLabels.MANAGE} icon={threeDots} />
            )}
        </div>
    );

    return (
        <div className={classes} onClick={onClick}>
            <CardCell dark={dark} title={readDate} content={readDate} />
            <CardCell dark={dark} title={index} content={index} />
            <CardCell dark={dark} title={consumption.toString()} content={consumption} />
            <CardCell dark={dark} content={estimate} />
            <CardCell dark={dark} title={bill} content={bill} />
            {manageCell}
        </div>
    );
};

export default UtilityCard;
