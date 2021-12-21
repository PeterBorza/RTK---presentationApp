import React, { FC, ReactNode } from "react";

type Props = {
    tableTitle: string;
    children: ReactNode;
    className: string;
};

const TableHeader: FC<Props> = ({ tableTitle, children, className }) => {
    return (
        <div className={className}>
            <h1>{tableTitle}</h1>
            {children}
        </div>
    );
};

export default TableHeader;
