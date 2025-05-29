# 📦 Тема 8.4 - Методы прототипов, объекты без свойства `__proto__`

---

## 🔹 Суть темы

Иногда нужно создать **«чистый» объект**, у которого нет прототипа, чтобы избежать конфликтов с `Object.prototype`.

Для этого используется:

```javascript
let dictionary = Object.create(null);
```

> 📌 Такой объект не наследует методы вроде toString, hasOwnProperty и не имеет [[Prototype]].

---

## 🔹 Добавление метода toString

Если создать объект через `Object.create(null)`, он не будет иметь метод `toString` (он же находится в `Object.prototype`).

Чтобы добавить toString, но не делать его перечисляемым, используется `Object.defineProperty`:

```javascript
Object.defineProperty(dictionary, "toString", {
  value: function () {
    return Object.keys(this).join(",");
  },
  enumerable: false, // чтобы не появлялся в for..in
});
```

> 📌 Метод toString теперь есть, но он не мешает перебору ключей.

---

## 🔹 Пример

```javascript
let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
  value: function () {
    return Object.keys(this).join(",");
  },
  enumerable: false,
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // это обычное свойство!

for (let key in dictionary) {
  console.log(key); // "apple", "__proto__"
}

console.log(String(dictionary)); // "apple,__proto__"
```

---

## 🔹 Разница между вызовами методов

Пример:

```javascript
function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function () {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // "Rabbit"
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi(); // undefined
```

> 📌 Только rabbit.sayHi() работает корректно, так как this === rabbit.
> В других случаях `this` ссылается на `Rabbit.prototype`, а у него нет свойства name.

---

## ⚠️ Подводные камни

- Если забыть enumerable: false, метод toString будет выводиться при for..in.
- Свойство **proto** в Object.create(null) — это обычный ключ, а не ссылка на прототип.
- Использовать объекты без [[Prototype]] удобно для словарей, но в них нельзя использовать методы hasOwnProperty, toString и др. без ручного добавления.
