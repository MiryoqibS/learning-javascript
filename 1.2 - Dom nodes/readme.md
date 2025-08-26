# 📦 Тема 1.2 - DOM-узлы

---

## 🔹 Краткое Описание

DOM (Document Object Model) — это объектная модель HTML-документа, представленная в виде дерева. Каждый элемент, текст и комментарий — это **узел (node)**. С помощью JavaScript можно находить эти узлы, изменять их и управлять структурой страницы.

- **Элементы** (теги) — узлы-элементы.
- **Текст** внутри тегов — текстовые узлы.
- **Комментарии** — узлы-комментарии.

> 📌 Подсказка: DOM позволяет изменять HTML и стили «на лету».

---

## 🔹 Основы работы с DOM

### Поиск и изменение элементов

```javascript
document.body.style.background = "red";
setTimeout(() => (document.body.style.background = ""), 3000);
```

### Навигация по DOM-дереву

```javascript
console.log(document.body.childNodes); // список дочерних узлов
console.log(document.body.firstChild); // первый дочерний узел
console.log(document.body.parentNode); // родительский узел
```

### Поиск по селекторам

```javascript
const el = document.querySelector("div.container");
const all = document.querySelectorAll("p");
```

---

## 🔹 Инструменты разработчика

- Вкладка **Elements** в DevTools отображает структуру DOM.
- Выбранный элемент доступен в консоли как `$0`, предыдущие — `$1`, `$2`.
- Команда `inspect(element)` открывает элемент во вкладке **Elements**.

```javascript
inspect(document.body);
$0.style.background = "yellow";
```

---

## 🔹 Важные свойства и методы

- `childNodes`, `children` — дочерние узлы/элементы.
- `firstChild`, `lastChild` — первый/последний узел.
- `nextSibling`, `previousSibling` — соседи по дереву.
- `parentNode`, `parentElement` — родитель.
- `querySelector`, `querySelectorAll` — поиск по CSS-селекторам.

---

> ❗ Помните: даже пробелы и переносы строк — это текстовые узлы, их нужно учитывать при работе с DOM.
