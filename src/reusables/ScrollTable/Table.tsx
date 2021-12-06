import { FC, ReactNode } from "react";
import ScrollTable from ".";
import { Loader, LoadingWrapper } from "..";

export interface Props {
	renderBody: () => ReactNode;
	renderHeader: () => ReactNode;
	loading: boolean;
	message: string;
}

const Table: FC<Props> = ({ renderBody, renderHeader, loading, message }) => {
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
