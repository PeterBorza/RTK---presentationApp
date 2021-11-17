import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getColors } from "../thunks";
import {
	memoryGameState,
	paletSelector,
	sidePanelSelector,
} from "../selectors";

import { AsidePlatform, Button } from "../../../reusables";
import { Pending, Error, Url } from "../../../app/constants";

import styles from "./Colors.module.scss";
import { toggleSidePanel } from "..";

const ColorsWrapper: React.FC = () => {
	const { colors, pending, error } = useSelector(memoryGameState);
	const palets = useSelector(paletSelector);
	const isOpen = useSelector(sidePanelSelector);
	const dispatch = useDispatch();

	const isColors = colors.length !== 0;

	const showAsyncColors = () => {
		dispatch(getColors(Url.COLORS));
	};

	const handleCloseMenu = () => {
		dispatch(toggleSidePanel(false));
	};

	const handleOpenMenu = () => {
		dispatch(toggleSidePanel(true));
	};

	const render = () => {
		return (
			<>
				<Button
					onClick={showAsyncColors}
					value={pending ? Pending.MESSAGE : "Fetch ColorPalets"}
					isDisabled={isColors}
				/>
				<Button
					onClick={handleOpenMenu}
					value='Menu'
					isDisabled={!isColors}
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
			</>
		);
	};

	return (
		<AsidePlatform
			renderBody={() => render()}
			isOpen={isOpen}
			onClose={handleCloseMenu}
		/>
	);
};

export default ColorsWrapper;
