import React from "react";
import { CustomIcon } from "shared-components";
import { icons } from "utils";

type CardIconProps = {
    onCancel?: () => void;
    onSubmit: () => void;
};

const CardIcons = ({ onCancel, onSubmit }: CardIconProps) => {
    return (
        <div className="icons">
            <CustomIcon onClick={onCancel} title="cancel" icon={icons.x} />
            <CustomIcon onClick={onSubmit} title="submit" icon={icons.checkMark} />
        </div>
    );
};

export default CardIcons;
