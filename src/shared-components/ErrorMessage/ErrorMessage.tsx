import React from "react";

import styles from "./ErrorMessage.module.scss";

interface ErrorProps {
    message: string | null;
    isError: boolean;
}

const Error = ({ message = "No error message found", isError }: ErrorProps) => {
    return isError ? (
        <div className={styles.errorStyle}>
            <h1>{message}</h1>
        </div>
    ) : null;
};

export default Error;
