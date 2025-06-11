# 0x06-unittests_in_js

This directory contains exercises and projects for learning unit and integration testing in Node.js using Mocha, Chai, Sinon, and Express.

## Learning Objectives

- How to use Mocha to write a test suite
- How to use different assertion libraries (Node assert, Chai)
- How to organize and present long test suites
- When and how to use spies and stubs (Sinon)
- What are hooks and when to use them
- Unit testing with async functions
- How to write integration tests with a small node server

## Requirements

- Node.js 12.x.x
- All files end with a new line
- All code uses the `.js` extension
- All tests must pass with `npm run test *.test.js`
- A `README.md` file is present at the root of the project

## Tasks Overview

### 0. Basic test with Mocha and Node assertion library
- Implement and test a function that sums two rounded numbers.

### 1. Combining descriptions
- Extend the calculator to support SUM, SUBTRACT, and DIVIDE operations.

### 2. Basic test using Chai assertion library
- Rewrite tests using Chai's `expect` style.

### 3. Spies
- Use Sinon spies to verify function calls and arguments.

### 4. Stubs
- Use Sinon stubs to control function return values and test logging.

### 5. Hooks
- Use Mocha hooks (`beforeEach`, `afterEach`) to manage spies/stubs.

### 6. Async tests with done
- Test async code using Mocha's `done` callback.

### 7. Skip
- Skip failing tests using `it.skip`.

### 8. Basic Integration testing
- Test an Express API using Mocha, Chai, and request.

### 9. Regex integration testing
- Add parameter validation to Express routes and test edge cases.

### 10. Deep equality & Post integration testing
- Test deep equality of JSON responses and POST endpoints.

## Usage

To run the tests for a specific task:

```bash
npm test <testfile>.test.js
```

## Author

Colile Sibanda
