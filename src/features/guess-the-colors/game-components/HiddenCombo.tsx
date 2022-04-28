import React from "react";
import { IguessGameItem } from "../state";

type HiddenComboProps = {
    combination?: IguessGameItem[];
};

const HiddenCombo = ({ combination }: HiddenComboProps) => {
    const comboItem = ({ id, color, order }: IguessGameItem) => {
        return (
            <div key={id} className="hidden_combo" style={{ backgroundColor: color }}>
                {order}
            </div>
        );
    };
    return <div className="combination">{combination?.map(comboItem)}</div>;
};

export default HiddenCombo;
