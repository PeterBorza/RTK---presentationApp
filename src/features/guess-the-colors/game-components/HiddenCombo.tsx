import React from "react";
import { IguessGameItem } from "../state";

import classNames from "classnames";

type Props = {
    finishedGame: boolean;
    gameCombo: IguessGameItem[];
};

const HiddenCombo = ({ finishedGame, gameCombo }: Props) => {
    const hiddenComboClasses = classNames("hidden_combo", {
        hidden_combo__revealed: finishedGame,
    });
    const comboItem = ({ id, color }: IguessGameItem) => {
        return (
            <div
                key={id}
                className={hiddenComboClasses}
                style={{ backgroundColor: finishedGame ? color : "transparent" }}
            />
        );
    };
    return <div className="combination">{gameCombo?.map(comboItem)}</div>;
};

export default HiddenCombo;
