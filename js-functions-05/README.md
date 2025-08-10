# Simple Project – JavaScript Functions

This project contains simple JavaScript examples demonstrating different types of functions, parameters, and return values.

---

## 1. Simple Function (No Parameters)

```javascript
function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!
```

A basic function that prints `"Hello!"` when called.

---

## 2. Function with One Parameter

```javascript
function greet(name) {
  console.log(`Hello ${name}!`);
}
greet("Mahmoud"); // Output: Hello Mahmoud!
```

Passes a **single argument** (`name`) to personalize the greeting.

---

## 3. Function with Two Parameters

```javascript
function addTwoNums(a, b) {
  console.log(`sum of ${a} and ${b} equal to ${a + b}`);
}
addTwoNums(10, 5); // Output: sum of 10 and 5 equal to 15
```

Takes **two numbers** and logs their sum.

---

## 4. Arrow Function (Standard Form)

```javascript
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(4, 5)); // Output: 20
```

Uses the **arrow function syntax** with an explicit `return`.

---

## 5. Arrow Function (Shorthand)

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(10, 10)); // Output: 100
```

Shorthand form of arrow functions when the body has a single expression.

---

## 6. Function with Default Parameter

```javascript
function greetPerson(name = "stranger") {
  console.log(`Hi, ${name}!`);
}
greetPerson();        // Output: Hi, stranger!
greetPerson("Ali");   // Output: Hi, Ali!
```

Uses a **default value** for the parameter if no argument is provided.

---

## How to Run

1. Copy the desired function into a `.js` file.
2. Run with Node.js:

   ```bash
   node filename.js
   ```
3. Check the console output.

---

## Notes

* Demonstrates **function declarations**, **arrow functions**, and **default parameters**.
* Template literals (`` `...` ``) are used for cleaner string formatting.
