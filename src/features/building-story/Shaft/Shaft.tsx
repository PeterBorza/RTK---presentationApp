import { FC } from "react";
import styles from "./Shaft.module.scss";

const Shaft: FC = ({ children }) => (
    <div className={styles.shaftContainer}>{children}</div>
);

export default Shaft;
