/*
== Задание 1 с сайта ==
Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
*/

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

/*
== Задание 2 с сайта ==
Проверка на пустоту
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

Должно работать так:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
*/

const isEmpty = (obj) => {
    let length = 0;
    for (const key in obj) {
        length++;
    };

    return length > 0 ? false : true;
};

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false
delete schedule["8:30"];
console.log(isEmpty(schedule)); // true

/*
== Задание 3 с сайта ==
Объекты-константы?
Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
    name: "John"
};

// это будет работать?
user.name = "Pete"; До работать будет потому что мы изменяем не тип переменой и значение внутри неё!
*/

/*
== Задание 4 с сайта ==
Сумма свойств объекта
У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
*/

const sum = (obj) => {
    let result = 0;
    for (const key in obj) {
        result += obj[key];
    };
    return result;
};

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

console.log(sum(salaries));

/*
== Задание 5 с сайта ==
Умножаем все числовые свойства на 2
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

const multiplyNumeric = (obj) => {
    for (const key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        };
    };

    console.log(obj);
};

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);