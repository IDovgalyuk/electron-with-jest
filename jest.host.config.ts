import type { Config } from 'jest';
import { commonConfig } from './jest.common.config';

export const jestHostConfig: Config = {
  ...commonConfig,

  testMatch: ['**/src/_tests/host/**/?(*.)+(test).[tj]s?(x)'],

  displayName: 'host-unit-tests',

  runner: '@kayahr/jest-electron-runner/main',
  testEnvironment: 'node',
};
