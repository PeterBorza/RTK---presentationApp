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
    distanceFromCall: number;
}
export interface LiftState {
    lifts: Lift[];
    numberOfLevels: LevelCount;
    speed: number;
}

const INITIAL_NUMBER_OF_LEVELS = 9;

const lifts: Pick<Lift, "name" | "position">[] = [
    { name: "A", position: 0 },
    { name: "B", position: INITIAL_NUMBER_OF_LEVELS - 1 },
];

export const initialState: LiftState = {
    lifts: lifts.map(lift => ({
        ...lift,
        isMoving: false,
        disabled: false,
        direction: Direction.STATIC,
        distanceFromCall: 0,
    })),
    numberOfLevels: INITIAL_NUMBER_OF_LEVELS,
    speed: 2000,
};
