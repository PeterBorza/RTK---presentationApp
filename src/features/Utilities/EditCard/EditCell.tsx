import React from "react";
import styles from "./EditCard.module.scss";

const EditCell = ({ children }: { children?: React.ReactNode }) => {
    return <div className={styles.edit_cell}>{children}</div>;
};

export default EditCell;
