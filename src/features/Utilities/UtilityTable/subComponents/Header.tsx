import React, { FC } from "react";

type HeaderProps = {
    className: string;
};

const Header: FC<HeaderProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default Header;
