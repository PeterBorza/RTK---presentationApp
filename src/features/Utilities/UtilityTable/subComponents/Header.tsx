import { FC } from "react";
import styles from "../UtilityTable.module.scss";

type HeaderProps = {
    className?: string;
};

const Header: FC<HeaderProps> = ({ className, children }) => {
    return (
        <div className={!className ? `${styles.tableHeader}` : className}>
            {children}
        </div>
    );
};

export default Header;
