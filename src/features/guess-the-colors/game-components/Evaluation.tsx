import classNames from "classnames";
import React from "react";
import { useEffect } from "react";
import { shuffle } from "utils";
import { COLORS_TO_GUESS_COUNT, ResultType } from "../state";

type EvaluationProps = {
    results: ResultType;
    values: string[];
    handleResults: () => void;
    enabledResults: boolean;
};

const Evaluation = ({ results, values, handleResults, enabledResults }: EvaluationProps) => {
    const noResults = results.length === 0;
    const allResults = results.length === COLORS_TO_GUESS_COUNT;

    const validResult = results.find(item => item === 1 || item === 2) && allResults;

    const invalidResults = !allResults || !validResult;

    const finalResults = invalidResults ? [0, 0, 0, 0] : results;

    const resultBoxClasses = classNames("score_box", {
        ["score_box__valid"]: !noResults,
        ["score_box__enabled"]: enabledResults,
    });

    useEffect(() => {
        shuffle(finalResults);
    }, []);

    return (
        <div className="evaluation_wrapper" onClick={handleResults} title="click to get results">
            {finalResults.map((result, idx) => (
                <div
                    key={`value-${idx}`}
                    className={resultBoxClasses}
                    style={{ backgroundColor: values[result] }}
                />
            ))}
        </div>
    );
};

export default Evaluation;
