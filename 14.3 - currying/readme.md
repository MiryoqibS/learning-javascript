# 📦 Тема 14.3 - Каррирование

---

## 🔹 Что такое каррирование?
Каррирование — это процесс преобразования функции с несколькими аргументами в цепочку функций, каждая из которых принимает один аргумент.

```javascript
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// Обычная функция
function multiply(a, b) {
  return a * b;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)); // 6
```

> 📌 Функция curry "заворачивает" обычную функцию в форму с последовательным вызовом.

---

## 🔹 Зачем нужно?
Удобство повторного использования:

```javascript
const add = (a) => (b) => a + b;

const add5 = add(5);
console.log(add5(10)); // 15
```

Можно делать частичное применение аргументов:

```javascript
const log = (date) => (level) => (message) =>
  `[${date.toISOString()}] [${level}]: ${message}`;

const today = new Date();
const logError = log(today)("ERROR");

logError("Что-то пошло не так...");
```

---

## 🔹 Как реализовать каррирование вручную?

```javascript
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}
```

> 📌 Функция func.length показывает, сколько аргументов нужно функции. Мы проверяем, если их достаточно — вызываем, иначе — продолжаем собирать.

---

## 🔹 Примеры

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
```

---

## ⚠️ Подводные камни

- func.length не работает корректно, если у функции есть параметры по умолчанию.

- Каррирование может сделать код менее читаемым, если используется без нужды.

- Не всегда каррирование — лучшее решение. Иногда проще вызвать sum(a, b, c) напрямую.

