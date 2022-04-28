import React from "react";

type ContainerProps = {};

const AttemptsContainer: React.FC<ContainerProps> = ({ children }) => {
    return <div className="attempts_container">{children}</div>;
};

export default AttemptsContainer;
