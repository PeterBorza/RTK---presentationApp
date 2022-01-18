import { FC, FormEvent, useState } from "react";
import { CustomInput, Button } from "../../shared-components";

import styles from "./Home.module.scss";

const Home: FC = () => {
    const [inputVal, setInputVal] = useState("");

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        inputVal.length !== 0
            ? console.log(inputVal + ", there you go")
            : console.log("type something");
        setInputVal("");
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <CustomInput
                    name="username"
                    value={inputVal}
                    onChange={e => setInputVal(e.target.value)}
                />
                <Button type="submit" onClick={submitHandler} value="Submit" />
            </form>
        </div>
    );
};

export default Home;
