import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../../shared-components";
import { UtilityStateUnit, UtilityTableLabels } from "../../Utilities";
import { resetEdit, resetSelected } from "../gasSlice";
import { editUnit, getAsyncUtility } from "../thunks";
import styles from "./EditCard.module.scss";

type Props = {
    unit: UtilityStateUnit;
};

const EditCard: FC<Props> = ({ unit }) => {
    const { readDate, index, consumption, bill, payed, selected, edit, id } =
        unit;
    const [values, setValues] = useState({
        readDate,
        index,
        bill,
    });
    const dispatch = useDispatch();
    const onCancelHandler = () => {
        dispatch(resetEdit());
        // dispatch(resetSelected());
    };

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
        dispatch(editUnit(editedUnit));
        dispatch(getAsyncUtility());
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form className={styles.wrapper} onSubmit={onSubmitHandler}>
            <div className={styles.edit_cell}>
                <input
                    type="text"
                    placeholder={readDate}
                    onChange={onChangeHandler}
                    name="readDate"
                    value={values.readDate}
                />
            </div>
            <div className={styles.edit_cell}>
                <input
                    type="text"
                    placeholder={index}
                    onChange={onChangeHandler}
                    name="index"
                    value={values.index}
                />
            </div>
            <div className={styles.edit_cell}>{consumption}</div>
            <div className={styles.edit_cell}>
                <input
                    type="text"
                    placeholder={bill}
                    onChange={onChangeHandler}
                    name="bill"
                    value={values.bill}
                />
            </div>
            <div className={styles.edit_cell}>
                <Button type="submit" value={UtilityTableLabels.EDIT} />
                <Button
                    onClick={onCancelHandler}
                    value={UtilityTableLabels.CANCEL_EDIT}
                />
            </div>
        </form>
    );
};

export default EditCard;
