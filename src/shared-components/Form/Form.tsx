import { Button, ButtonWrapper } from "..";

import classNames from "classnames";
import styles from "./Form.module.scss";
import React from "react";

export interface FormProps {
    onSubmit: (e: React.FormEvent) => void;
    onCancel: () => void;
    formTitle?: string;
    width: "small" | "medium" | "large" | "xxl";
    renderFields: React.ReactNode;
}

const Form = ({ onSubmit, onCancel, formTitle = "Form", width, renderFields }: FormProps) => {
    const formWrapper = classNames(styles.container, [styles[`${width}`]]);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(e);
    };

    // TODO button values hardcoded ??
    return (
        <form className={formWrapper} onSubmit={submitHandler}>
            <h2>{formTitle}</h2>
            <div className={styles.wrapper}>{renderFields}</div>
            <ButtonWrapper>
                <Button type="submit" value="Submit" />
                <Button value="Cancel" onClick={onCancel} />
            </ButtonWrapper>
        </form>
    );
};

export default Form;
