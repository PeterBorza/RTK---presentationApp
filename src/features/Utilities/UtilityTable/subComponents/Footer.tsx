import React, { FC } from "react";

type FooterProps = {
    className: string;
};

const Footer: FC<FooterProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default Footer;
