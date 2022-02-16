import { FC } from "react";

import { Loader } from "..";
import styles from "./LoadingWrapper.module.scss";

type Props = {
    loading: boolean;
    loadingMessage: string;
};

const LoadingWrapper: FC<Props> = ({ loading, loadingMessage }) => {
    return loading ? (
        <div className={styles.container}>
            <div className={styles.loaderContent}>
                <Loader dots={5} />
            </div>
            <h2>{loadingMessage}</h2>
        </div>
    ) : null;
};

export default LoadingWrapper;
