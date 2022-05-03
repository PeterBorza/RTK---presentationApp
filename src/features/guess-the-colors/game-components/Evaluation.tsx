import React from "react";
import { shuffle } from "utils";
import { ResultType } from "../state";

type EvaluationProps = {
    results?: ResultType;
};

const Evaluation = ({ results = [0, 0, 0, 0] }: EvaluationProps) => {
    const noResults = results.length === 0;
    const emptyResults = new Array(4).fill("none").map(item => "none");
    const values = ["none", "white", "black"];
    const valueColors = results.length !== 0 ? values : emptyResults;

    const shuffledResults = !noResults && shuffle(results);
    const x = shuffledResults || emptyResults;
    return (
        <div className="evaluation_wrapper">
            {x.map((result, idx) => (
                <div
                    key={`value-${idx}`}
                    className="score_box"
                    style={{ backgroundColor: valueColors[result] }}
                />
            ))}
        </div>
    );
};

export default Evaluation;
