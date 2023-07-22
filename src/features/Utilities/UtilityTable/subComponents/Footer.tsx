import styles from "../UtilityTable.module.scss";

type FooterProps = {
    className?: string;
    children?: React.ReactNode;
};

const Footer = ({ className, children }: FooterProps) => (
    <div className={!className ? `${styles.tableFooter}` : className}>{children}</div>
);

export default Footer;
