import { ReactNode, useRef } from "react";
import ScrollTable from ".";
import { LoadingWrapper } from "..";
import { Pending } from "../../app";
import { useOnClickOutside } from "../../hooks";

export interface Props {
    renderBody: () => ReactNode;
    renderHeader: () => ReactNode;
    onClickOutside: () => void;
    loading: boolean;
}

const Table = ({ renderBody, renderHeader, onClickOutside, loading }: Props) => {
    const tableRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(tableRef, onClickOutside);
    return (
        <ScrollTable ref={tableRef}>
            {loading ? (
                <LoadingWrapper loading={loading} loadingMessage={Pending.MESSAGE} />
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
