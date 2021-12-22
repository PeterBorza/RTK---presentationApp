import { FC, FormEvent } from "react";

import { Button } from "../../../shared-components";
import { UtilityStateUnit, UtilityTableLabels } from "..";
import { useForm } from "../../../hooks";

import styles from "./EditCard.module.scss";

type Props = {
    resetEdit: () => void;
    editUnit: (editedUnit: UtilityStateUnit) => void;
};

const EditFormCard: FC<UtilityStateUnit & Props> = ({
    resetEdit,
    editUnit,
    ...unit
}) => {
    const { readDate, index, consumption, bill } = unit;
    const { values, changeHandler } = useForm({
        readDate,
        index,
        bill,
    });

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const editedUnit: UtilityStateUnit = {
            ...unit,
            readDate: values.readDate,
            index: values.index,
            bill: values.bill,
            consumption: (+consumption + +values.index - +index).toString(),
            selected: false,
            edit: false,
        };
        editUnit(editedUnit);
    };

    return (
        <form className={styles.wrapper} onSubmit={onSubmitHandler}>
            <div className={styles.edit_cell}>
                <input
                    type="text"
                    placeholder={readDate}
                    onChange={changeHandler}
                    name="readDate"
                    value={values.readDate}
                />
            </div>
            <div className={styles.edit_cell}>
                <input
                    type="text"
                    placeholder={index}
                    onChange={changeHandler}
                    name="index"
                    value={values.index}
                />
            </div>
            <div className={styles.edit_cell}>
                <p>{consumption}</p>
            </div>
            <div className={styles.edit_cell}>
                <input
                    type="text"
                    placeholder={bill}
                    onChange={changeHandler}
                    name="bill"
                    value={values.bill}
                />
            </div>
            <div className={styles.edit_cell}>
                <Button type="submit" value={UtilityTableLabels.EDIT} />
                <Button
                    onClick={resetEdit}
                    value={UtilityTableLabels.CANCEL_EDIT}
                />
            </div>
        </form>
    );
};

export default EditFormCard;
