export type Direction = "up" | "down" | "static";

export interface Lift {
    name: string;
    isActive: boolean;
    position: number;
    disabled: boolean;
    direction: Direction;
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
            position: 0,
            disabled: false,
            direction: "static",
        },
        {
            name: "B",
            isActive: false,
            position: 6,
            disabled: false,
            direction: "static",
        },
    ],
    numberOfLevels: 7,
    speed: 1000,
};

export const directions: Pick<Lift, "name" | "direction">[] = [
    {
        name: "A",
        direction: "down",
    },
    {
        name: "A",
        direction: "up",
    },
    {
        name: "A",
        direction: "static",
    },
    {
        name: "B",
        direction: "down",
    },
    {
        name: "B",
        direction: "up",
    },
    {
        name: "B",
        direction: "static",
    },
];
