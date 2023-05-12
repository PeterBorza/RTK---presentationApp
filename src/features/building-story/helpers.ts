import { DirectionType, LevelCount } from "./state";

export const getDirection = (level: LevelCount, position: number): DirectionType => {
    if (level === position) return "static";
    return level < position ? "down" : "up";
};
