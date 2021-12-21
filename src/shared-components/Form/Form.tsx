import React, { FormEvent, PropsWithChildren, ReactNode } from "react";
import { Button } from "..";

import classNames from "classnames";
import styles from "./Form.module.scss";

export interface FormProps {
    onSubmit: (e: FormEvent) => void;
    onCancel: () => void;
    formTitle?: string;
    width: "small" | "medium" | "large" | "xxl";
    renderFields: ReactNode;
}

const Form: React.FC<PropsWithChildren<FormProps>> = ({
    onSubmit,
    onCancel,
    formTitle = "Form",
    width,
    renderFields,
}) => {
    const formWrapper = classNames(styles.container, [styles[`${width}`]]);
    return (
        <form className={formWrapper} onSubmit={onSubmit}>
            <h2>{formTitle}</h2>
            <div className={styles.wrapper}>{renderFields}</div>
            <div className={styles.buttons}>
                <Button
                    type="submit"
                    value="Submit"
                    className={styles.submit}
                />
                <Button
                    value="Cancel"
                    onClick={onCancel}
                    className={styles.cancel}
                />
            </div>
        </form>
    );
};

export default Form;
