import { FC, ReactNode } from "react";
import styles from "./ButtonWithChildren.module.scss";

interface ButtonWithChildrenProps {
	onClick: () => void;
	title: string;
	children: ReactNode;
}

const ButtonWithChildren: FC<ButtonWithChildrenProps> = ({
	children,
	onClick,
	title,
}) => {
	return (
		<button
			className={styles.buttonWrapper}
			onClick={onClick}
			title={title}
		>
			{children}
		</button>
	);
};

export default ButtonWithChildren;
