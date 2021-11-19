import { FC, ReactNode } from "react";
import ScrollTable from ".";
import { Loader } from "..";

export interface Props {
	renderBody: () => ReactNode;
	renderHeader: () => ReactNode;
	loading: boolean;
	message: string;
}

const Table: FC<Props> = ({ renderBody, renderHeader, loading, message }) => {
	return (
		<ScrollTable>
			{loading ? (
				<Loader dots={5} message={message} />
			) : (
				<>
					<ScrollTable.Header>{renderHeader()}</ScrollTable.Header>
					<ScrollTable.Body>{renderBody()}</ScrollTable.Body>
				</>
			)}
		</ScrollTable>
	);
};

export default Table;
