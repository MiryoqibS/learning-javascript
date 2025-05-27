# 📦 Тема 8.1 - Прототипное наследование

---

## 🔹 Краткое объяснение

Прототипное наследование — это механизм в JavaScript, при котором объекты могут наследовать свойства и методы от других объектов через цепочку [[Prototype]].

> 📌 В JavaScript почти всё является объектами, и у объектов есть скрытое свойство [[Prototype]], доступное как **proto**.

---

## 🔹 Основные понятия

Каждый объект может иметь прототип, от которого он наследует свойства и методы

Цепочка прототипов работает так:
`object` → `prototype` → `prototype` → ... → `null`

Доступ к свойствам и методам ищется снизу вверх по цепочке

---

## 🔹 Пример наследования

```javascript
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true
```

> 📌 Свойство eats не находится в rabbit, но через **proto** найдено в animal

---

## 🔹 Удаление свойства и цепочка

```javascript
let animal = { jumps: null };
let rabbit = { __proto__: animal, jumps: true };

console.log(rabbit.jumps); // true
delete rabbit.jumps;
console.log(rabbit.jumps); // null
delete animal.jumps;
console.log(rabbit.jumps); // undefined
```

> 📌 Свойство ищется сначала в rabbit, затем в animal, и если везде удалено — undefined

---

## 🔹 Куда записывается свойство?

```javascript
let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();
console.log(rabbit.full); // true
```

> 📌 this внутри eat() ссылается на объект rabbit, т.к. он вызывает метод

---

## 🔹 Проблема с общим объектом

```javascript
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

speedy.eat("apple");
console.log(speedy.stomach); // ["apple"]
console.log(lazy.stomach); // ["apple"]
```

> 📌 Проблема в том, что stomach один на всех — решение:

```javascript
let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};
```

> 📌 Теперь у каждого хомяка свой независимый stomach

---

## 🔹 Цепочка поиска

```javascript
let head = { glasses: 1 };
let table = { __proto__: head, pen: 3 };
let bed = { __proto__: table, sheet: 1, pillow: 2 };
let pockets = { __proto__: bed, money: 2000 };

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(pockets.glasses); // 1
```

> 📌 Путь: `pockets` → `bed` → `table` → `head`

---

## 🔹 Проверка владения свойством

```javascript
rabbit.hasOwnProperty("jumps"); // true/false
```

> 📌 Показывает, есть ли собственное (не унаследованное) свойство

---

## 🔹 Прототипы встроенных типов

```javascript
console.log((10).**proto** === Number.prototype); // true
console.log(99999n.**proto** === BigInt.prototype); // true
console.log(true.**proto** === Boolean.prototype); // true
console.log(Symbol('A').**proto** === Symbol.prototype); // true
```

> 📌 Примитивы используют обёртки и тоже имеют прототипы

---

## ⚠️ Подводные камни

- Стрелочные функции не имеют prototype, нельзя использовать new
- У примитивов нет prototype, только у функций-конструкторов (например, Symbol.prototype ≠ s.prototype)
