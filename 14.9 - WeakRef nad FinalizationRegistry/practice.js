/*
== Задача 1 ==
Отслеживание удалённых элементов DOM

Задача: Создай класс DetachedLogger, который следит за удалением DOM-элементов и логирует это событие.
Используй WeakRef для ссылки на элемент.
FinalizationRegistry — чтобы вывести в консоль, когда элемент был удалён сборщиком мусора.
В браузере остаточно сложно проверить GC, поэтому используй Node.js или среду типа Runkit.
*/

// class DetachedLogger {
//     constructor() {
//         this.registry = new FinalizationRegistry((info) => {
//             console.log(`[DetachedLogger] ${info} был собран сборщиком мусора`);
//         });
//     }

//     setRegistry(element) {
//         const elementName = element.id || element.className || element.tagName || "element";
//         this.registry.register(element, elementName);
//     }
// };

// let element = document.createElement("div");
// element.id = "myDiv";
// element.className = "myDiv";

// const logger = new DetachedLogger();
// logger.setRegistry(element);

// setTimeout(() => {
//     element.remove();
//     element = null;
// }, 1000);

/*
== Задача 2 == 
Кеш с автоматическим очищением

Задача: Реализуй функцию makeWeakCache(f), которая кеширует результаты вызова f(key):
Используй Map со значениями в виде WeakRef(value).
Если deref() возвращает undefined, кеш удаляет устаревшую запись и вычисляет заново.
Подсказка: посмотри пример кэширования с WeakRef в спецификации.
*/

const makeWeakCache = (func) => {
    const WeakRefCache = new Map();
    const registry = new FinalizationRegistry((key) => {
        console.log(`[WeakCache] запись с ключом ${key} было собрано сборщиком мусора`);
    });

    return (...args) => {
        const key = JSON.stringify(args);
        const cachedValue = WeakRefCache.get(key);

        if (cachedValue?.deref()) {
            console.log(`${cachedValue?.deref()} Взято из кэша`);
            return cachedValue?.deref();
        };

        const newValue = func(...args);
        WeakRefCache.set(key, new WeakRef(newValue));
        registry.register(newValue, key);
        console.log(`${newValue} добавлено в кэш`);
        return newValue;
    }
};

const makeObj = (x) => ({
    value: x,
    [Symbol.toPrimitive]() {
        return this.value;
    }
});
const cachedMakeObj = makeWeakCache(makeObj);

// Если на эти объекты нету ссылок но они автоматически удаляются
cachedMakeObj(1);
cachedMakeObj(2);
cachedMakeObj(1);
cachedMakeObj(3);
cachedMakeObj(3);

/*
== Задача 3 == 
Ресурсный менеджер с FinalizationRegistry

Задача: Симулируй объект Resource, например {id: ...}:
При создании — регистрируй его в FinalizationRegistry с описанием ресурса.
Когда объект будет GC, в колбэке фиксируй "Ресурс {id} освобождён".
Это демонстрирует управление ресурсами через финализаторы.
*/

const createResource = (title) => ({
    id: Number(Date.now()),
    title,
    description: "Очень полезный ресурс",
});

const registry = new FinalizationRegistry((id) => {
    console.log(`Ресурс #${id} освобождён`);
});

let resourceStone = createResource("Камень");
let resourcePaper = createResource("Бумага");

registry.register(resourceStone, resourceStone.id);
registry.register(resourcePaper, resourcePaper.id);

console.log(resourceStone);
console.log(resourcePaper);

resourceStone = null;
resourcePaper = null;

