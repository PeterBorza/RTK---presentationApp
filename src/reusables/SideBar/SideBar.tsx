import { FC, useContext } from "react";

import Bar from "./subcomponents";
import { SideBarContext } from "../../context";

import classNames from "classnames";
import styles from "./SideBar.module.scss";
import { Loader } from "..";

export interface SideBarProps {
	visible?: boolean;
}

const SideBar: FC<SideBarProps> = ({ visible = false }) => {
	const [isOpen, setIsOpen] = useContext(SideBarContext);
	const sideBarClassNames = classNames(styles.wrapper, {
		[styles.wrapper__open]: isOpen,
		[styles.noDisplay]: !visible,
	});

	return (
		<>
			<Bar className={sideBarClassNames}>
				<Bar.Header onClose={() => setIsOpen(false)}>
					<Loader dots={5} />
				</Bar.Header>

				<Bar.Body renderBody={() => <Loader dots={5} />} />

				<Bar.Footer />
			</Bar>
		</>
	);
};

export default SideBar;
