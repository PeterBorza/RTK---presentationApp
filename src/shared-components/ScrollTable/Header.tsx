import styles from "./ScrollTable.module.scss";

const Header = ({ children }: { children?: React.ReactNode }) => (
    <div className={styles.header}>{children}</div>
);

export default Header;
