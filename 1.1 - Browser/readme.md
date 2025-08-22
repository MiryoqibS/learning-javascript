# 📦 Тема 1.1 - Браузерное окружение

---

## 🔹 Краткое Описание

Браузерное окружение — это все объекты и функции, которые предоставляет браузер для работы JavaScript. Оно включает:

- Глобальный объект window — весь JS-код в браузере выполняется в контексте window.

- Объект `document` — дерево элементов страницы (DOM), через который можно управлять HTML.

- Объект `navigator` — информация о браузере, ОС, языке пользователя.

- Объект `location` — текущий URL, навигация.

- Объект `history` — управление историей переходов.

- Объект `screen` — характеристики экрана.

Функции взаимодействия с пользователем: `alert`, `confirm`, `prompt`.

Таймеры: `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`.

> 📌 Подсказка: window является глобальным объектом. Все функции и переменные в глобальной области видимости фактически становятся свойствами window.

---

## 🔹 Работа с URL

```javascript
console.log(location.href); // текущий адрес страницы
console.log(location.hostname); // домен
console.log(location.protocol); // протокол (http/https)

if (confirm("Перейти на Wikipedia?")) {
  location.href = "https://wikipedia.org";
}
```

---

## 🔹 Навигация и история

```javascript
console.log(history.length); // количество посещённых страниц
history.back(); // переход на предыдущую страницу
history.forward(); // переход на следующую страницу
```

---

## 🔹 Информация о браузере

```javascript
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.onLine); // true если онлайн
```

---

## 🔹 Таймеры

```javascript
const timer = setTimeout(() => console.log("Прошло 2 секунды"), 2000);
clearTimeout(timer);

const interval = setInterval(() => console.log("Каждую секунду"), 1000);
clearInterval(interval);
```

---

> ❗ Эта тема — теоретическая, практические задания пока не предусмотрены.
