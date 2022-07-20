import React from "react";
import { IguessGameItem } from "../state";

import classNames from "classnames";
import { FlipCard } from "shared-components";

type Props = {
    finishedGame: boolean;
    gameCombo: IguessGameItem[];
};

const HiddenCombo = ({ finishedGame, gameCombo }: Props) => {
    // const hiddenComboClasses = classNames("hidden_combo", {
    //     hidden_combo__revealed: finishedGame,
    // });
    const comboItem = ({ id, color }: IguessGameItem) => {
        return (
            <div className="hidden_combo" key={id}>
                <FlipCard
                    frontContent={() => <div key={id} className="front-card" />}
                    backContent={() => (
                        <div key={id} className="back-card" style={{ backgroundColor: color }} />
                    )}
                    flipped={finishedGame}
                    darkBack
                />
            </div>
        );
    };
    return <div className="combination">{gameCombo.map(comboItem)}</div>;
};

export default HiddenCombo;
