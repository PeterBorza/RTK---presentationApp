import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../reusables";
import { UtilityStateUnit, UtilityTableLabels } from "../../Utilities";
import { resetEdit, resetSelected } from "../gasSlice";
import { unitsState } from "../selectors";
import { editUnit, getAsyncUtility } from "../thunks";
import styles from "./EditCard.module.scss";

type Props = {
    unit: UtilityStateUnit;
};

const EditCard: FC<Props> = ({ unit }) => {
    const units = useSelector(unitsState);
    const { dataCitire, citire, consum, factura, platit, selected, edit, id } =
        unit;
    const [values, setValues] = useState({
        dataCitire,
        citire,
        factura,
    });
    const dispatch = useDispatch();
    const onCancelHandler = () => {
        dispatch(resetEdit());
        dispatch(resetSelected());
    };

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const editedUnit: UtilityStateUnit = {
            ...unit,
            dataCitire: values.dataCitire,
            citire: values.citire,
            factura: values.factura,
            consum: (+consum + +values.citire - +citire).toString(),
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
                    placeholder={dataCitire}
                    onChange={onChangeHandler}
                    name="dataCitire"
                    value={values.dataCitire}
                />
            </div>
            <div className={styles.edit_cell}>
                <input
                    type="text"
                    placeholder={citire}
                    onChange={onChangeHandler}
                    name="citire"
                    value={values.citire}
                />
            </div>
            <div className={styles.edit_cell}>{consum}</div>
            <div className={styles.edit_cell}>
                <input
                    type="text"
                    placeholder={factura}
                    onChange={onChangeHandler}
                    name="factura"
                    value={values.factura}
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
