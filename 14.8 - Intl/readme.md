# 📦 Тема 14.8 - Интернационализация Intl

---

> 🔹 Intl — это встроенный объект в JavaScript, который предоставляет возможности для интернационализации, т.е. корректного отображения текста, чисел, дат и валют в разных локалях (языках и странах).

---

## 🔹 Основные компоненты Intl

### `Intl.Collator`

Позволяет сортировать строки по правилам конкретного языка (учёт регистра, ё и т.д.).

```javascript
const collator = new Intl.Collator("ru", {
  sensitivity: "base",
});

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
animals.sort(collator.compare);

console.log(animals);
// 👉 ["АИСТ", "ёж", "енот", "ехидна", "тигр", "ЯК"]
```

> 📌 Учитывает локаль. В русском языке "ё" считается вариантом "е", но ставится после "е", если отличается только одна буква.

### `Intl.NumberFormat`

Позволяет отображать числа по правилам локали (разделители, валюта, проценты и т.д.)

```javascript
const number = 1234567.89;

const us = new Intl.NumberFormat("en-US").format(number);
const ru = new Intl.NumberFormat("ru-RU").format(number);
const cn = new Intl.NumberFormat("zh-CN").format(number);

console.log(us); // 👉 1,234,567.89
console.log(ru); // 👉 1 234 567,89
console.log(cn); // 👉 1,234,567.89
```

> 📌 Отличается разделителями, порядком и даже символами.

### `Intl.DateTimeFormat`

Используется для форматирования даты и времени:

```javascript
const date = new Date(2024, 10, 4); // 4 ноября 2024

const formatterRu = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const formatterCn = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

console.log(formatterRu.format(date)); // 👉 04.11.2024
console.log(formatterCn.format(date)); // 👉 2024 年 11 月 4 日
```

> 📌 В китайской локали автоматически подставляются иероглифы 年 / 月 / 日

---

## 🔹 Полезные настройки

| Свойство      | Для чего                               |
| ------------- | -------------------------------------- |
| sensitivity   | Уровень различия (буквы, регистр)      |
| numeric       | Обработка чисел как чисел (`a10 > a2`) |
| style         | `decimal`, `currency`, `percent`       |
| currency      | Код валюты: `"USD"`, `"RUB"` и т.д.    |
| localeMatcher | Выбор наиболее подходящей локали       |

---

## ⚠️ Подводные камни

- Intl.Collator по умолчанию различает регистр, но это можно отключить через sensitivity: "base"

- Локали иногда не поддерживаются в полной мере (например, zh-Hans-CN)

- Для дат и чисел в китайском стиле лучше явно указать zh-CN и нужные поля (long, short, narrow)
