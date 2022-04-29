import React from "react";

type PlayCardType = {
    isEnabled: boolean;
};

const PlayCard: React.FC<PlayCardType> = ({ children, isEnabled }) => {
    return <div className="playcard">{isEnabled ? children : "fuck off"}</div>;
};

export default PlayCard;
