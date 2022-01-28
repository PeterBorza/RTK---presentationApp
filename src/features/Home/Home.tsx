import { ChangeEvent, FC, FormEvent, useState } from "react";
import { CustomInput, Button, InputCard, TextInput } from "../../shared-components";

import styles from "./Home.module.scss";

const Home: FC = () => {
    const [values, setValues] = useState({
        username: "",
        password: "",
        text: "",
    });

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValues({
            username: "",
            password: "",
            text: "",
        });
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
