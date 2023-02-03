import { FC, useMemo, useRef } from "react";
import ScrollTable from ".";
import { Loader } from "..";
import { Pending } from "app";
import { TableTitle } from "features/Utilities";
import { useOnClickOutside } from "hooks";

export interface Props {
    headers: string[];
    onClickOutside: () => void;
    loading: boolean;
}

const Table: FC<Props> = ({ children, headers, onClickOutside, loading }) => {
    const tableRef = useRef<HTMLDivElement>(null);
    useOnClickOutside([tableRef], onClickOutside);

    const renderHeaders = useMemo(
        () => headers.map(label => <TableTitle key={label} name={label} />),
        [headers],
    );
    return (
        <ScrollTable ref={tableRef}>
            {loading ? (
                <Loader message={Pending.MESSAGE} />
            ) : (
                <>
                    <ScrollTable.Header>{renderHeaders}</ScrollTable.Header>
                    <ScrollTable.Body>
                        <ul>{children}</ul>
                    </ScrollTable.Body>
                </>
            )}
        </ScrollTable>
    );
};

export default Table;
