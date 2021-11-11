import { FC } from "react";

import styles from "./ErrorMessage.module.scss";

interface ErrorProps {
	message: string | null;
}

const Error: FC<ErrorProps> = ({ message = "No error message found" }) => {
	return <div className={styles.errorStyle}>{message}</div>;
};

export default Error;
