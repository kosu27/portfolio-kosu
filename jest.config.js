const nextJest = require("next/jest");

// next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット。基本は"./"で良い。
const createJestConfig = nextJest({ dir: "./" });

/**
 * @type {import('@jest/types').Config.InitialOptions}
 **/

// Jestのカスタム設定を設置する場所。従来のプロパティはここで定義。
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  modulePathIgnorePatterns: ["<rootDir>/e2e/"],
  // jest.setup.jsを作成する場合のみ定義。
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: { "src/(.*)": "<rootDir>/src/$1" },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

// createJestConfigを定義することによって、本ファイルで定義された設定がNext.jsの設定に反映されます
module.exports = createJestConfig(customJestConfig);
