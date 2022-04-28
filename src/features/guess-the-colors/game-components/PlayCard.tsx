import React from "react";

type PlayCardType = {};

const PlayCard: React.FC<PlayCardType> = ({ children }) => {
    return <div className="playcard">{children}</div>;
};

export default PlayCard;
