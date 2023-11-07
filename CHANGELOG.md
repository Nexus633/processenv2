# version 2.0.2

## 11/07/2023

- fix grammatical

# version 2.0.1

## 11/06/2023

- add documentation
- add [docs/DOCUMENTATION.md](docs/DOCUMENTATION.md)
- add [docs/index.html](docs/index.html)
- add scripts
    - docs
    - docs-html
    - docs-md
- add DevDependencies
    - documentation -> ^14.0.2

# version 2.0.0

## 11/04/2023

- Filename changes
-
    - rename replaceValue.js to replaceNestedChars.js
- change .env path detection
- add inline comment support
- add inline comment support with escaped hash
- add tests

## Test results

### with .env file

> jest

PASS  __tests__/processenv.test.js \
PASS  __tests__/replaceNestedChars.test.js \
PASS  __tests__/parsEnvironmentFileString.test.js \
PASS  __tests__/filterEmptyLines.test.js

| File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
|------------------------------|---------|----------|---------|---------|-------------------|
| All files                    | 100     | 97.61    | 100     | 100     |                   |
| lib                          | 100     | 96.42    | 100     | 100     |                   |
| getProcessEnv.js             | 100     | 100      | 100     | 100     |                   |
| parsEnvironmentFileString.js | 100     | 100      | 100     | 100     |                   |
| parsValue.js                 | 100     | 100      | 100     | 100     |                   |
| processenv2.js               | 100     | 92.85    | 100     | 100     | 13                |
| replaceNestedChars.js        | 100     | 100      | 100     | 100     |                   |
| lib/filter                   | 100     | 100      | 100     | 100     |                   |
| filterCommentInLines.js      | 100     | 100      | 100     | 100     |                   |
| filterCommentLines.js        | 100     | 100      | 100     | 100     |                   |
| filterEmptyLines.js          | 100     | 100      | 100     | 100     |                   |
| removeQuotationMarks.js      | 100     | 100      | 100     | 100     |                   |

Test Suites: 4 passed, 4 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        0.377 s, estimated 1 s
Ran all test suites.

### without .env file

> jest

PASS  __tests__/processenv.test.js \
PASS  __tests__/replaceNestedChars.test.js \
PASS  __tests__/parsEnvironmentFileString.test.js \
PASS  __tests__/filterEmptyLines.test.js

| File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s |
|------------------------------|---------|----------|---------|---------|-------------------|
| All files                    | 96.39   | 97.61    | 100     | 96.39   |                   |
| lib                          | 94.52   | 96.42    | 100     | 94.52   |                   |
| getProcessEnv.js             | 100     | 100      | 100     | 100     |                   |
| parsEnvironmentFileString.js | 100     | 100      | 100     | 100     |                   |
| parsValue.js                 | 100     | 100      | 100     | 100     |                   |
| processenv2.js               | 80.95   | 92.85    | 100     | 80.95   | 14-19             |
| replaceNestedChars.js        | 100     | 100      | 100     | 100     |                   |
| lib/filter                   | 100     | 100      | 100     | 100     |                   |
| filterCommentInLines.js      | 100     | 100      | 100     | 100     |                   |
| filterCommentLines.js        | 100     | 100      | 100     | 100     |                   |
| filterEmptyLines.js          | 100     | 100      | 100     | 100     |                   |
| removeQuotationMarks.js      | 100     | 100      | 100     | 100     |                   |

Test Suites: 4 passed, 4 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        0.377 s, estimated 1 s
Ran all test suites.

- add DevDependencies
    - eslint -> 8.52.0
    - eslint-plugin-sort-requires -> ^2.1.0
    - jest -> ^29.7.0
    - prettier -> 3.0.3

# version 1.0.1

## 11/01/2023

- initial release of processenv2
