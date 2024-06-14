module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx, ts, tsx}"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx|mjs)$": "ts-jest",
    },
    preset: "ts-jest",
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
};
