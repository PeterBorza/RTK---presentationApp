import { LevelCount, Lift } from "../state";

import classNames from "classnames";
import styles from "./LiftCabin.module.scss";

interface Props {
  data: Lift;
  speed: number;
  side: "left" | "right";
  levelCount: LevelCount;
}

const LiftCabin = ({ data, speed, side, levelCount }: Props) => {
  const { name, isMoving, position } = data;

  const cabinClasses = classNames(
    styles.cabinWrapper,
    [styles[`cabinWrapper__changePosition-${position}`]],
    [styles[`cabinWrapper__transitionSpeed-${speed}`]],
    [styles[`cabinWrapper__cabinHeight-${levelCount}`]],
    [styles[`cabinWrapper__${side}`]],
    isMoving ? styles.closeDoors : styles.openDoors,
  );

  return <div className={cabinClasses} data-content={name} />;
};

export default LiftCabin;
