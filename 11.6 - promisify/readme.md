# 📦 Тема 11.6 - Промисификация

---

## 🔹 Что такое `Промисификация`

**`Промисификация`** — это приём, который превращает функцию с **колбэком вида `(err, result)`** в функцию, возвращающую **Promise**.

> 📌 Это особенно полезно при работе с устаревшими API, чтобы использовать их через `await`.

---

## 🔹 Сигнатура колбэк-функции

Функции для `promisify` должны быть в формате:

```javascript
function example(arg1, arg2, callback) {
  // ...
  callback(err, result);
}
```

## 🔹 Пример промисификации

```javascript
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}
```

## 🔹 Применение promisify

### Пример 1: delay(ms)

```javascript
function delay(ms, callback) {
  setTimeout(() => callback(), ms);
}

const delayPromise = promisify(delay);

delayPromise(1000).then(() => console.log("Прошла 1 секунда"));
```

> 📌 Используем setTimeout через промис.

### Пример 2: getUser(callback)

```javascript
function getUser(callback) {
  setTimeout(() => callback(null, { name: "Miryoqib", age: 15 }), 300);
}

const getUserPromise = promisify(getUser);

getUserPromise().then((user) => console.log(user));
```

---

## 🔹 Сохранение this через bind

```javascript
const obj = {
  value: 42,
  method(callback) {
    callback(null, this.value);
  },
};

const methodPromise = promisify(obj.method.bind(obj));

methodPromise().then((res) => console.log(res)); // 42
```

> 📌 Метод bind(this) сохраняет контекст объекта, чтобы this.value работал корректно внутри метода.

---

## 🔹 Сохранение this без bind

```javascript
function promisifyWithContext(fn, context) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn.call(context, ...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}

const obj = {
  value: 99,
  method(callback) {
    callback(null, this.value);
  },
};

const boundPromise = promisifyWithContext(obj.method, obj);

boundPromise().then(console.log); // 99
```

> 📌 Альтернативный способ — передавать context вручную через .call(context, ...), без bind().

---

## 🔹 Несколько результатов (multiArgs)

```javascript
function getCoords(callback) {
  callback(null, 51.505, -0.09);
}

function promisifyMulti(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, ...results) => {
        if (err) return reject(err);
        resolve(results); // вернёт массив [51.505, -0.09]
      });
    });
  };
}

promisifyMulti(getCoords)().then(([lat, lng]) => {
  console.log(`Широта: ${lat}, Долгота: ${lng}`);
});
```

> 📌 Некоторые функции возвращают несколько значений, например координаты. Мы обрабатываем их через ...results.

---

## 🔹 Обработка ошибок

```javascript
function risky(callback) {
  setTimeout(() => callback(new Error("Что-то пошло не так")), 500);
}

const riskyPromise = promisify(risky);

riskyPromise()
  .then(console.log)
  .catch((error) => console.log(`Ошибка: ${error.message}`));
```

> 📌 Любая ошибка из колбэка callback(err) попадает в .catch() или try...catch. Так намного проще обрабатывать ошибки.

---

## ⚠️ Подводные камни

- 🔸 promisify работает только с функциями, где результат возвращается через (err, result)

- 🔸 Функции с двумя колбэками (success, error) нужно оборачивать вручную

- 🔸 Если функция возвращает несколько результатов, обычный promisify возьмёт только первый

- 🔸 Если у функции есть this, важно использовать .bind() или .call(context)
