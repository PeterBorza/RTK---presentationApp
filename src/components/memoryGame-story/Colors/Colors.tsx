import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAsyncColors } from "../thunks";
import { paletSelector, colorSelector } from "../selectors";
import { MemoryGameState } from "../types";
import { Button } from "../../../reusables";

import styles from "./Colors.module.scss";

const ColorsWrapper: React.FC = () => {
	const palets = useSelector(paletSelector);
	const colors = useSelector(colorSelector);
	const pending = useSelector((state: MemoryGameState) => state.pending);
	const dispatch = useDispatch();

	const showAsyncColors = () => {
		colors.length === 0 && dispatch(getAsyncColors());
	};

	return (
		<div className={styles.container}>
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
	);
};

export default ColorsWrapper;
