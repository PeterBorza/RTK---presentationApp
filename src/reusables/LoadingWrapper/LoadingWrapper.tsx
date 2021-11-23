import { FC } from "react";

import { Loader } from "..";
import { Pending } from "../../app/constants";
import styles from "./LoadingWrapper.module.scss";

type Props = {
	loading: boolean;
};

const LoadingWrapper: FC<Props> = ({ loading }) => {
	return loading ? (
		<div className={styles.container}>
			<div className={styles.loaderContent}>
				<Loader dots={5} />
			</div>
			<h2>{Pending.MESSAGE}</h2>
		</div>
	) : null;
};

export default LoadingWrapper;
