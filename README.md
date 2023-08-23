# JavaScript Function Testing and TDD Practice

This repository contains a series of tasks aimed at practicing JavaScript function testing and Test-Driven Development (TDD) using the Jest testing framework.

## Task 1: `stringLength` Function

### Function Description

The `stringLength` function takes a string as an argument and returns the count of characters in the string.

### Testing

To test the `stringLength` function, we've written tests to verify its behavior:

1. Ensure the function correctly counts characters in a string.
2. Extend the function to handle conditions where the string length must be between 1 and 10 characters, throwing errors if conditions are not met.
3. Write tests to validate the updated functionality.

## Task 2: `reverseString` Function

### Function Description

The `reverseString` function takes a string as an argument and returns the reversed version of the string.

### Testing

We've written tests for the `reverseString` function:

1. Ensure the function correctly reverses a string.

## Task 3: Calculator Class with Jest Testing

### Class Description

We've implemented a simple `Calculator` class with four methods: `add`, `subtract`, `divide`, and `multiply`.

### Testing

I've written comprehensive tests for each calculator method:

1. `add` method: Tests for addition functionality.
2. `subtract` method: Tests for subtraction functionality.
3. `divide` method: Tests for division functionality and handling division by zero.
4. `multiply` method: Tests for multiplication functionality.

We've organized tests for each method using the `describe` method for better readability.

## Task 4: Capitalize Function with TDD

### Function Description

The `capitalize` function takes a string as an argument and returns the same string with the first character capitalized.

### TDD Approach

We followed the Test-Driven Development (TDD) approach:

1. Started by writing a test for the `capitalize` function.
2. Ran the test, which initially failed as the function was not implemented.
3. Implemented the minimal code necessary to make the test pass.

## Getting Started

Follow these steps to get started with the repository:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/js-function-testing.git
   cd js-function-testing
