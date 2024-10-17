import React from "react";
import { shuffle } from "utils";
import { ResultType } from "../state";

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
  const resultBoxClasses = classNames("score_box", {
    score_box__valid: results,
    score_box__enabled: enabledResults,
  });

  React.useEffect(() => {
    shuffle(results);
  }, [results]);

  return (
    <div className="evaluation_wrapper" onClick={handleResults} title={tooltip}>
      {results.map((result, idx) => (
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
