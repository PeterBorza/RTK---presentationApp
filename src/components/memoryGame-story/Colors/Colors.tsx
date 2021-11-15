import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getColors } from "../thunks";
import { memoryGameState, paletSelector } from "../selectors";
import { Button, SideBar } from "../../../reusables";
import { SideBarContext } from "../../../context";
import { Pending, Error, Url } from "../../../app/constants";

import classNames from "classnames";
import styles from "./Colors.module.scss";

const ColorsWrapper: React.FC = () => {
	const [isOpen, setIsOpen] = useContext(SideBarContext);
	const { colors, pending, error } = useSelector(memoryGameState);
	const palets = useSelector(paletSelector);
	const dispatch = useDispatch();

	const wrapper = classNames(styles.container, {
		[styles.container__margin]: isOpen,
	});

	const isColors = colors.length !== 0;

	const showAsyncColors = () => {
		dispatch(getColors(Url.COLORS));
	};

	return (
		<>
			<SideBar visible />
			<div className={wrapper}>
				<Button
					onClick={showAsyncColors}
					value={pending ? Pending.MESSAGE : "Fetch ColorPalets"}
					isDisabled={isColors}
				/>

				<div className={styles.colorWrapper}>
					{palets[0] ? (
						palets[0].map(set => (
							<div
								key={set}
								className={styles.colors}
								style={{ background: `#${set}` }}
							>{`#${set}`}</div>
						))
					) : error ? (
						<h1>{Error.MESSAGE}</h1>
					) : null}
				</div>
			</div>
		</>
	);
};

export default ColorsWrapper;
