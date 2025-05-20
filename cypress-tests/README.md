# Cypress UI & API Automation Tests

Цей проєкт містить автоматизовані тести для перевірки:
- 🌐 UI функціоналу сайту [SauceDemo](https://www.saucedemo.com/)
- 🔌 API функціоналу через [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

> Завдання виконано в рамках тестового завдання на позицію QA Automation Engineer.

---

## 🧰 Технології

- [Cypress](https://www.cypress.io/) — для end-to-end та API тестування
- JavaScript (ES6)
- Node.js

---

## 📁 Структура проєкту

```
cypress-tests/
├── cypress/
│   ├── e2e/
│   │   ├── ui/           # UI тести (login, purchase)
│   │   ├── api/          # API тести (posts CRUD)
│   ├── fixtures/         # Фікстури для даних (JSON)
│   ├── support/          # Хуки та команди
├── docs/                 # Документація тест-кейсів та баг-репорти
│   ├── test-cases.md     # Список тест-кейсів
│   ├── bug-report.md     # Приклад баг-репорту
├── .gitignore            # Ігнорування службових файлів
├── cypress.config.js     # Конфігурація Cypress
├── package.json          # Залежності
├── README.md             # Поточний файл
```

---

## 🚀 Як запустити тести

### 1. Клонувати репозиторій

```bash
git clone https://github.com/OlehYarish/test-task-softonix.git
cd test-task-softonix
```

### 2. Встановити залежності

```bash
npm install
```

### 3. Відкрити Cypress UI

```bash
npx cypress open
```

### 4. Запустити всі тести в headless режимі

```bash
npx cypress run
```

---

## 🧪 Покриття тестами

### ✅ UI Тести

- Успішний логін
- Некоректний логін (помилка)
- Маскування поля паролю
- Повний процес оформлення замовлення
- Баг-репорт: оформлення замовлення без товарів

### ✅ API Тести

- POST — створення посту
- GET — отримання всіх постів
- GET — запит на неіснуючий пост
- PUT — оновлення посту
- DELETE — видалення посту
- DELETE — видалення неіснуючого посту

---

## 📋 Документація

Документація доступна у папці [`docs/`](./docs):

- `test-cases.md` – опис усіх тест-кейсів
- `bug-report.md` – приклад знайденого багу

---

## 👤 Автор

Розроблено в рамках тестового завдання  
**[Олег Яріш]**

---