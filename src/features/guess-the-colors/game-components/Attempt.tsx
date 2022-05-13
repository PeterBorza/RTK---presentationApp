import React from "react";

import "./_index.scss";

type AttemptProps = {};

const Attempt: React.FC<AttemptProps> = ({ children }) => {
    return <div className="options_wrapper">{children}</div>;
};

export default Attempt;
