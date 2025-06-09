# 📦 Тема 9.6 - instanceof

---

## 🔹 Что такое instanceof?

Оператор instanceof проверяет, принадлежит ли объект к классу (или функции-конструктору), ссылаясь на цепочку прототипов.

```javascript
obj instanceof Constructor;
```

> 📌 Возвращает true, если Constructor.prototype есть в прототипной цепочке obj.

---

## 🔹 Как это работает?

```javascript
function Rabbit() {}
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit); // true
```

> 📌 JS смотрит, есть ли Rabbit.prototype в цепочке [[Prototype]] объекта rabbit.

---

## 🔹 Пример с наследованием

```javascript
class Animal {}
class Dog extends Animal {}

let rex = new Dog();

console.log(rex instanceof Dog); // true
console.log(rex instanceof Animal); // true
console.log(rex instanceof Object); // true
```

> 📌 rex → Dog.prototype → Animal.prototype → Object.prototype

---

## 🔹 Кастомизация поведения через Symbol.hasInstance

Ты можешь переопределить, как работает instanceof:

```javascript
class Custom {
  static [Symbol.hasInstance](obj) {
    return obj.name === "Miryoqib";
  }
}

console.log({ name: "Miryoqib" } instanceof Custom); // true
```

> 📌 Работает только если у класса есть Symbol.hasInstance

---

## 🔹 Странный случай

```javascript
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // true ❗️
```

> 📌 instanceof проверяет не саму функцию, а её .prototype
> 📌 A.prototype === B.prototype, значит a считается экземпляром обоих.

---

## ⚠️ Подводные камни

- ✅ instanceof не работает с примитивами
- 🔁 instanceof зависит от текущего prototype, можно подменить
- 🔍 Не стоит использовать для точного типа — лучше Object.prototype.toString.call()
