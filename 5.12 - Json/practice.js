/*
== Задание 1 с сайта ==
Преобразуйте объект в JSON, а затем обратно в обычный объект
Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
    name: "Василий Иванович",
    age: 35
};
*/

let user = {
    name: "Василий Иванович",
    age: 35,
};

const copy = JSON.parse(JSON.stringify(user));

/*
== Задание 2 с сайта ==
Исключить обратные ссылки
В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  // ваш код 
}));

// в результате должно быть:
{
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
}
*/

let room = {
    number: 23,
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
    JSON.stringify(meetup, function replacer(key, value) {
        return key != "" && value == meetup ? undefined : value;
    })
);

/* 
== Задание 1 от ChatGPT ==
Напиши функцию serializeUser(user), которая принимает объект:

let user = {
    name: "Alice",
    age: 25,
    isAdmin: false,
    friends: ["Bob", "Charlie"]
};
и возвращает красиво отформатированную JSON-строку с отступом в 4 пробела.
*/

let women = {
    name: "Alice",
    age: 25,
    isAdmin: false,
    friends: ["Bob", "Charlie"],
};

const serializeUser = (user) => {
    return JSON.stringify(user, null, 4);
};

console.log(serializeUser(women));

/*
== Задание 2 от ChatGPT ==
Есть объект:

let account = {
    username: "ivanov",
    password: "qwerty123",
    email: "ivanov@example.com"
};

Напиши serializeAccount(account), чтобы в итоговой строке не было поля password.
*/

let account = {
    username: "ivanov",
    password: "qwerty123",
    email: "ivanov@example.com",
    test: "rgegre",
};

const serializeAccount = (account) => {
    return JSON.stringify(
        account,
        (key, value) => {
            return key === "password" ? undefined : value;
        },
        4
    );
};

console.log(serializeAccount(account));

/*
== Задание 3 от ChatGPT ==
Тот же объект account, но теперь тебе нужно сериализовать только username и email, никаких других полей.

<details> <summary>Подсказка</summary> Вторым аргументом `JSON.stringify` передай массив `["username","email"]`. </details>
*/

const formatAccountObj = (account) => {
    return JSON.stringify(
        account,
        (key, value) => {
            if (key === "") return value;
            return ["username", "email"].includes(key) ? value : undefined;
        },
        4
    );
};

console.log(formatAccountObj(account));

/*
== Задание 4 от ChatGPT ==
Создай объект event:

let event = {
    title: "Conference",
    date: new Date(2025, 0, 15, 10, 0)
};

При сериализации JSON.stringify(event) нужно, чтобы date выводилась в виде UNIX‑метки (кол‑во миллисекунд с 1970 года), а не строки ISO.
Реализуй это через добавление метода toJSON в объект event.
*/

let event = {
    title: "Conference",
    date: new Date(2025, 0, 15, 10, 0),

    toJSON() {
        return this.date.getTime();
    },
};

console.log(JSON.stringify(event));
