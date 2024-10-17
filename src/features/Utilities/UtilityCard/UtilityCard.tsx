import { UtilityStateUnit } from "../types";

import CardCell from "./CardCell";

import classNames from "classnames";
import styles from "./UtilityCard.module.scss";

interface Props {
  onClick: () => void;
  dark?: boolean;
  unit: UtilityStateUnit;
}

const UtilityCard = ({ onClick, dark = false, unit }: Props) => {
  const { readDate, index, consumption, estimate, bill, selected } = unit;
  const classes = classNames(styles.wrapper, {
    [styles.selected]: selected,
    [styles.wrapper__dark]: dark,
  });

  return (
    <div className={classes} onClick={onClick}>
      <CardCell dark={dark} title={readDate} content={readDate} />
      <CardCell dark={dark} title={index} content={index} />
      <CardCell dark={dark} title={consumption.toString()} content={consumption} />
      <CardCell dark={dark} content={estimate} />
      <CardCell dark={dark} title={bill} content={bill} />
    </div>
  );
};

export default UtilityCard;
