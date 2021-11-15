import { FC, ReactNode } from "react";

import { SideBar } from "..";

import classNames from "classnames";
import styles from "./AsidePlatform.module.scss";

export type Props = {
	isOpen: boolean;
	renderBody: () => ReactNode;
};

const AsidePlatform: FC<Props> = ({ isOpen, renderBody }) => {
	const wrapper = classNames(styles.container, {
		[styles.container__margin]: isOpen,
	});

	return (
		<section className={styles.platformContainer}>
			<SideBar visible />
			<div className={wrapper}>{renderBody()}</div>
		</section>
	);
};

export default AsidePlatform;
