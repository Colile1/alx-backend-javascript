# 0x04-TypeScript

This directory contains a series of TypeScript exercises as part of the ALX Backend JavaScript specialization. Each task is organized into its own subdirectory with the necessary configuration files and source code.

## Tasks Overview

### Task 0: Creating an interface for a student
- Define a `Student` interface with properties: `firstName`, `lastName`, `age`, and `location`.
- Create two student objects and an array `studentsList` containing them.
- Render a table in the browser displaying the first name and location of each student.
- Configuration files: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`.

### Task 1: Let's build a Teacher interface
- Define a `Teacher` interface with readonly `firstName` and `lastName`, mandatory `fullTimeEmployee` and `location`, optional `yearsOfExperience`, and allow additional properties.
- Define a `Directors` interface extending `Teacher` with a mandatory `numberOfReports`.
- Implement a `printTeacher` function and its interface.
- Create a `StudentClass` with interfaces describing the constructor and class methods.
- Configuration files included.

### Task 2: Extending the Teacher class
- Define `DirectorInterface` and `TeacherInterface` with specific methods.
- Implement `Director` and `Teacher` classes.
- Create a `createEmployee` function returning instances based on salary.
- Configuration files included.

### Task 3: Ambient Namespaces
- Define types and interfaces for database row elements.
- Provide ambient declarations for CRUD functions.
- Use these in the main file with proper imports.
- Configuration files included.

### Task 4: Namespace & Declaration merging
- Use namespaces to define interfaces and classes for subjects and teachers.
- Use declaration merging to extend interfaces.
- Implement classes for Cpp, React, and Java subjects.
- Configuration files included.

### Task 5: Brand convention & Nominal typing
- Define interfaces with brand properties for major and minor credits.
- Implement functions to sum credits.
- Configuration files included.

## Building and Running

Each task directory contains its own `package.json` and configuration files. To build and run a task:

```bash
cd 0x04-TypeScript/task_X
npm install
npm run build
npm start
```

Replace `task_X` with the desired task directory.

## Requirements

- Use TypeScript with strict typing.
- Use Webpack for bundling.
- Follow ESLint rules as specified.
- Ensure no TypeScript errors on build.
- Use Vanilla JavaScript for DOM manipulation where required.

## Author

Colile Sibanda
