/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import { commonConfig } from './jest.common.config';

export const jestRendererConfig: Config = {
  ...commonConfig,

  testMatch: ['**/src/_tests/renderer/**/?(*.)+(test).[tj]s?(x)'],

  displayName: 'renderer-unit-tests',
};
