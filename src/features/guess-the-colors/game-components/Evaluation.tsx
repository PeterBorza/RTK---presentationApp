import React from "react";
import { shuffle } from "utils";
import { ResultType, resultValues } from "../state";

import classNames from "classnames";

type EvaluationProps = {
    results?: ResultType;
    handleResults: () => void;
    enabledResults: boolean;
};

const Evaluation = ({ results, handleResults, enabledResults }: EvaluationProps) => {
    const validResult = results?.find(item => item === 1 || item === 2);
    const finalResults: ResultType = React.useMemo(
        () => (results && validResult ? results : [0, 0, 0, 0]),
        [validResult, results],
    );

    const resultBoxClasses = classNames("score_box", {
        score_box__valid: validResult,
        score_box__enabled: enabledResults,
    });

    React.useEffect(() => {
        shuffle(finalResults);
    }, [finalResults]);

    return (
        <div className="evaluation_wrapper" onClick={handleResults} title="click to get results">
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
