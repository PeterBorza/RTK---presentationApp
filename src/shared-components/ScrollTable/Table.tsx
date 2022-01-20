import { FC, ReactNode, useRef } from "react";
import ScrollTable from ".";
import { LoadingWrapper } from "..";
import { useOnClickOutside } from "../../hooks";

export interface Props {
    renderBody: () => ReactNode;
    renderHeader: () => ReactNode;
    onClickOutside: () => void;
    loading: boolean;
}

const Table: FC<Props> = ({
    renderBody,
    renderHeader,
    onClickOutside,
    loading,
}) => {
    const tableRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(tableRef, onClickOutside);
    return (
        <ScrollTable ref={tableRef}>
            {loading ? (
                <LoadingWrapper loading={loading} />
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
