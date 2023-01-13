export enum BaseAPI {
    UTILITIES_URL = "http://localhost:5006",
    COINS_URL = "http://localhost:5008",
    BUBBLES_URL = "http://localhost:5010",
}

// TODO  Add the above to .env

export enum LinkUrls {
    GAS = "gas",
    LIGHT = "light",
    BUILDING = "building",
    BUBBLES = "bubbles",
    GAME = "game",
    RUBIK = "rubik",
    COINS = "coins",
}

export enum NavLinkUrls {
    HOME = "/",
    UTILITIES = "utilities",
    PHOTOS = "photos",
    FEATURES = "features",
    TESTER = "tester",
}

export const urlToLabel = (item: string) => (item === NavLinkUrls.HOME ? "home" : item);

// TODO Organise the above enums into one object

export enum Error {
    MESSAGE = "We are sorry, an error occured. Please try again later",
}

export enum Pending {
    MESSAGE = "Loading, please wait...",
}

export enum AppMessages {
    ERROR = "We are sorry, an error occured. Please try again later",
    PENDING = "Loading, please wait...",
    UNDER_CONSTRUCTION = "We are terribly sorry, this feature is currently under construction...",
    COMING_SOON = "Coming soon...",
    OPEN_MENU = "Open menu",
    CLOSE_MENU = "Close menu",
    SUBMIT = "Submit",
    CANCEL = "Cancel",
    FORBIDDEN = "You are not authorized to see this",
    DUMMY_TEXT = "tetur adipisicing elit. Incidunt dolores enim iure! Culpa eaque nemo officia aspernatur debitis, atque commodi? Atque quae eos consectetur quas. Nisi voluptate ut ipsam quos! Cupiditate animi quaerat inventore saepe repudiandae distinctio ipsam. Magnam numquam dolorum nihil inventore fuga amet!",
}
