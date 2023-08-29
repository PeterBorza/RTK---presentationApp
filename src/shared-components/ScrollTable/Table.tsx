import React, { ReactNode } from "react";
import { default as Tbl } from ".";

export interface Props {
    renderHeaders: () => ReactNode;
    children: ReactNode;
}

// eslint-disable-next-line react/display-name
const Table = React.forwardRef<HTMLDivElement, Props>(({ children, renderHeaders }, ref) => {
    return (
        <Tbl ref={ref}>
            <Tbl.Header>{renderHeaders()}</Tbl.Header>
            <Tbl.Body>{children}</Tbl.Body>
        </Tbl>
    );
});

export default Table;
