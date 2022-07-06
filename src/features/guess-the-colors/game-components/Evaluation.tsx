import React from "react";
import { shuffle } from "utils";
import { ResultType, initialResults } from "../state";

import classNames from "classnames";

type EvaluationProps = {
    results: ResultType;
    handleResults: () => void;
    enabledResults: boolean;
    initialValues: string[];
    tooltip: string;
};

const Evaluation = ({
    results,
    handleResults,
    enabledResults,
    initialValues,
    tooltip,
}: EvaluationProps) => {
    const emptyResults = results?.length === 0;

    const finalResults: ResultType = React.useMemo(
        () => (results && !emptyResults ? results : initialResults),
        [emptyResults, results],
    );

    const resultBoxClasses = classNames("score_box", {
        score_box__valid: !emptyResults,
        score_box__enabled: enabledResults,
    });

    React.useEffect(() => {
        shuffle(finalResults);
    }, [finalResults]);

    return (
        <div className="evaluation_wrapper" onClick={handleResults} title={tooltip}>
            {finalResults.map((result, idx) => (
                <div
                    key={`value-${idx}`}
                    className={resultBoxClasses}
                    style={{ backgroundColor: initialValues[result] }}
                />
            ))}
        </div>
    );
};

export default Evaluation;
