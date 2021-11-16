import { FC } from "react";

import Bar from "./subcomponents";

import classNames from "classnames";
import styles from "./SideBar.module.scss";
import { Loader } from "..";

export interface SideBarProps {
	visible?: boolean;
	isOpen: boolean;
	onClose: () => void;
}

const SideBar: FC<SideBarProps> = ({ visible = false, isOpen, onClose }) => {
	const sideBarClassNames = classNames(styles.wrapper, {
		[styles.wrapper__open]: isOpen,
		[styles.noDisplay]: !visible,
	});

	return (
		<aside>
			<Bar className={sideBarClassNames}>
				<Bar.Header onClose={onClose}>
					<Loader dots={5} />
				</Bar.Header>

				<Bar.Body renderBody={() => <Loader dots={5} />} />

				<Bar.Footer />
			</Bar>
		</aside>
	);
};

export default SideBar;
