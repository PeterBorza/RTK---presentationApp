import { FC } from "react";

import { Button } from "../../../reusables";

import styles from "./GameEnd.module.scss";

interface Props {
	count: number;
	message: string;
	onClick: () => void;
	buttonLabel: string;
}

const GameEnd: FC<Props> = ({ count, message, onClick, buttonLabel }) => {
	const startMessage = message.split(" ").slice(0, -1).join(" ");
	const endMessage = message.split(" ").slice(-1);

	return (
		<div className={styles.finished}>
			<h1>
				{startMessage}
				<span>{count}</span>
				{endMessage}
			</h1>
			<Button
				onClick={onClick}
				value={buttonLabel}
				className={styles.newGameButton}
			/>
		</div>
	);
};

export default GameEnd;
