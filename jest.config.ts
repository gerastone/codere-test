import type { Config } from "jest";

const config: Config = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: [
    "<rootDir>/src/jest-config/setup.ts"
  ],
  testEnvironment: "jsdom",
  globalSetup: "jest-preset-angular/global-setup",
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
  coveragePathIgnorePatterns: [
    "/jest-config/",
    "/node_modules/"
  ],
  transform: {
    '^.+\\.(ts|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        isolatedModules: true,
      },
    ],
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(?:.pnpm/)?(@angular|rxjs|@ngrx|jest-cli|jest-runtime|@ngx-translate|jest-preset-angular))',
    'node_modules/(?!.*\\.mjs$)',
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
    ".html"
  ]
};

export default config;
