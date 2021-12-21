import { FC } from "react";

import { icons } from "../../utils";

import classNames from "classnames";
import styles from "./InputCard.module.scss";

export interface InputCardType {
	onClick?: () => void;
	onChange: (e: React.ChangeEvent) => void;
	isDark?: boolean;
	placeHolder?: string | undefined;
	isButton?: boolean;
	inputName: string;
	value: string;
	size?: "small" | "medium" | "large" | "xxl";
}

const InputCard: FC<InputCardType> = ({
	onClick,
	onChange,
	isDark = false,
	placeHolder,
	isButton = false,
	inputName,
	value,
	size = "medium",
}) => {
	const toggleDark = classNames(
		styles["input-wrapper"],
		[styles[`input-wrapper__${size}`]],
		{
			[styles["dark-mode"]]: isDark,
		}
	);

	return (
		<div className={toggleDark}>
			<input
				className={styles["input-style"]}
				type='text'
				value={value}
				name={inputName}
				placeholder={placeHolder}
				onChange={onChange}
			/>
			{isButton && (
				<button
					type='button'
					className={styles["button-style"]}
					onClick={onClick}
				>
					<icons.HiOutlineArrowCircleRight
						className={styles["input-icon"]}
					/>
				</button>
			)}
		</div>
	);
};

export default InputCard;
