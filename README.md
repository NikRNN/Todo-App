## Структура проекта

todo-app/
├── 📁 public/ # Static assets
│ ├── favicon.ico # App icon
│ ├── index.html # Main HTML template
│ └── pwa-assets/ # PWA files
│ ├── android-chrome-\*.png
│ └── site.webmanifest
│
├── 📁 src/ # Source code
│ ├── 🧩 components/ # React components
│ │ ├── TaskList/ # Task list component
│ │ │ ├── index.jsx # Component logic
│ │ │ └── styles.css # Component styles
│ │ └── AddTask/ # Add task form
│ │
│ ├── 🛠️ utils/ # Utilities
│ │ └── storage.js # localStorage wrapper
│ │
│ ├── 🖼️ assets/ # Assets
│ │ └── react.svg # React logo
│ │
│ ├── App.jsx # Root component
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
│
├── ⚙️ Config files
│ ├── vite.config.js # Vite config
│ ├── .eslintrc.json # ESLint config
│ └── .gitignore # Ignored files
│
└── 📦 Package files
├── package.json # Dependencies (React 19 + Vite 7)
└── package-lock.json # Exact versions

=======

# ToDo App (Vite + React)

![Интерфейс приложения](./screenshot.png)

## О проекте

Простое и удобное приложение для управления задачами (функционал добавления, удаления задач, очистки списка задач, отметка о выполнении)

---

## Технологии

- Vite 7
- React 19 (хуки)
- CSS модули

---

## Установка

```bash
git clone https://github.com/NikRNN/Todo-App.git
cd todo-vite
npm install
npm run dev
```
