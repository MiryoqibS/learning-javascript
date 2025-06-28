/*
== Задача 1 с сайта ==
Ошибка при чтении несуществующего свойства
Обычно при чтении несуществующего свойства из объекта возвращается undefined.

Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.
Это может помочь обнаружить программные ошибки пораньше.
Напишите функцию wrap(target), которая берёт объект target и возвращает прокси,
добавляющий в него этот аспект функциональности.

Вот как это должно работать:

let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        // ваш код 
    });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // Ошибка: такого свойства не существует
*/

let user = {
    name: "John",
};

function wrap(target) {
    return new Proxy(target, {
        get(target, property, receiver) {
            if (!(property in target)) {
                throw new Error("Ошибка: такого свойства не существует");
            }

            return Reflect.get(...arguments);
        },
    });
}

user = wrap(user);

// console.log(user.name); // John
// console.log(user.age); // Ошибка: такого свойства не существует

/*
== Задача 2 с сайта ==
Получение элемента массива с отрицательной позиции
В некоторых языках программирования возможно получать элементы массива, используя отрицательные индексы, отсчитываемые с конца.

Вот так:

let array = [1, 2, 3];

array[-1]; // 3, последний элемент
array[-2]; // 2, предпоследний элемент
array[-3]; // 1, за два элемента до последнего
Другими словами, array[-N] – это то же, что и array[array.length - N].

Создайте прокси, который реализовывал бы такое поведение.

Вот как это должно работать:

let array = [1, 2, 3];

array = new Proxy(array, {
  // ваш код 
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// вся остальная функциональность массивов должна остаться без изменений
*/

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, property, receiver) {
        if (target instanceof Array) {
            const index = Number(property);

            if (!isNaN(index) && index < 0) {
                return target[target.length + index];
            }

            return Reflect.get(...arguments);
        }
    },
});

console.log(array[1]); // 2
console.log(array[-1]); // 3
console.log(array[-2]); // 2

/*
== Задача 3 с сайта ==
Observable
Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.

Вот как это должно работать:

function makeObservable(target) {
  // ваш код 
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.

При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.

P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции могут быть реализованы похожим образом.
*/

function makeObservable(target) {
    let observeFn = () => {};

    target = new Proxy(target, {
        set(target, property, value, receiver) {
            // if (!(property in target)) {
            //     target[property] = null;
            //     return null;
            // }

            // if (property.startsWith("_")) {
            //     throw new Error('Отказано в доступе "-Свойство приватное"');
            // };

            observeFn(property, value);

            return Reflect.set(...arguments);
        },
    });

    target.observe = (fn) => {
        observeFn = fn;
    }

    return target;
};

let person = {};
person = makeObservable(person);

person.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

person.name = "John"; // выводит: SET name=John
person.age = 25; // выводит: SET name=John
