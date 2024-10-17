export const featureFlags = {
  guessTheColors: false,
  homePage: true,
  showPuzzleImages: false,
  musicGame: process.env.NODE_ENV === "development",
};

// Do we want to use these? if so, add enable/disable functions to window object
