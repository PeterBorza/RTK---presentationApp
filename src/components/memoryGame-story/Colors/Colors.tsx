import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAsyncColors } from "../thunks";
import { paletSelector, colorSelector } from "../selectors";
import { MemoryGameState } from "../types";
import { Button, SideBar } from "../../../reusables";
import { SideBarContext } from "../../../context";

import classNames from "classnames";
import styles from "./Colors.module.scss";

const ColorsWrapper: React.FC = () => {
	const [isOpen, setIsOpen] = useContext(SideBarContext);
	const palets = useSelector(paletSelector);
	const colors = useSelector(colorSelector);
	const pending = useSelector((state: MemoryGameState) => state.pending);
	const dispatch = useDispatch();

	const wrapper = classNames(styles.container, {
		[styles.container__margin]: isOpen,
	});

	const showAsyncColors = () => {
		colors.length === 0 && dispatch(getAsyncColors());
	};

	return (
		<>
			<SideBar visible />
			<div className={wrapper}>
				<Button onClick={showAsyncColors} value='Fetch ColorPalets' />
				{pending && <h1>{pending}</h1>}
				<div className={styles.colorWrapper}>
					{palets[0] &&
						palets[0].map(set => (
							<div
								key={set}
								className={styles.colors}
								style={{ background: `#${set}` }}
							>{`#${set}`}</div>
						))}
				</div>
			</div>
		</>
	);
};

export default ColorsWrapper;
