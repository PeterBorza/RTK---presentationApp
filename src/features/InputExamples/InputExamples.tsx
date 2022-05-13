import { FormEvent } from "react";
import { useForm } from "hooks";
import { CustomInput, Button, InputCard, TextInput } from "shared-components";
import { useValidation } from "hooks";

import styles from "./InputExamples.module.scss";

type MockValues = {
    username: string;
    password: string;
    text: string;
};

const initialMockValues: MockValues = {
    username: "",
    password: "",
    text: "",
};

const InputExamples = () => {
    const { values, changeHandler, resetValues } = useForm<MockValues>(initialMockValues);

    const { isValid: isUserNameValid, message: userNameMessage } = useValidation(values.username);
    const { isValid: isPasswordValid, message: passwordMessage } = useValidation(values.password);
    const { isValid: isTextValid, message: textMessage } = useValidation(values.text);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userNameMessage);
        resetValues();
    };
    return (
        <div className={styles.wrapper}>
            <h1>Types of input atoms</h1>
            <form className={styles.form} onSubmit={submitHandler}>
                <CustomInput
                    isValid={isUserNameValid}
                    name="username"
                    value={values.username}
                    onChange={changeHandler}
                />
                <InputCard
                    onChange={changeHandler}
                    name="password"
                    value={values.password}
                    placeHolder="password"
                    isButton
                />
                <TextInput
                    name="text"
                    value={values.text}
                    onChange={changeHandler}
                    className={styles.textInput}
                />
                <Button type="submit" value="Submit" />
            </form>
            <div className={styles.output}>
                <h2 style={{ backgroundColor: isUserNameValid ? "limegreen" : "crimson" }}>
                    {values.username}
                </h2>
                <br />
                <h2>{values.password}</h2>
                <br />
                <h2>{values.text}</h2>
            </div>
        </div>
    );
};

export default InputExamples;
