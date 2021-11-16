import { FC, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import { icons } from "../../utils";
import { toggleSidePanel } from "../../components/memoryGame-story";
import { toggleBubbleSidePanel } from "../../components/bubble-story/bubbleSlice";
import { bubbleSidePanelSelector } from "../../components/bubble-story/selectors";
import { sidePanelSelector } from "../../components/memoryGame-story";

import styles from "./NavBar.module.scss";

interface Props {
	renderBody: () => ReactNode;
}

const NavBar: FC<Props> = ({ renderBody }) => {
	const openBubble = useSelector(bubbleSidePanelSelector);
	const openColors = useSelector(sidePanelSelector);
	const dispatch = useDispatch();
	return (
		<nav className={styles.nav}>
			<div
				className={styles.toggle}
				onClick={() => dispatch(toggleBubbleSidePanel(!openBubble))}
			>
				<icons.Bars className={styles.toggleMenu} />
				<p>bubble</p>
			</div>

			<div
				className={styles.toggle}
				onClick={() => dispatch(toggleSidePanel(!openColors))}
			>
				<icons.Bars className={styles.toggleMenu} />
				<p>color</p>
			</div>
			<ul>{renderBody()}</ul>
		</nav>
	);
};

export default NavBar;
