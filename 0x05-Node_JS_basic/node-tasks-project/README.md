# Node Tasks Project

This project is designed to demonstrate various Node.js functionalities, including creating HTTP servers, performing file operations, and organizing a server structure using Express.

## Project Structure

```
node-tasks-project
├── src
│   ├── http-server
│   │   └── server.js
│   ├── file-operations
│   │   ├── readSync.js
│   │   └── readAsync.js
│   ├── express-server
│   │   ├── app.js
│   │   ├── routes
│   │   │   └── index.js
│   │   └── controllers
│   │       └── mainController.js
│   └── utils
│       └── helpers.js
├── package.json
└── README.md
```

## Features

- **HTTP Server**: A basic HTTP server that listens on port 1245 and responds with "Hello ALX!".
- **File Operations**: Functions to read files both synchronously and asynchronously, with error handling.
- **Express Server**: A structured Express application with routes and controllers.
- **Utilities**: Helper functions for common tasks.

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd node-tasks-project
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the HTTP server**:
   ```
   node src/http-server/server.js
   ```

4. **Run the Express server**:
   ```
   node src/express-server/app.js
   ```

## Usage

- Access the HTTP server at `http://localhost:1245`.
- Access the Express application at `http://localhost:<port>` (replace `<port>` with the port configured in `app.js`).
