import { FC, ReactNode } from "react";

interface Props {
	label: string;
	renderButtons(): ReactNode;
}

const LiftButtons: FC<Props> = ({ label, renderButtons }) => {
	return (
		<div>
			<span>{label}:</span>
			{renderButtons()}
		</div>
	);
};

export default LiftButtons;
