# 🎨 Random Background Color Generator

A fun mini-project to practice **asynchronous JavaScript fundamentals** like `setInterval`, `clearInterval`, and UI state handling — wrapped in a premium **liquid-glass / macOS-style** design.

## 🔗 Live Demo

https://asifelahii.github.io/mini-labs/random-bg-color/

![Demo](./assets/demo.gif)
![Preview](./assets/preview.png)

## ✨ Features

- Random hex color generator (`#000000` → `#FFFFFF`)
- Auto background change every **1000ms**
- Start / Stop controls (proper interval cleanup)
- Real-time status indicator (**Ready → Running → Stopped**)
- Glassmorphism / Liquid Glass UI + smooth transitions
- Fix learned: `background` shorthand overrides `background-color`

## 🧠 What I practiced

- `setInterval()` / `clearInterval()`
- DOM events + UI state synchronization
- CSS + JS interaction pitfalls (shorthand overrides)
- Clean separation: UI ↔ logic

## 🗂️ Files

```txt
random-bg-color/
├─ index.html
├─ random-bg-color.css
└─ random-bg-color.js
```

## ⚙️ How it works

1. **Generate a random color**

   - Create a random number between `0` and `16777215` (decimal range of `#000000` → `#FFFFFF`)
   - Convert it to hex using `.toString(16)`
   - Pad it to 6 digits using `.padStart(6, "0")`
   - Format it as `#RRGGBB`

2. **Apply the background**

   - When Start is pressed, an interval runs every **1000ms**:
     - `setInterval(changeBackgroundColor, 1000)`
   - The background is updated using the **full `background` property** (not only `backgroundColor`)
     - This avoids the common CSS issue where `background: linear-gradient(...)` overrides `background-color`

3. **Start / Stop state**
   - Start button becomes disabled while running
   - Stop button becomes enabled
   - Status changes: **Ready → Running → Stopped**
   - On Stop, the interval is cleared using `clearInterval()` and the last background remains

## ▶️ Run locally

### Option A: Open directly

Just open `index.html` in your browser.

### Option B (recommended): VS Code Live Server

1. Open the project folder in VS Code
2. Install the extension **Live Server**
3. Right-click `index.html` → **Open with Live Server**

## 🔮 Future Scope (Enhancements & Ideas)

If you (or anyone) want to extend this mini project, here are some clean ideas to build on:

### UI / UX

- **Color history panel** (show last 10–20 generated colors)
- **Copy color button** (copy hex code to clipboard with toast feedback)
- **Favorites** (save starred colors)
- **Keyboard shortcuts** (Space = Start/Stop, C = Copy)
- **Dark/Light mode toggle** (or multiple themes)

### Controls & Modes

- **Speed control slider** (change interval dynamically: 200ms–3000ms)
- **Pause/Resume** mode (resume from last state without resetting UI)
- **Color modes** (pastel, neon, warm, cool, grayscale)
- **Gradient mode** (generate random gradients instead of solid colors)

### Accessibility & Quality

- **WCAG contrast checker** (text readability vs background)
- **Reduced motion support** (`prefers-reduced-motion`)
- **Better focus styles** for keyboard navigation

### Technical Improvements

- Refactor to a **CSS variable approach** (`--bg`) instead of editing CSS rules directly
- Add **TypeScript version** for type safety
- Add **unit tests** for `getRandomColor()` (basic but good practice)
- Store preferences in **localStorage** (speed, mode, last color)

### Contribution Ideas

- Pick any item above and open a PR 🎯
- Keep changes small and focused (one feature per PR)
- Update screenshots/GIF if UI changes

## 📄 License

MIT — see `LICENSE`
