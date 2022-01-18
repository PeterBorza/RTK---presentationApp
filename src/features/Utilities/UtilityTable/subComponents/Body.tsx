import React, { FC } from "react";

type BodyProps = {
    className: string;
};

const Body: FC<BodyProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default Body;
