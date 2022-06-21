import React from "react";
import classNames from "classnames";
import { IguessGameItem } from "../state";

type HiddenComboProps = {
    combination?: IguessGameItem[];
    show?: boolean;
};

const HiddenCombo = ({ combination, show }: HiddenComboProps) => {
    const hiddenComboClasses = classNames("hidden_combo", {
        hidden_combo__revealed: show,
    });
    const comboItem = ({ id, color }: IguessGameItem) => {
        return (
            <div
                key={id}
                className={hiddenComboClasses}
                style={{ backgroundColor: show ? color : "transparent" }}
            />
        );
    };
    return <div className="combination">{combination?.map(comboItem)}</div>;
};

export default HiddenCombo;
