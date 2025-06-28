# 📦 Тема 14.1 - Proxy и Reflect

---

## 🔹 Введение

🔸 **Proxy** — специальный объект, который обернёт `target` и может **перехватывать внутренние операции**, например `get`, `set`, `deleteProperty`, `has`, `apply`, `construct` и другие.

> 📌 Без ловушек Proxy просто **перенаправляет** все действия на исходный объект.

---

## 🔹 Синтаксис

```javascript
let proxy = new Proxy(target, handler);
target – объект-цель
```

🔸 **handler** – объект с ловушками (`traps`)

Если ловушка отсутствует, операция идёт в target как обычно

---

## 🔹 Ловушки (traps)

Перехватывают операции на прокси:
| Внутренний метод | Ловушка | Что вызывает |
|-----------------------|--------------------------|---------------------------------------------|
| `[[Get]]` | `get` | Чтение свойства |
| `[[Set]]` | `set` | Запись значения |
| `[[HasProperty]]` | `has` | Оператор `in` |
| `[[Delete]]` | `deleteProperty` | Удаление через `delete obj.prop` |
| `[[Call]]` | `apply` | Вызов функции `proxy()` |
| `[[Construct]]` | `construct` | Создание через `new proxy()` |
| `[[GetOwnProperty]]` | `getOwnPropertyDescriptor` | `Object.getOwnPropertyDescriptor()` |
| `[[OwnPropertyKeys]]` | `ownKeys` | `Object.keys()` и другие ключевые операции |

---

# 🔹 Объяснение ловушек с примерами

### 🔸 get

Перехватывает чтение свойства

```javascript
const proxy = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
});
```

### 🔸 set

Перехватывает запись значения

```javascript
const proxy = new Proxy(user, {
  set(target, prop, value, receiver) {
    console.log(`SET ${prop} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
});
```

### 🔸 has

Работает когда используется in

```javascript
const proxy = new Proxy(user, {
  has(target, prop) {
    console.log(`HAS ${prop}`);
    return Reflect.has(target, prop);
  },
});
```

### 🔸 deleteProperty

Срабатывает при delete

```javascript
const proxy = new Proxy(user, {
  deleteProperty(target, prop) {
    console.log(`DELETE ${prop}`);
    return Reflect.deleteProperty(target, prop);
  },
});
```

### 🔸 apply

Перехват вызова функции

```javascript
function sayHi(name) {
  return `Hi ${name}`;
}
const proxy = new Proxy(sayHi, {
  apply(target, thisArg, args) {
    console.log(`Function called with ${args}`);
    return Reflect.apply(target, thisArg, args);
  },
});
```

### 🔸 ownKeys

Срабатывает при Object.keys, for...in

```javascript
const proxy = new Proxy(user, {
  ownKeys(target) {
    console.log(`Listing keys`);
    return Reflect.ownKeys(target);
  },
});
```

---

## 🔹 Инварианты

`Proxy` должен сохранять поведение target:

- set/deleteProperty возвращают true при успешных операциях

- getPrototypeOf(proxy) === getPrototypeOf(target)

---

## 🔹 Reflect

Reflect — объект с методами (get, set, has и др.), которые повторяют стандартное поведение. Используется внутри ловушек для сохранения логики по умолчанию:

```javascript
return Reflect.get(target, prop, receiver);
```

## 🔹 Пример: ловушка чтения

```javascript
let user = { name: "Miryoqub" };
let proxy = new Proxy(user, {
  get(t, p, r) {
    console.log(`Читаем ${p}`);
    return Reflect.get(t, p, r);
  },
});
console.log(proxy.name); // читаем + возвращает значение
```

--

## 🔹 Отключаемый (revocable) Proxy

Можно создать Proxy, который позже отключается с помощью Proxy.revocable(). Это полезно, если нужно прекратить доступ к target

```javascript
const user = {
  name: "Miryoqib",
};

const { proxy, revoke } = Proxy.revocable(user, {});

console.log(proxy.name);

revoke(); // Отключаем

console.log(proxy.name); // Ошибка
```

---

## 🔹 Реальные кейсы применения

- 📋 Логгирование операций (get, set, delete)

- ✅ Валидация значений перед записью

- 🔐 Защита: запрещённый доступ, read-only, private

- 🔄 Реактивность: даёт основу для Vue/MobX

- ✨ Магия: псевдонимы свойств, отрицательные индексы, автозаполнение

- 👁️‍🗨️ Observable: отслеживание изменений

---

## ⚠️ Подводные камни и нюансы

- ❗ Все свойства прокси приходят как строки, даже индексы массива "-1"

- ❗ Без `Reflect` легко сломать стандартную логику

- ❗ `set` должен всегда возвращать true, иначе JS может считать операцию неудачной

- ❗ `apply`/`construct` — сложные ловушки для работы с функциями и new

- ❗ `revocable` `Proxy` можно деактивировать, после этого любые операции кидают
