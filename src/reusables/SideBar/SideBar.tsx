import { FC, useContext } from "react";

import Bar from "./subcomponents";
import { MenuContext } from "../../context";

import classNames from "classnames";
import styles from "./SideBar.module.scss";
import { Loader } from "..";

export interface SideBarProps {
	visible?: boolean;
}

const SideBar: FC<SideBarProps> = ({ visible = false }) => {
	const [isOpen, setIsOpen] = useContext(MenuContext.SideBarContext);
	const sideBarClassNames = classNames(styles.wrapper, {
		[styles.wrapper__open]: isOpen,
		[styles.noDisplay]: !visible,
	});

	return (
		<>
			<Bar className={sideBarClassNames}>
				<Bar.Header onClose={() => setIsOpen(false)}>
					<Loader dots={11} />
				</Bar.Header>

				<Bar.Body renderBody={() => <Loader dots={11} />} />

				<Bar.Footer />
			</Bar>
		</>
	);
};

export default SideBar;
