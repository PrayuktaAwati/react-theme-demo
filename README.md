# 🌗 React Theme Toggle App

This is a simple React + Vite + TypeScript application that demonstrates light/dark theme toggling using the `useContext` hook. It uses placeholder `Lorem Ipsum` content to show styling differences between themes.

---

## 🚀 Features

- ⚛️ React + Vite + TypeScript
- 🎨 Light / Dark Theme Toggle
- 🧠 Global state management via `useContext`
- 💡 Clean, minimal UI with sample text content

---

## 📸 Demo

> Toggle between light and dark mode using the button. The theme applies globally and updates in real-time.

---

## 📁 Project Structure
src/
├── hooks/ 
│ └── useTheme.tsx # to consume theme state in app
├── context/
│ └── ThemeContext.tsx # Context to manage theme state
├── App.tsx # showed basic usage of theme context
├── App.css 
├── main.tsx # entry point
└── index.css


---

## 🛠️ Installation

```bash
# Clone the repo
git clone https://github.com/PrayuktaAwati/react-theme-demo.git

# Navigate to the folder
cd react-theme-demo

# Install dependencies
npm install

# Run the dev server
npm run dev
