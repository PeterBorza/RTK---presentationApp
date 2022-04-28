import React from "react";

type EvaluationProps = {
    results: string[];
};

const Evaluation = ({ results }: EvaluationProps) => {
    return (
        <div className="evaluation_wrapper">
            {results.map((result, idx) => (
                <div
                    key={`result-${idx}`}
                    className="score_box"
                    style={{ backgroundColor: result }}
                />
            ))}
        </div>
    );
};

export default Evaluation;
