<<<<<<< HEAD
import { ComponentProps } from "react";
=======
>>>>>>> a9ea49875f05c4857a5e1dc3fb875b5376e7b03a
import classNames from "classnames";
import styles from "./TextInput.module.scss";

type InputProps = Pick<
    React.ComponentProps<"input">,
    "type" | "className" | "name" | "value" | "placeholder" | "title" | "onChange"
>;

const TextInput = ({
    className,
    type = "text",
    name = "put label here",
    value,
    placeholder,
    title,
    onChange,
}: InputProps) => {
    const labelClasses = classNames(styles.labelWrap, className);

    return (
        <label htmlFor={name} className={labelClasses}>
            <span>{name}</span>:
            <input
                type={type}
                name={name}
                title={title}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
                autoComplete="off"
            />
        </label>
    );
};

export default TextInput;
