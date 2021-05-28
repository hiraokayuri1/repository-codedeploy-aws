const { defaults } = require("jest-config");

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json"
    }
  },
  moduleNameMapper: {
    "^~src(.*)$": "<rootDir>/src/$1",
    "^~api(.*)$": "<rootDir>/src/api/$1",
    "^~assets(.*)$": "<rootDir>/src/assets/$1",
    "^~redux(.*)$": "<rootDir>/src/redux/$1",
    "^~@types(.*)$": "<rootDir>/src/@types/$1",
    "^~views(.*)$": "<rootDir>/src/views/$1"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};