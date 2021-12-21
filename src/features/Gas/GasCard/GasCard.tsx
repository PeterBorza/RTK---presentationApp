import React from "react";
import { UtilityStateUnit } from "../../Utilities";
import { IconSet } from "../../../shared-components";

import styles from "./GasCard.module.scss";
import classNames from "classnames";

interface Props {
    onClick: () => void;
    onPayedClick: () => void;
    onDelete: () => void;
    onEdit: () => void;
    dark?: boolean;
}

const GasCard: React.FC<UtilityStateUnit & Props> = ({
    onClick,
    onPayedClick,
    onDelete,
    onEdit,
    dark = false,
    ...units
}) => {
    const { dataCitire, citire, consum, factura, platit, selected, edit } =
        units;
    const classes = classNames(styles.wrapper, {
        [styles.selected]: selected,
        [styles.wrapper__dark]: dark,
    });
    const dataWrapper = classNames(styles.data, {
        [styles.data__dark]: dark,
    });

    return (
        <div className={classes} onClick={onClick}>
            <div className={dataWrapper} title={dataCitire}>
                {dataCitire}
            </div>
            <div className={dataWrapper} title={citire}>
                {citire}
            </div>
            <div className={dataWrapper} title={consum}>
                {consum}
            </div>
            <div className={dataWrapper} title={factura}>
                {factura}
            </div>
            <IconSet
                onCheck={onPayedClick}
                onDelete={onDelete}
                onEdit={onEdit}
                isChecked={platit}
                isEdited={edit}
            />
        </div>
    );
};

export default GasCard;
