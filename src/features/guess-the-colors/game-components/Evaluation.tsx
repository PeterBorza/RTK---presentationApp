import React from "react";
import { shuffle } from "utils";
import { ResultType, guessGameData, initialResults } from "../state";

import classNames from "classnames";

type EvaluationProps = {
    results?: ResultType;
    handleResults: () => void;
    enabledResults: boolean;
};

const Evaluation = ({ results, handleResults, enabledResults }: EvaluationProps) => {
    const { resultValues, tooltip } = guessGameData;
    const emptyResults = results?.length === 0;

    const finalResults: ResultType = React.useMemo(
        () => (results && !emptyResults ? results : initialResults),
        [emptyResults, results],
    );

    const resultBoxClasses = classNames("score_box", {
        score_box__valid: !emptyResults,
        score_box__enabled: enabledResults,
    });

    const setTooltip = emptyResults ? tooltip.initial : tooltip.validResult;

    React.useEffect(() => {
        shuffle(finalResults);
    }, [finalResults]);

    return (
        <div className="evaluation_wrapper" onClick={handleResults} title={setTooltip}>
            {finalResults.map((result, idx) => (
                <div
                    key={`value-${idx}`}
                    className={resultBoxClasses}
                    style={{ backgroundColor: resultValues[result] }}
                />
            ))}
        </div>
    );
};

export default Evaluation;
