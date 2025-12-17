# ⏰ Analog + Digital Clock

A **real-time Analog + Digital Clock** built using **HTML, CSS, and JavaScript** with a clean and modern UI.
The project displays a **circular analog clock with rotating hands** and a **digital clock** that updates every second.

This project demonstrates **DOM manipulation**, **CSS transforms**, and **JavaScript time calculations**.

---

## 📁 Project Structure

```
Clock/
│
├── index.html   # HTML structure
├── style.css    # Styling (Analog & Digital Clock UI)
└── script.js    # JavaScript logic (Time & rotation)
```

---

## ✨ Features

* 🕒 Real-time **Analog Clock**
* 🔢 Numbers (1–12) placed around the clock using CSS
* ⏱ Smooth rotation of hour, minute, and second hands
* 💡 Digital clock synced with the analog clock
* 🎨 Modern dark theme with shadows and gradients
* 🔁 Updates every second using `setInterval`
* 🚫 No external libraries used

---

## 🛠 Technologies Used

* **HTML5** – Structure and layout
* **CSS3** – Styling, positioning, transforms
* **JavaScript (ES6)** – Time logic & DOM manipulation

---

## ⚙ How It Works

### 1️⃣ Time Handling (JavaScript)

* Uses the `Date` object to get:

  * Hours
  * Minutes
  * Seconds

```js
const now = new Date();
```

---

### 2️⃣ Hand Rotation Logic

| Hand   | Formula                             |
| ------ | ----------------------------------- |
| Second | `seconds × 6`                       |
| Minute | `minutes × 6 + seconds × 0.1`       |
| Hour   | `(hours % 12) × 30 + minutes × 0.5` |

This ensures **smooth and realistic movement**, just like a real clock.

---

### 3️⃣ Number Placement (CSS)

Clock numbers are positioned using **CSS variables**:

```css
transform: rotate(calc(var(--i) * 30deg));
```

* 360° ÷ 12 numbers = 30° per number
* Numbers rotate around the circle and rotate back to stay upright

---

### 4️⃣ Live Updates

```js
setInterval(updateClock, 1000);
```

* Updates both analog and digital clocks every second
* Keeps them perfectly synchronized

---

## ▶ How to Run the Project

1. Download or clone the repository
2. Open `index.html` in a browser
3. The clock starts automatically ⏱

---

## 📚 Learning Outcomes

This project helps you understand:

* CSS `transform` and `transform-origin`
* CSS custom properties (`--i`)
* JavaScript `Date` object
* DOM manipulation
* Real-time UI updates
* Geometry-based UI positioning

---

## 🚀 Possible Improvements

* Smooth sweeping second hand
* Dynamic number generation using JavaScript
* Dark / Light theme toggle
* Responsive scaling for mobile
* Stopwatch / Timer functionality

---

## 👩‍💻 Author

**Neha**
Learning JavaScript, DOM, and UI design through hands-on projects.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
