import { FC, ReactNode, useRef } from "react";
import { default as Tbl } from ".";
import { useOnClickOutside } from "hooks";

export interface Props {
    onClickOutside: () => void;
    renderHeaders: () => ReactNode;
}

const Table: FC<Props> = ({ children, onClickOutside, renderHeaders }) => {
    const tableRef = useRef<HTMLDivElement>(null);
    useOnClickOutside([tableRef], onClickOutside);

    return (
        <Tbl ref={tableRef}>
            <Tbl.Header>{renderHeaders()}</Tbl.Header>
            <Tbl.Body>{children}</Tbl.Body>
        </Tbl>
    );
};

export default Table;
