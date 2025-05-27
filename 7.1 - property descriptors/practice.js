/*
== Задание 1 от ChatGPT ==
Создай объект user с полем name и с помощью Object.defineProperty сделай его незаписываемым (writable: false).
Проверь: попытка изменить user.name не должна сработать.
*/

const user = {
    name: "Miryoqib",
};

Object.defineProperty(user, 'name', {
    writable: false,
});

user.name = "Nodir";
console.log(user.name);


/*
== Задание 2 от ChatGPT ==
Создай объект с полем secret = "hidden" и сделай его неперечислимым (enumerable: false).
Проверь: for...in не должен его показывать, но оно должно быть доступно напрямую.
*/

const person = {
    name: "Bob",
    secret: "hidden",
};

Object.defineProperty(person, "secret", {
    enumerable: false,
});

for (const key in person) {
    console.log(key);
};

/*
== Задание 3 от ChatGPT ==
Создай свойство role = "admin" и сделай его configurable: false.
Попробуй удалить это свойство — оно не должно удаляться.
Попробуй изменить configurable обратно в true — это вызовет ошибку.
*/

const user2 = {
    role: "admin",
};

Object.defineProperty(user2, "role", {
    configurable: false,
});

delete user2.role;

console.log(user2.role);

/*
== Задание 4 от ChatGPT ==
Создай свойство version = "1.0.0" с флагами, которые делают его:
Незаписываемым
Неудаляемыи
Неперечислимым
Иначе говоря: writable: false, configurable: false, enumerable: false.
*/

const app = {
    version: "1.0.0",
};

Object.defineProperty(app, "version", {
    writable: false,
    enumerable: false,
    configurable: false,
});

console.log(app);

/*
== Задание 5 от ChatGPT ==
Создай объект с каким-нибудь свойством и с помощью 
Object.getOwnPropertyDescriptor выведи в консоль все флаги этого свойства.
*/

const book = {
    title: "Modern Javascript for impotents",
    price: 900,
    isGoodBook: true,
};

console.log(Object.getOwnPropertyDescriptors(book));

/*
== Задание 6 от ChatGPT ==
Создай два свойства: a и b. Пусть a будет обычным свойством, а b будет:

writable: false
enumerable: false
configurable: false

Сравни поведение: можно ли удалить, изменить, перебрать в цикле?
*/

const someObj = {};

Object.defineProperties(someObj, {
    a: {
        value: 1,
        writable: false,
        enumerable: false,
        configurable: false,
    },
    b: {
        value: 1,
        writable: false,
        enumerable: false,
        configurable: false,
    },
});

console.log(someObj);

// Нельзя
delete someObj.a;
delete someObj.b;

// Нельзя
someObj.a = 2;
someObj.b = 2;

// Не выводиться в цикле
for (const key in someObj) {
    console.log(key);
};

/*
== Задание 7 от ChatGPT ==
Создай свойство token = "abc123" и сделай его configurable: false.
Убедись, что delete obj.token не сработает.
*/

const player = {
    token: "abc123",
};

Object.defineProperty(player, "token", {
    configurable: false,
});

delete player.token;
console.log(player.token);

/*
== Задание 8 от ChatGPT ==
Возьми Math.PI и попробуй изменить его значение.
Затем получи его дескриптор через Object.getOwnPropertyDescriptor.
Почему изменение не работает?
*/

console.log(Object.getOwnPropertyDescriptor(Math.PI)); // потому-что configurable false

/*
== Задание 9 от ChatGPT ==
Создай объект settings и добавь в него поле appName = "MyApp" так, чтобы:
Это свойство нельзя было изменить, удалить или перебрать в цикле.
Используй Object.defineProperty.
*/

const settings = {
    appName: "MyApp",
};

Object.defineProperty(settings, "appName", {
    writable: false,
    enumerable: false,
    configurable: false,
});

delete settings.appName;
settings.appName = "OtherApp";
for (const key in settings) {
    console.log(key);
};
console.log(settings.appName);


/*
== Задание 10 от ChatGPT ==
Создай объект person с полем age = 20, сначала сделай его обычным (все флаги true).
Затем последовательно:

Сделай его writable: false
Потом enumerable: false
Потом configurable: false

После каждого шага делай попытки изменить, удалить или перебрать — и фиксируй результат в комментариях.
*/

const person2 = {
    age: 20,
};

Object.defineProperty(person2, "age", {
    writable: false,
});

// Результат свойство можно удалить и он итерируется в цикле но его нельзя изменить

Object.defineProperty(person2, "age", {
    enumerable: false,
});

// Результат свойство можно удалить но оно не итерируется в цикле и его нельзя изменить

Object.defineProperty(person2, "age", {
    configurable: false,
});

// Результат свойство нельзя удалить, нельзя его изменить, свойство не итерируется