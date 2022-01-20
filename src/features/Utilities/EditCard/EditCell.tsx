import { FC } from "react";

import styles from "./EditCard.module.scss";

const EditCell: FC = ({ children }) => {
    return <div className={styles.edit_cell}>{children}</div>;
};

export default EditCell;
