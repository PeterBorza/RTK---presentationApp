import React, { ComponentProps, FC } from "react";

const LiftButton: FC<ComponentProps<"button">> = ({
	onClick,
	className,
	disabled,
	value,
}) => {
	return (
		<button onClick={onClick} className={className} disabled={disabled}>
			{value}
		</button>
	);
};

export default LiftButton;
