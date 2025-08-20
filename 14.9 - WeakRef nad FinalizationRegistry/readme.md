# 📦 Тема 14.9 - WeakRef и FinalizationRegistry

---

> 🔹 В JavaScript иногда нужно работать с объектами так, чтобы не мешать сборщику мусора (GC). Для этого существуют WeakRef и FinalizationRegistry.

---

## 🔹 WeakRef

`WeakRef` позволяет создать слабую ссылку на объект.
Это значит, что объект может быть удалён GC, даже если на него есть WeakRef.

```javascript
let obj = { name: "Test" };

// создаём слабую ссылку
let weak = new WeakRef(obj);

// получаем объект (если он ещё жив)
console.log(weak.deref()?.name); // => "Test"

obj = null; // объект становится кандидатом для GC
```

> 📌 weak.deref() вернёт объект или undefined, если GC уже его удалил.

---

## 🔹 FinalizationRegistry

`FinalizationRegistry` позволяет зарегистрировать объект и получить уведомление, когда он будет удалён `GC`.

```javascript
const registry = new FinalizationRegistry((id) => {
  console.log(`Ресурс #${id} освобождён`);
});

function createResource(title) {
  const resource = { id: Date.now(), title };
  registry.register(resource, resource.id);
  return resource;
}

let stone = createResource("Камень");
let paper = createResource("Бумага");

console.log(stone, paper);

stone = null;
paper = null;
// После GC появится сообщение о освобождении
```

> 📌 Колбэк вызовется асинхронно, когда GC действительно удалит объект.
> ❗ Нельзя полагаться на точное время вызова — GC работает по своим правилам.

---

## 🔹 Практическое применение

- Кеширование с возможностью автоматической очистки.
- Работа с ограниченными ресурсами (например, файлы, сокеты).
- Очистка больших временных объектов без ручного контроля.

---

## ⚠️ Подводные камни

- `WeakRef` и `FinalizationRegistry` — редко применяются. Их используют в специфичных случаях.
- Нет гарантий времени вызова: `GC` может освободить объект через секунду или через час.
- Нельзя использовать их как "замену" нормальному управлению памятью.
- В продакшене стоит применять осторожно и только там, где действительно нужны слабые ссылки.
