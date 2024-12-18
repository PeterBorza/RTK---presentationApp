const utilitiesPort = process.env.REACT_APP_UTILITIES_PORT;
const coinsPort = process.env.REACT_APP_COINS_PORT;
const bubblesPort = process.env.REACT_APP_BUBBLES_PORT;

const BASE_URL = "http://localhost:";

export const UTILITIES_URL = BASE_URL + utilitiesPort;
export const COINS_URL = BASE_URL + coinsPort;
export const BUBBLES_URL = BASE_URL + bubblesPort;

export enum LinkUrls {
  GAS = "gas",
  LIGHT = "light",
  BUILDING = "building",
  BUBBLES = "bubbles",
  GAME = "game",
  RUBIK = "rubik",
  COINS = "coins",
  COLORS = "colorSets",
}

export enum NavLinkUrls {
  HOME = "/",
  UTILITIES = "utilities",
  PHOTOS = "photos",
  FEATURES = "features",
  TESTER = "tester",
  DRAG = "d'n'd",
}

export const urlToLabel = (item: string) => (item === NavLinkUrls.HOME ? "home" : item);

// TODO Error and Pending are already in AppMessages!

export enum Error {
  MESSAGE = "We are sorry, an error occured. Please try again later.",
}

export enum Pending {
  MESSAGE = "Loading, please wait...",
}

export enum AppMessages {
  ERROR = "We are sorry, an error occured. Please try again later",
  PENDING = "Loading, please wait...",
  UNDER_CONSTRUCTION = "We are terribly sorry, this feature is currently under construction...",
  COMING_SOON = "Coming soon...",
  OPEN_MENU = "Menu",
  CLOSE_MENU = "Close menu",
  SUBMIT = "Submit",
  CANCEL = "Cancel",
  FORBIDDEN = "You are not authorized to see this",
  DUMMY_TEXT = "tetur adipisicing elit. Incidunt dolores enim iure! Culpa eaque nemo officia aspernatur debitis, atque commodi? Atque quae eos consectetur quas. Nisi voluptate ut ipsam quos! Cupiditate animi quaerat inventore saepe repudiandae distinctio ipsam. Magnam numquam dolorum nihil inventore fuga amet!",
}
