import styles from "./Loader2.module.scss";
import { newArray } from "utils";
import classNames from "classnames";

interface Loader2Props {
    size?: "small" | "medium" | "large";
}

const Loader2 = ({ size = "medium" }: Loader2Props) => {
    const loaderClasses = classNames(styles.loader, styles[`loader_${size}`]);
    return (
        <div className={loaderClasses}>
            {newArray(12).map(item => (
                <div key={`loader-item-${item}`} className={styles[`bar${item + 1}`]} />
            ))}
        </div>
    );
};

export default Loader2;
