# 📦 Тема 7.1 - Дескрипторы свойств (Property Descriptors)

---

## 🔹 Что такое дескриптор свойства?

Каждое свойство объекта в `JavaScript` имеет скрытую "настройку" — дескриптор.
Он определяет поведение свойства: можно ли его менять, удалять, видеть в цикле и т.п.

---

## 🔹 Флаги свойства

У каждого свойства есть 3 главных флага доступа:

- `writable` — можно ли менять значение?
- `enumerable` — видно ли в цикле `for..in` и при `Object.keys()`?
- `configurable` — можно ли удалить или изменить эти флаги?

> 📌 Все обычные свойства создаются с флагами `true`.

---

## 🔹 Как получить флаги?

Используй `Object.getOwnPropertyDescriptor(obj, propName)`:

```javascript
const user = { name: "Miryoqib" };

const descriptor = Object.getOwnPropertyDescriptor(user, "name");
console.log(descriptor);
```

> 📌 Вернёт объект: `{ value: "Miryoqib", writable: true, enumerable: true, configurable: true }`

---

## 🔹 Как задать флаги вручную?

Через `Object.defineProperty`:

```javascript
Object.defineProperty(user, "name", {
  writable: false,
  enumerable: false,
  configurable: false,
});
```

> 📌 Теперь нельзя изменить, удалить или увидеть в цикле for..in.

---

## 🔹 Примеры

🔸 **Незаписываемое свойство**

```javascript
const obj = { name: "Miryoqib" };
Object.defineProperty(obj, "name", { writable: false });

obj.name = "Другой"; // Не изменится
console.log(obj.name); // "Miryoqib"
```

🔸 **Неперечислимое свойство**

```javascript
const obj = { secret: "hidden" };
Object.defineProperty(obj, "secret", { enumerable: false });

for (let key in obj) {
  console.log(key); // secret не будет выведен
}
```

🔸 **Неудаляемое свойство**

```javascript
const obj = { token: "abc123" };
Object.defineProperty(obj, "token", { configurable: false });

delete obj.token; // Не удалится
console.log(obj.token); // "abc123"
🔸 Math.PI нельзя изменить

Math.PI = 5; // Не работает

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
```

---

## 🔹 Object.defineProperties

Можно задать сразу несколько свойств:

```javascript
Object.defineProperties(obj, {
  a: { value: 1, writable: false, enumerable: false, configurable: false },
  b: { value: 2, writable: false, enumerable: false, configurable: false },
});
```

---

## 🔹 Object.getOwnPropertyDescriptors

Получить все дескрипторы сразу:

```javascript
Object.getOwnPropertyDescriptors(obj);
```

---

## 🔹 Зачем нужны дескрипторы?

- Скрытые поля (например, \_password)
- Конфигурация API
- Защита данных от случайных изменений
- Инкапсуляция и контроль

---

## ⚠️ Ошибки и подводные камни

- Если `configurable: false`, невозможно изменить другие флаги.
- Если свойство не `writable`, его значение нельзя изменить.
- С `enumerable: false` не видно в цикле, но всё равно доступно напрямую.
