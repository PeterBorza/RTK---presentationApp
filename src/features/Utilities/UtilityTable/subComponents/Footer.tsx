import { FC } from "react";
import styles from "../UtilityTable.module.scss";

type FooterProps = {
    className?: string;
};

const Footer: FC<FooterProps> = ({ className, children }) => {
    return (
        <div className={!className ? `${styles.tableFooter}` : className}>
            {children}
        </div>
    );
};

export default Footer;
