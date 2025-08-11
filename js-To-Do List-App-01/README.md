# 📋 ES6 To-Do List App

A simple, modular **To-Do List** app built with **JavaScript ES6 syntax**, **DOM manipulation**, and **modules**. This project is designed for learning modern JavaScript fundamentals in a practical way.

---

## 🚀 Features

* **Add tasks** to the list
* **Remove tasks** from the list
* Clean, **modular structure** using ES6 `import`/`export`
* Utilizes **classes**, **arrow functions**, and **destructuring**
* Minimal and responsive HTML/CSS for quick setup

---

## 📂 Project Structure

```
/todo-app
  ├── index.html       # HTML structure for the app
  ├── main.js          # Main script connecting UI and logic
  ├── todoList.js      # Class to manage tasks (add/remove/get)
  ├── utils.js         # Helper function(s) for creating DOM elements
  └── README.md        # Documentation for the project
```

---

## 🛠 Technologies Used

* **HTML5** for markup
* **CSS3** for basic styling
* **JavaScript ES6** for functionality

  * `let` / `const`
  * Template literals
  * Arrow functions
  * Classes
  * Spread/Rest operators
  * Modules (`import` / `export`)

---

## 📜 How It Works

1. **User Input**

   * The user types a task in the input field.
   * Clicking the **Add Task** button triggers the addition logic.

2. **Task Management**

   * The `TodoList` class stores tasks in an internal array.
   * `addTask()` appends a new task.
   * `removeTask()` deletes a task by index.
   * `getTasks()` returns a copy of the array for rendering.

3. **DOM Manipulation**

   * `main.js` handles rendering tasks in the `<ul>` element.
   * Each task has a delete button that removes it when clicked.

---

## 📥 Installation & Setup

1. **Clone or Download** this repository.
2. Make sure the files are placed in the same directory structure.
3. Open `index.html` in your browser.

---

## 🖥 Usage

* Type your task in the input box.
* Click **Add Task** to add it to the list.
* Click ❌ next to a task to remove it.

---

## 🔮 Possible Improvements

* Save tasks to **LocalStorage** for persistence.
* Mark tasks as **completed**.
* Add **animations** for adding/removing tasks.
* Include **keyboard shortcuts** (e.g., Enter to add a task).

---

## 📜 License

This project is open-source.
