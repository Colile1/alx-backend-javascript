# 0x05-Node_JS_basic

This directory contains a series of Node.js exercises as part of the ALX Backend JavaScript specialization. Each task demonstrates core Node.js concepts, including file I/O, HTTP servers, and Express.

## Tasks Overview

### 0. Executing basic JavaScript with Node JS
- Implement a function that prints a message to STDOUT.

### 1. Using Process stdin
- Create a CLI program that reads user input and prints a message.

### 2. Reading a file synchronously with Node JS
- Read a CSV file synchronously and print student statistics.

### 3. Reading a file asynchronously with Node JS
- Read a CSV file asynchronously and print student statistics using Promises.

### 4. Create a small HTTP server using Node's HTTP module
- Create a basic HTTP server that responds with "Hello ALX!".

### 5. Create a more complex HTTP server using Node's HTTP module
- Extend the HTTP server to serve student statistics at `/students`.

### 6. Create a small HTTP server using Express
- Use Express to serve "Hello ALX!" at the root endpoint.

### 7. Create a more complex HTTP server using Express
- Use Express to serve student statistics at `/students`.

### 8. Organize a complex HTTP server using Express
- Refactor the server into controllers, routes, and utilities using ES6 modules and Babel.

## Usage

Each task is implemented in its own file. To run a task, use:

```bash
node <filename>
```

For tasks requiring a database file, pass the CSV file as an argument:

```bash
node 5-http.js database.csv
```

For the full server (task 8), use:

```bash
npm run dev
```

## Requirements

- Node.js 12.x.x or later
- npm
- For Express tasks, run `npm install` to install dependencies
- All code follows ESLint rules and passes Jest tests

## Author

Colile Sibanda
