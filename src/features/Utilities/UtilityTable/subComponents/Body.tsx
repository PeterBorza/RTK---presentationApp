import { FC } from "react";
import styles from "../UtilityTable.module.scss";

type BodyProps = {
    className?: string;
};

const Body: FC<BodyProps> = ({ className, children }) => {
    return (
        <div className={!className ? `${styles.tableBody}` : className}>
            {children}
        </div>
    );
};

export default Body;
