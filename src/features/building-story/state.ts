import { icons } from "utils";

export enum Direction {
    UP = "up",
    DOWN = "down",
    STATIC = "static",
}
export type LiftName = "A" | "B";
export type LevelCount = number;

export interface Lift {
    name: LiftName;
    isMoving: boolean;
    position: number;
    disabled: boolean;
    direction: Direction;
}
export interface LiftState {
    lifts: Lift[];
    numberOfLevels: LevelCount;
    speed: number;
}

const { faDown, faUp, stop } = icons;

export const directionIcons: Record<Direction, JSX.Element> = {
    down: faDown,
    up: faUp,
    static: stop,
};

const INITIAL_NUMBER_OF_LEVELS = 9;

const lifts: Record<LiftName, number> = {
    A: 0,
    B: INITIAL_NUMBER_OF_LEVELS - 1,
};

export const initialState: LiftState = {
    lifts: Object.entries(lifts).map(([key, value]) => ({
        name: key as LiftName,
        position: value,
        isMoving: false,
        disabled: false,
        direction: Direction.STATIC,
    })),
    numberOfLevels: INITIAL_NUMBER_OF_LEVELS,
    speed: 1000,
};
