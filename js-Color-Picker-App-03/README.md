# 🎨 ES6 Color Picker App

A simple, interactive **Color Picker App** built with **JavaScript ES6 syntax**, **DOM manipulation**, and **modules**. This project allows users to change the background color via a color picker or generate a random color.

---

## 🚀 Features

* Select a background color using a color input
* Generate a random background color
* Smooth transition between colors
* ES6 Modules (`import` / `export`)
* Class-based color state management

---

## 📂 Project Structure

```
/color-picker-app
  ├── index.html         # HTML structure
  ├── main.js            # Connects UI to color logic
  ├── colorManager.js    # Class for managing colors
  ├── utils.js           # Helper for DOM background updates
  └── README.md          # Documentation for the app
```

---

## 🛠 Technologies Used

* **HTML5** for structure
* **CSS3** for styling
* **JavaScript ES6** for logic

  * Classes
  * Arrow functions
  * Template literals
  * Modules (`import` / `export`)

---

## 📜 How It Works

1. **User Interaction**

   * Select a color from the color picker to change the background.
   * Click **Random Color** to instantly change to a randomly generated color.

2. **Color Management**

   * The `ColorManager` class stores and updates the current color.
   * `setColor()` updates the color from user input.
   * `generateRandomColor()` generates a random hex color.

3. **DOM Rendering**

   * `utils.js` contains `setBackgroundColor()` for applying colors to the page.

---

## 📥 Installation & Setup

1. Clone or download this repository.
2. Navigate to the `color-picker-app` folder.
3. Open `index.html` in a browser.

---

## 🖥 Usage

* Use the color picker to choose any color.
* Click **Random Color** to get a surprise.
* Enjoy the smooth color transition.

---

## 🔮 Possible Improvements

* Save last selected color to **LocalStorage**.
* Keep a **color history**.
* Add support for **gradient backgrounds**.

---

## 📜 License

This project is open-source.
