# Unhandled Promise Rejection in Node.js

This repository demonstrates an example of an unhandled promise rejection in a Node.js application and how to fix it.

## Bug

The `bug.js` file contains a promise that is rejected.  Because there's no `.catch()` block handling the rejection, the Node.js process will terminate abnormally with an 'unhandled promise rejection' warning. 

## Solution

The `bugSolution.js` file shows the corrected code. By adding a `.catch()` block to the promise, we gracefully handle the rejection, preventing the application from crashing and logging the error to the console.

## How to run

1. Clone this repository.
2. Navigate to the directory containing `bug.js` and run `node bug.js`. Observe the error.
3. Repeat for `bugSolution.js` to see how the issue is resolved.