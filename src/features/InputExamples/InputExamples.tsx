import React from "react";
import { FormEvent } from "react";
import { useForm } from "hooks";
import { Button, InputCard, TextInput } from "shared-components";
import { useValidation } from "hooks";

import styles from "./InputExamples.module.scss";

type MockValues = Record<"username" | "password" | "text", string>;

const initialMockValues: MockValues = {
    username: "",
    password: "",
    text: "",
};

// TODO
// multiple types of input, same functionality.
// Why not all the same component, but diff variants ?

const InputExamples = () => {
    const { values, changeHandler, resetValues } = useForm<MockValues>(initialMockValues);

    const { isValid: isUserNameValid } = useValidation(values.username);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetValues();
    };
    // TODO button value hardcoded ??
    return (
        <div className={styles.wrapper}>
            <h1>Types of input atoms</h1>
            <form className={styles.form} onSubmit={submitHandler}>
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
                    isValid={values.text === "Peter"}
                    errorMessage="Try again"
                />
                <Button variant="submit" />
            </form>
            <div className={styles.output}>
                <h2 style={{ backgroundColor: isUserNameValid ? "limegreen" : "crimson" }}>
                    {values.username}
                </h2>
                <h2>{values.password}</h2>
                <h2>{values.text}</h2>
            </div>
        </div>
    );
};

export default InputExamples;
