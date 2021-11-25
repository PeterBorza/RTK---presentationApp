import { FC, ReactNode } from "react";

import styles from "./ButtonWrapper.module.scss";
import classNames from "classnames";

type Props = {
	renderButtons: () => ReactNode;
	dark?: boolean;
};

const ButtonWrapper: FC<Props> = ({ renderButtons, dark = false }) => {
	const buttonWrapper = classNames(styles.buttonWrapper, {
		[styles.buttonWrapper__dark]: dark,
	});
	return <div className={buttonWrapper}>{renderButtons()}</div>;
};

export default ButtonWrapper;
