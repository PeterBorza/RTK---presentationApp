import { FC } from "react";

import classNames from "classnames";
import styles from "./IconSet.module.scss";
import { FaCheck, FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { CgDanger } from "react-icons/cg";

export enum IconTitles {
    PAYED = "Payed",
    DELETE = "Delete",
    EDIT = "Edit",
    NOT_PAYED = "Not payed",
}

interface IconSetProps {
    onCheck: () => void;
    onDelete: () => void;
    onEdit: () => void;
    isChecked: boolean;
    isEdited: boolean;
    className?: string;
}

const IconSet: FC<IconSetProps> = ({
    onCheck,
    onDelete,
    onEdit,
    isChecked,
    isEdited,
    className,
}) => {
    const iconClasses = classNames(styles.iconWrapper, className);
    const editClass = isEdited ? `${styles.red}` : ` ${styles.blue}`;
    return (
        <div className={iconClasses}>
            {isChecked ? (
                <FaCheck
                    className={styles.green}
                    onClick={onCheck}
                    title={IconTitles.PAYED}
                />
            ) : (
                <CgDanger
                    className={styles.red}
                    onClick={onCheck}
                    title={IconTitles.NOT_PAYED}
                />
            )}
            <FaRegTrashAlt
                className={styles.black}
                title={IconTitles.DELETE}
                onClick={onDelete}
            />
            <MdEdit
                className={editClass}
                title={IconTitles.EDIT}
                onClick={onEdit}
            />
        </div>
    );
};

export default IconSet;
