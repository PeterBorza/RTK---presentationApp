import { FC, ReactNode } from "react";
import ScrollTable from ".";
import { labelState } from "../../components/house-keeping/selectors";
import { useSelector } from "react-redux";

export interface Props {
	renderBody: () => ReactNode;
}

const Table: FC<Props> = ({ renderBody }) => {
	const labels = useSelector(labelState);

	return (
		<ScrollTable>
			<ScrollTable.Header>
				{labels.map(label => (
					<span key={label}>{label}</span>
				))}
			</ScrollTable.Header>
			<ScrollTable.Body>{renderBody()}</ScrollTable.Body>
		</ScrollTable>
	);
};

export default Table;
