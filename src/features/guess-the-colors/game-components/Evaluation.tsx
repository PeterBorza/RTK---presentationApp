import React from "react";
import { useEffect } from "react";
import { shuffle } from "utils";
import { ResultType } from "../state";

type EvaluationProps = {
    results: ResultType;
};

const Evaluation = ({ results }: EvaluationProps) => {
    const values = ["transparent", "white", "black"];

    const validResult = results.find(item => item === 1 || item === 2) && results.length === 4;

    const invalidResults = results.length !== 4 || !validResult;

    const finalResults = invalidResults ? [0, 0, 0, 0] : results;

    useEffect(() => {
        shuffle(finalResults);
    }, []);

    return (
        <div className="evaluation_wrapper">
            {finalResults.map((result, idx) => (
                <div
                    key={`value-${idx}`}
                    className="score_box"
                    style={{ backgroundColor: values[result] }}
                />
            ))}
        </div>
    );
};

export default Evaluation;
