export type Direction = "up" | "down" | "static";
export type LiftDirection = "name" | "direction";
export type LiftPosition = "name" | "position";
export type LiftActive = "name" | "isActive";
export type LiftMoving = "name" | "isMoving";
export type LiftDisabled = "name" | "disabled";
export type BlockPosition = "left" | "right";
export type LiftName = "A" | "B";

export interface Lift {
    name: LiftName;
    isActive: boolean;
    isMoving: boolean;
    position: number;
    disabled: boolean;
    direction: Direction;
    blockPosition: BlockPosition;
}
export interface LiftState {
    lifts: Lift[];
    numberOfLevels: number;
    speed: number;
}

export const initialState: LiftState = {
    lifts: [
        {
            name: "A",
            isActive: false,
            isMoving: false,
            position: 0,
            disabled: false,
            direction: "static",
            blockPosition: "left",
        },
        {
            name: "B",
            isActive: false,
            isMoving: false,
            position: 6,
            disabled: false,
            direction: "static",
            blockPosition: "right",
        },
    ],
    numberOfLevels: 7,
    speed: 2000,
};
