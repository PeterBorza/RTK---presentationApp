import React from "react";
import { IguessGameItem } from "../state";

type HiddenComboProps = {
    combination?: IguessGameItem[];
    show?: boolean;
};

const HiddenCombo = ({ combination, show }: HiddenComboProps) => {
    const comboItem = ({ id, color }: IguessGameItem) => {
        return <div key={id} className="hidden_combo" style={{ backgroundColor: color }} />;
    };
    return <div className="combination">{combination?.map(comboItem)}</div>;
};

export default HiddenCombo;
