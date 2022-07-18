export type Direction = "up" | "down" | "static";
export type BlockPosition = "left" | "right";
export type LiftName = "A" | "B";
export type LevelCount = number;

export interface Lift {
    name: LiftName;
    doorsAreOpen: boolean;
    isMoving: boolean;
    position: number;
    disabled: boolean;
    direction: Direction;
    blockPosition: BlockPosition;
}
export interface LiftState {
    lifts: Lift[];
    numberOfLevels: LevelCount;
    speed: number;
}

const lifts: Pick<Lift, "name" | "position" | "blockPosition">[] = [
    { name: "A", position: 0, blockPosition: "left" },
    { name: "B", position: 6, blockPosition: "right" },
];

export const initialState: LiftState = {
    lifts: lifts.map(lift => ({
        ...lift,
        doorsAreOpen: false,
        isMoving: false,
        disabled: false,
        direction: "static",
    })),
    numberOfLevels: 7,
    speed: 2000,
};
