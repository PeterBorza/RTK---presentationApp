import { FC, ReactNode } from "react";
import ScrollTable from ".";

export interface Props {
	renderBody: () => ReactNode;
	renderHeader: () => ReactNode;
}

const Table: FC<Props> = ({ renderBody, renderHeader }) => {
	return (
		<ScrollTable>
			<ScrollTable.Header>{renderHeader()}</ScrollTable.Header>
			<ScrollTable.Body>{renderBody()}</ScrollTable.Body>
		</ScrollTable>
	);
};

export default Table;
