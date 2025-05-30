# 📦 Тема 9.1 - Классы в JavaScript

Тема посвящена созданию классов, работе с конструкторами, методами, и правильному использованию this. Основа для объектно-ориентированного подхода в JavaScript.

---

## 🔹 Объявление класса

Класс создаётся с помощью ключевого слова class:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Привет, " + this.name);
  }
}
```

> 📌 Класс — это синтаксический сахар над функцией-конструктором.

---

## 🔹 Конструктор constructor()

constructor — это специальный метод, который автоматически вызывается при создании объекта через new.

```javascript
class Animal {
  constructor(type) {
    this.type = type;
  }
}
```

---

## 🔹 Методы класса

Методы в классах пишутся без слова function:

```javascript
class Car {
  constructor(model) {
    this.model = model;
  }

  start() {
    console.log(`${this.model} поехала`);
  }
}
```

> 📌 Все методы класса попадают в prototype.

---

## 🔹 Ключевое слово this

Внутри методов this всегда ссылается на экземпляр класса:

```javascript
const bmw = new Car("BMW");
bmw.start(); // BMW поехала
```

---

## 🔹 Проблема с this в setInterval

При передаче метода в setInterval теряется контекст:

```javascript
this.timer = setInterval(this.render, 1000); // неправильно
```

Решение — использовать _bind_:

```javascript
this.timer = setInterval(this.render.bind(this), 1000); // правильно
```

---

## 🔹 Отличия class от функции-конструктора

```javascript
// Конструктор
function User(name) {
  this.name = name;
}

// Класс
class User {
  constructor(name) {
    this.name = name;
  }
}
```

---

## 🔹 задача: Часы 🕒

```javascript
class Clock {
  constructor(template) {
    this.template = template;
  }

  render() {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");

    const output = this.template
      .replace("h", h)
      .replace("m", m)
      .replace("s", s);
    console.log(output);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}

const clock = new Clock("h:m:s");
clock.start();
```

> 📌 Практика по использованию классов, методов, this, bind, и таймеров.

---

## 🏁 Итого

- Освоены ключевые конструкции: class, constructor, методы, this
- Разобраны отличия классов от функций-конструкторов
