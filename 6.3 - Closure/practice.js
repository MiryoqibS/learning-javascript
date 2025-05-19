"use strict";

/*
== Задание 1 с сайта ==
Учитывает ли функция последние изменения?
Функция sayHi использует имя внешней переменной. Какое значение будет использоваться при выполнении функции?

let name = "John";

function sayHi() {
    alert("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?
Такие ситуации встречаются как при разработке для браузера, так и для сервера. Функция может быть назначена на выполнение позже, чем она была создана, например, после действия пользователя или сетевого запроса.

Итак, вопрос: учитывает ли она последние изменения?
*/

let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // Выведется "Hi Pete" потому-что переменная name было изменена до вызова функции

/* 
== Задание 2 с сайта ==
Какие переменные доступны?
Приведенная ниже функция makeWorker создает другую функцию и возвращает ее. Эта новая функция может быть вызвана из другого места.

Будет ли она иметь доступ к внешним переменным из места своего создания, или из места вызова, или из обоих мест?

function makeWorker() {
    let name = "Pete";

    return function() {
        alert(name);
    };
}

let name = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // что будет показано?
Какое значение будет показано? «Pete» или «John»?
*/

function makeWorker() {
    let name2 = "Pete";

    return function () {
        console.log(name2);
    };
}

let name2 = "John";

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // Выведется "Pete" потому-что переменная уже обвялена в локальном окружении функции

/*
== Задание 3 с сайта ==
Независимы ли счётчики?
Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.

Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?
*/

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1
// Каждая функция имеет собственное лексическое окружение

/*
== Задание 4 с сайта ==
Объект счётчика
Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет?

function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?
*/

function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter3 = new Counter();

console.log(counter3.up()); // 1
console.log(counter3.up()); // 2
console.log(counter3.down()); // 1

/*
== Задание 5 с сайта ==
Функция внутри if
Посмотрите на код. Какой будет результат у вызова на последней строке?

Обратите внимание: результат зависит от режима выполнения кода. Здесь используется строгий режим "use strict".

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi();
*/

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi2() {
        console.log(`${phrase}, ${user}`);
    }
}

// в строгом режиме будет ошибка!
// sayHi2();

/*
== Задание 6 с сайта ==
Сумма с помощью замыканий
Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

Да, именно таким образом, используя двойные круглые скобки (не опечатка).

Например:

sum(1)(2) = 3
sum(5)(-1) = 4
*/

const sum = (a) => {
    return function (b) {
        return a + b;
    };
};

console.log(sum(1)(2));
console.log(sum(5)(-1));

/*
== Задание 7 с сайта ==
Видна ли переменная?
Что выведет данный код?

let x = 1;

function func() {
    console.log(x); // ?

    let x = 2;
}

func();
P.S. В этой задаче есть подвох. Решение не очевидно.
*/

let x = 1;

function func() {
    console.log(x); // Ошибка так как функция с начало ищет переменную локально а она используется до инициализации

    // let x = 2;
}

func();

/*
== Задание 8 с сайта ==
Фильтрация с помощью функции
У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
Например:

.. ваш код для inBetween и inArray 
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
*/

const inBetween = (a, b) => {
    return function (value) {
        return value >= a && value <= b;
    };
};

const inArray = (arr) => {
    return function (value) {
        return arr.includes(value);
    };
};

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

/*
== Задание 9 с сайта ==
Сортировать по полю
У нас есть массив объектов, который нужно отсортировать:

let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
];
Обычный способ был бы таким:

// по имени (Анна, Иван, Пётр)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Пётр, Анна, Иван)
users.sort((a, b) => a.age > b.age ? 1 : -1);
Можем ли мы сделать его короче, например вот таким?

users.sort(byField('name'));
users.sort(byField('age'));
То есть чтобы вместо функции мы просто писали byField(fieldName).

Напишите функцию byField, которая может быть использована для этого.
*/

let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" },
];

const byField = (field) => {
    return function (a, b) {
        return a.field > b.field ? 1 : -1;
    }
};

users.sort(byField("name"));
console.log(users);
users.sort(byField("age"));
console.log(users);

/*
== Задание 10 с сайта ==
Армия функций
Следующий код создаёт массив из стрелков (shooters).

Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter); // и добавлять стрелка в массив
        i++;
    }

    // ...а в конце вернуть массив из всех стрелков
    return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.

Почему у всех стрелков одинаковые номера?
Почините код, чтобы он работал как задумано.
*/

function makeArmy() {
    let shooters = [];

    let i = 0;

    while (i < 10) {
        let j = i;

        let shooter = function () {
            console.log(j);
        };

        i++;

        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.