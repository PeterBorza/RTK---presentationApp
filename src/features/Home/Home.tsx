import { FC, FormEvent } from "react";
import { useForm } from "../../hooks";
import { CustomInput, Button, InputCard, TextInput } from "../../shared-components";

import styles from "./Home.module.scss";

type MockValues = {
    username: string;
    password: string;
    text: string;
};

const initialMockValues = {
    username: "",
    password: "",
    text: "",
};

const Home: FC = () => {
    const { values, changeHandler, resetValues } = useForm<MockValues>(initialMockValues);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(values);
        resetValues();
    };

    return (
        <div className={styles.container}>
            <h1>Types of input atoms</h1>
            <form className={styles.form} onSubmit={submitHandler}>
                <CustomInput name="username" value={values.username} onChange={changeHandler} />
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
                <h2>{values.username}</h2>
                <br />
                <h2>{values.password}</h2>
                <br />
                <h2>{values.text}</h2>
            </div>
        </div>
    );
};

export default Home;
