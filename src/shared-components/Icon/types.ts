type Mutable<Type> = {
    -readonly [Key in keyof Type]: Type[Key];
};

type ITypes = readonly string[];

const ICON_TYPES: ITypes = [
    "user",
    "trash",
    "sun",
    "moon",
    "arrowRight",
    "arrowLeft",
    "arrowDown",
    "arrowUp",
    "check",
    "bars",
];

type Icons = typeof ICON_TYPES;
export type SvgIconType = Icons[number];

export type IconCollection = Record<SvgIconType, JSX.Element>;

const SVG_SIZES = ["mini", "small", "medium", "large"] as const;
type Sizes = typeof SVG_SIZES;
export const sizes: Mutable<Sizes> = ["mini", "small", "medium", "large"];
export type SvgIconSize = Sizes[number];
