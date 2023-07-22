import styles from "./ScrollTable.module.scss";

interface BodyProps {
    children?: React.ReactNode;
}

const Body = ({ children }: BodyProps) => <ul className={styles.body}>{children}</ul>;

export default Body;
