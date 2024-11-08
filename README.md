# electron-with-jest

Sample of error of `@kayahr/jest-electron-runner` when running on Windows.

Commands to run:

- `npm ci`
- `npm run test`

Output:

```text
 PASS   renderer-unit-tests  src/_tests/renderer/renderer.test.ts
  renderer
    √ sample renderer test (9 ms)

 PASS   host-unit-tests  src/_tests/host/host.test.ts
  host
    √ sample host test (2 ms)

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        5.404 s
Ran all test suites in 2 projects.
Error: kill EPERM
    at ChildProcess.kill (node:internal/child_process:511:26)
    at C:\src\electron-with-jest\node_modules\@kayahr\jest-electron-runner\src\main\electron\TestRunner.ts:82:23
    at C:\src\electron-with-jest\node_modules\@kayahr\jest-electron-runner\src\main\electron\TestRunner.ts:167:17
    at C:\src\electron-with-jest\node_modules\@kayahr\jest-electron-runner\src\main\electron\utils\once.ts:13:22
    at TestRunnerRenderer.runTests (C:\src\electron-with-jest\node_modules\@kayahr\jest-electron-runner\src\main\electron\TestRunner.ts:216:13)
    at processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async TestScheduler.scheduleTests (C:\src\electron-with-jest\node_modules\@jest\core\build\TestScheduler.js:283:15)
    at async runJest (C:\src\electron-with-jest\node_modules\@jest\core\build\runJest.js:367:19)
    at async _run10000 (C:\src\electron-with-jest\node_modules\@jest\core\build\cli\index.js:343:7)
    at async runCLI (C:\src\electron-with-jest\node_modules\@jest\core\build\cli\index.js:198:3)
```
