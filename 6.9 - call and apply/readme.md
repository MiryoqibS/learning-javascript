# 📦 Тема 6.9 - Call / Apply / Декораторы

---

## 🔹 Что такое `call` и `apply`?

Они позволяют **вызвать функцию с явным указанием `this`**.

```javascript
function sayHello() {
  console.log(`Привет, ${this.name}`);
}

const user = { name: "Мирёкуб" };

sayHello.call(user); // Привет, Мирёкуб
sayHello.apply(user); // Привет, Мирёкуб
```

> 📌 call и apply делают одно и то же, но:

```javascript
call(thisArg, arg1, arg2, ...) //— аргументы по одному

apply(thisArg, [arg1, arg2, ...]) // — аргументы массивом
```

---

### 🔹 Как использовать call с методами?

```javascript
function greet(lang) {
  console.log(`${lang}: Привет, ${this.name}`);
}

const person = { name: "Miryoqib" };

greet.call(person, "JS"); // JS: Привет, Miryoqib
```

---

### 🔹 Что такое декоратор?

**Декоратор** — это обёртка над функцией, которая расширяет её поведение.

```javascript
function slow(x) {
  // имитируем тяжёлую функцию
  for (let i = 0; i < 1e6; i++) {}
  return x;
}
```

Декоратор **cachingDecorator**:

```javascript
function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x);
    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(5)); // вычислит
console.log(slow(5)); // возьмёт из кеша
```

> 📌 Декоратор запоминает результат и ускоряет повторные вызовы.

---

### 🔹 Как сохранить this внутри декоратора?

Используй func.call(this, ...), чтобы передать правильный контекст:

```javascript
function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}
```

---

### 🔹 Практический пример

```javascript
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    return x * this.someMethod();
  },
};

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) return cache.get(x);
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow);

console.log(worker.slow(2)); // 2
console.log(worker.slow(2)); // из кеша: 2
```

---

### ⚠️ Подводные камни

- Декораторы "затирают" исходную функцию (теряется имя, длина и т.п.)
- call/apply не меняют функцию, а просто разово вызывают её с другим this
- Нужно быть осторожным с this, особенно в объектах и методах

---

## 🏁 Итого

- call и apply — мощные инструменты управления контекстом this.
- Декораторы позволяют добавлять поведение к функциям без изменения их кода.
- Правильная работа с this внутри декораторов — ключ к правильной архитектуре.
- Эти приёмы особенно полезны в производительном, безопасном и переиспользуемом коде.
