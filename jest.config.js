module.exports = {
    moduleFileExtensions: ["js", "ts"],
    testResultsProcessor: "jest-sonar-reporter",
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testMatch: ["<rootDir>/tests/**/*.test.ts"],
    preset: "ts-jest",
    collectCoverage: true,
    coverageReporters: ["lcov", "text"],
    collectCoverageFrom: ["src/**/*.ts"], // garante que cobre só o código
}
