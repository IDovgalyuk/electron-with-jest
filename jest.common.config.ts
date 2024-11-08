import type { Config } from 'jest';

export const commonConfig: Config = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/out/'],
};
