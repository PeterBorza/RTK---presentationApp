import classNames from "classnames";
import styles from "./TextInput.module.scss";

type InputProps = Pick<
    React.ComponentProps<"input">,
    "type" | "className" | "name" | "value" | "placeholder" | "title" | "onChange"
>;

interface ITextInput extends InputProps {
    isValid?: boolean;
    errorMessage?: string;
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
    errorMessage,
}: ITextInput) => {
    const labelClasses = classNames(styles.labelWrap, className);
    const inputClasses = classNames(styles.input, {
        [styles["input__invalid"]]: !isValid,
    });

    return (
        <>
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
            {!isValid && <span>{errorMessage}</span>}
        </>
    );
};

export default TextInput;
