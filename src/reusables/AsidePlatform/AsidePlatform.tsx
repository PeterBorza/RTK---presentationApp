import { FC, ReactNode } from "react";

import { SideBar } from "..";

import classNames from "classnames";
import styles from "./AsidePlatform.module.scss";

export type Props = {
	isOpen: boolean;
	onClose: () => void;
	renderBody: () => ReactNode;
};

const AsidePlatform: FC<Props> = ({ isOpen, renderBody, onClose }) => {
	const wrapper = classNames(styles.container, {
		[styles.container__margin]: isOpen,
	});

	return (
		<section className={styles.platformContainer}>
			<SideBar isOpen={isOpen} visible onClose={onClose} />
			<div className={wrapper}>{renderBody()}</div>
		</section>
	);
};

export default AsidePlatform;
