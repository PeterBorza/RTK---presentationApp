import classNames from "classnames";
import styles from "./TextInput.module.scss";

type InputProps = Pick<
    React.ComponentProps<"input">,
    "type" | "className" | "name" | "value" | "placeholder" | "title" | "onChange"
>;

interface ITextInput extends InputProps {
    isValid?: boolean;
}

const TextInput = ({
    className,
    type = "text",
    name = "put label here",
    value,
    placeholder,
    title,
    onChange,
    isValid,
}: ITextInput) => {
    const labelClasses = classNames(styles.labelWrap, className);
    const inputClasses = classNames(styles.input, {
        [styles["input__invalid"]]: !isValid,
    });

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
                className={inputClasses}
                autoComplete="off"
            />
        </label>
    );
};

export default TextInput;
