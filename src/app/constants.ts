export enum BaseAPI {
    UTILITIES_URL = "http://localhost:5006",
    COINS_URL = "http://localhost:5008",
    BUBBLES_URL = "http://localhost:5010",
}

// TODO Try and add the above to .env

export enum LinkUrls {
    HOME = "/",
    UTILITIES = "utilities",
    GAS = "gas",
    LIGHT = "light",
    BUILDING = "building",
    BUBBLES = "bubbles",
    PHOTOS = "photos",
    GAME = "game",
    RUBIK = "rubik",
    SCROLL = "scroll",
    COINS = "coins",
}

export const getHomeLabel = (item: string) => (item === LinkUrls.HOME ? "home" : item);

export enum Error {
    MESSAGE = "We are sorry, an error occured. Please try again later",
}

export enum Pending {
    MESSAGE = "Loading, please wait...",
}

export enum UnderConstructionText {
    MESSAGE = "We are terribly sorry, this feature is currently under construction...",
}

export enum ComingSoonText {
    MESSAGE = "Coming Soon...",
}

export enum OpenMenu {
    MESSAGE = "Open menu",
}

export enum CloseMenu {
    MESSAGE = "Close menu",
}

export enum Forbidden {
    MESSAGE = "You are not authorized to see this",
}

export enum DummyText {
    MESSAGE = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolores enim iure! Culpa eaque nemo officia aspernatur debitis, atque commodi? Atque quae eos consectetur quas. Nisi voluptate ut ipsam quos! Cupiditate animi quaerat inventore saepe repudiandae distinctio ipsam. Magnam numquam dolorum nihil inventore fuga amet!",
}

export enum AppMessages {
    ERROR = "We are sorry, an error occured. Please try again later",
    PENDING = "Loading, please wait...",
    UNDER_CONSTRUCTION = "We are terribly sorry, this feature is currently under construction...",
    COMING_SOON = "Coming soon...",
    OPEN_MENU = "Open menu",
    CLOSE_MENU = "Close menu",
    FORBIDDEN = "You are not authorized to see this",
    DUMMY_TEXT = "tetur adipisicing elit. Incidunt dolores enim iure! Culpa eaque nemo officia aspernatur debitis, atque commodi? Atque quae eos consectetur quas. Nisi voluptate ut ipsam quos! Cupiditate animi quaerat inventore saepe repudiandae distinctio ipsam. Magnam numquam dolorum nihil inventore fuga amet!",
}

// TODO Organize the above enums into one object
