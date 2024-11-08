import type { Config } from 'jest';
import { jestHostConfig } from './jest.host.config';
import { jestRendererConfig } from './jest.renderer.config';

const projects = [jestRendererConfig, jestHostConfig];

const config: Config = {
  projects,
  collectCoverage: false,
  testTimeout: 60_000,
  verbose: true,
};

export default config;
