/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest"

const config: Config = {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ["node_modules"],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        "js",
        "mjs",
        "cjs",
        "jsx",
        "ts",
        "mts",
        "cts",
        "tsx",
        "json",
        "node"
    ],

    // The root directory that Jest should scan for tests and modules within
    rootDir: "../../",

    // The test environment that will be used for testing
    testEnvironment: "jsdom",

    globals: {
        __IS_DEV__: true
    },

    // The glob patterns Jest uses to detect test files
    testMatch: [
        "<rootDir>/src/**/**/?(*.)+(spec|test).?([mc])[jt]s?(x)",
        "<rootDir>/src/**/*.test.ts",
        "<rootDir>/src/**/**/*.test.tsx"
    ],

    preset: "ts-jest/presets/default-esm",
    extensionsToTreatAsEsm: [".ts", ".tsx"],

    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                useESM: true
            }
        ],
        "^.+\\.svg$":
            "<rootDir>/config/jest/svgTransform.js"
    },

    setupFilesAfterEnv: [
        "<rootDir>/config/jest/setupTests.ts"
    ],
    // recognize @/ as src/
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "\\.module\\.(css|sass|scss)$":
            "identity-obj-proxy",
        "\\.(css|sass|scss)$":
            "<rootDir>/config/jest/styleMock.ts"
    }
}

export default config
