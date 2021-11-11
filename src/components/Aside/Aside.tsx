import { FC, useState } from "react";
import { Bars, WindowClose } from "../../utils/icons";

import { Bar, ButtonWithChildren } from "../../reusables";

import classNames from "classnames";
import styles from "./Aside.module.scss";

interface AsideProps {
	visible: boolean;
}

const Aside: FC<AsideProps> = ({ visible }) => {
	const [isOpen, setIsOpen] = useState(false);

	const sideBarClassNames = classNames(styles.sideBar__wrapper, {
		[styles["sideBar__wrapper__open"]]: isOpen,
	});

	const wrapper = classNames(styles.sideBar, {
		[styles["noDisplay"]]: !visible,
	});

	return (
		<div className={wrapper}>
			<Bar className={sideBarClassNames}>
				<Bar.Header className={styles.sideBar__header}>
					<ButtonWithChildren
						onClick={() => setIsOpen(false)}
						title='Close window'
					>
						<WindowClose className={styles.buttonWrapper__close} />
					</ButtonWithChildren>
				</Bar.Header>
				<Bar.Body className={styles.sideBar__body}>
					<ButtonWithChildren
						onClick={() => setIsOpen(false)}
						// onClick={() => console.log("open")}
						title='close'
					>
						X
					</ButtonWithChildren>
				</Bar.Body>
				<Bar.Footer className={styles.sideBar__footer}>
					<p>&copy; by Borza Peter</p>
				</Bar.Footer>
			</Bar>
			<ButtonWithChildren
				onClick={() => console.log("open")}
				title='open'
			>
				<Bars
					className={styles.buttonWrapper__open}
					onClick={() => console.log("open")}
				/>
			</ButtonWithChildren>
		</div>
	);
};

export default Aside;
