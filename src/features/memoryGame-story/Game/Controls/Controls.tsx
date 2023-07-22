import styles from "./Controls.module.scss";

interface Props {
    count: number;
    dark?: boolean;
    label: string;
    children?: React.ReactNode;
}

const Controls = ({ children, count, dark, label }: Props) => {
    return (
        <div className={styles.controls}>
            <div className={styles.clicks}>
                {label} <span>{count}</span>
            </div>
            {children}
        </div>
    );
};

export default Controls;
