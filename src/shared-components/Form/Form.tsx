import { Button, ButtonWrapper } from "..";

import classNames from "classnames";
import styles from "./Form.module.scss";

export interface FormProps {
    onSubmit: (e: React.FormEvent) => void;
    onCancel: () => void;
    formTitle?: string;
    width: "small" | "medium" | "large" | "xxl";
    renderFields: React.ReactNode;
}

const Form = ({ onSubmit, onCancel, formTitle = "Form", width, renderFields }: FormProps) => {
    const formWrapper = classNames(styles.container, [styles[`${width}`]]);
    return (
        <form className={formWrapper} onSubmit={onSubmit}>
            <h2>{formTitle}</h2>
            <div className={styles.wrapper}>{renderFields}</div>
            <ButtonWrapper>
                <Button type="submit" value="Submit" className={styles.submit} />
                <Button value="Cancel" onClick={onCancel} className={styles.cancel} />
            </ButtonWrapper>
        </form>
    );
};

export default Form;
