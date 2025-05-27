# 📦 Тема 7.2 – Свойства - геттеры и сеттеры (Property Accessors)

---

## 🔹 Что такое аксессоры?

**Аксессоры** — это специальные методы для чтения и записи свойства:

- `get` — геттер, срабатывает при **чтении**
- `set` — сеттер, срабатывает при **записи**

Используются вместо обычных свойств, чтобы добавить **логики** или **валидации**.

---

## 🔹 Пример геттера и сеттера

```javascript
const user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

console.log(user.fullName); // "John Smith"
user.fullName = "Alice Cooper";
console.log(user.name); // "Alice"
```

> 📌 fullName работает как обычное свойство, но за ним стоит функция

---

## 🔹 Пример с валидацией в сеттере

```javascript
const person = {
  ageValue: null,

  get age() {
    return this.ageValue;
  },

  set age(value) {
    if (0 < value && value < 120) {
      this.ageValue = value;
    } else {
      console.warn("Недопустимый возраст!");
    }
  },
};

person.age = 140; // ошибка
```

---

## 🔹 Геттер с форматированным выводом

```javascript
const product = {
  title: "Хлеб",
  priceValue: 50,

  get info() {
    return `${this.title} - ${this.priceValue}₽`;
  },
};

console.log(product.info); // "Хлеб - 50₽"
```

---

## 🔹 Геттер, который скрывает значение

```javascript
const password = {
  _password: "123456",

  get value() {
    return "****";
  },
};

console.log(password.value); // "****"
```

---

## 🔹 Логика в сеттерах: счётчик

```javascript
const counter = {
  count: 0,

  set increment(value) {
    if (!isNaN(value)) this.count += value;
  },

  set decrement(value) {
    if (!isNaN(value)) this.count -= value;
  },
};

counter.increment = 2;
counter.decrement = 1;
console.log(counter.count); // 1
```

---

## 🔹 История изменений через set

```javascript
const userLog = {
  history: [],
  currentUsername: "Bob",

  set username(value) {
    this.history.push(value);
    this.currentUsername = value;
  },

  get log() {
    return this.history;
  },
};

userLog.username = "admin";
userLog.username = "root";
console.log(userLog.log); // ["admin", "root"]
```

---

## 🔹 Защита свойства через функцию

```javascript
const createProtectedProperty = (obj, key) => {
  Object.defineProperty(obj, key, {
    get() {
      return "****";
    },
    set(value) {
      obj[`_${key}`] = value;
    },
  });
};

const user = { _token: "abc123" };
createProtectedProperty(user, "token");
console.log(user.token); // "****"
user.token = "new";
console.log(user._token); // "new"
```

---

## ⚠️ Подводные камни

- Сеттер не может возвращать значение — он только записывает.
- В `set` нужно всегда проверять входящие данные.
- Не создавай бесконечный вызов: `get fullName() { return this.fullName }` — это вызовет рекурсию.
- Геттеры и сеттеры работают как свойства, без `()`.
