import { FC, ReactNode } from "react";
import ScrollTable from ".";
import { LoadingWrapper } from "..";

export interface Props {
	renderBody: () => ReactNode;
	renderHeader: () => ReactNode;
	loading: boolean;
}

const Table: FC<Props> = ({ renderBody, renderHeader, loading }) => {
	return loading ? (
		<LoadingWrapper loading={loading} />
	) : (
		<ScrollTable>
			<ScrollTable.Header>{renderHeader()}</ScrollTable.Header>
			<ScrollTable.Body>{renderBody()}</ScrollTable.Body>
		</ScrollTable>
	);
};

export default Table;
