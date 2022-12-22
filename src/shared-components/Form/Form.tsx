import { Button, ButtonWrapper } from "..";

import classNames from "classnames";
import styles from "./Form.module.scss";
import React from "react";
import { AppMessages } from "app";

export interface FormProps {
    onSubmit: (e: React.FormEvent) => void;
    onCancel: () => void;
    formTitle?: string;
    width: "small" | "medium" | "large" | "xxl";
    renderFields: React.ReactNode;
    disabled?: boolean;
}

const Form = ({
    onSubmit,
    onCancel,
    formTitle = "Form",
    width,
    renderFields,
    disabled,
}: FormProps) => {
    const formWrapper = classNames(styles.container, [styles[`${width}`]]);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(e);
    };

    return (
        <form className={formWrapper} onSubmit={submitHandler}>
            <h2>{formTitle}</h2>
            <div className={styles.wrapper}>{renderFields}</div>
            <ButtonWrapper>
                <Button
                    isDisabled={disabled}
                    type="submit"
                    variant="submit"
                    value={AppMessages.SUBMIT}
                />
                <Button value={AppMessages.CANCEL} variant="cancel" onClick={onCancel} />
            </ButtonWrapper>
        </form>
    );
};

export default Form;
