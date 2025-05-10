/*
== Задание 1 с сайта ==
Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
*/

const camelize = (str = "") => {
    return str.split("-").map((word, index) => index === 0 ?
        word.toLowerCase() :
        word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join("");
};

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

/*
== Задание 2 с сайта ==
Фильтрация по диапазону
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (совпадающие значения)
alert( arr ); // 5,3,8,1 (без изменений)
*/

const filterRange = (arr, a, b) => {
    return arr.filter((number) => number >= a && number <= b);
};

console.log(filterRange([5, 3, 8, 1], 1, 4));

/*
== Задание 3 с сайта ==
Фильтрация по диапазону "на месте"
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.

Например:

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]
*/

const filterRangeInPlace = (arr, a, b) => {
    arr.forEach((number, index) => {
        if (a <= number <= b) {
            arr.splice(index, 1);
        };
    });
};

let arr = [5, 3, 8, 1, 3, 2];
filterRangeInPlace(arr, 1, 4);
console.log(arr);

/*
== Задание 4 с сайта ==
Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

alert( arr ); // 8, 5, 2, 1, -10
*/

const sortDecrease = (arr) => {
    return arr.sort((a, b) => b - a);
};

console.log(sortDecrease([5, 2, 1, -10, 8]));

/*
== Задание 5 с сайта ==
Скопировать и отсортировать массив
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

const copySorted = (arr) => {
    return [...arr].sort();
};

let skills = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(skills);

console.log(skills);
console.log(sorted);

/*
== Задание 6 с сайта ==
Создать расширяемый калькулятор
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
Пример использования:
let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
Например, давайте добавим умножение *, деление / и возведение в степень **:
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
    };

    this.calculate = function (str) {
        let split = str.split(" ");
        let a = Number(split[0]);
        let operator = split[1];
        let b = Number(split[2]);

        if (!this.methods[operator] || isNaN(a) || isNaN(b)) return NaN;

        return (this.methods[operator](a, b)).toFixed(2)
    };

    this.addMethod = function(operator, func) {
        this.methods[operator] = func;
    };
};

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("-", (a, b) => a - b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate("1 + 2"));
console.log(powerCalc.calculate("15 + 23"));
console.log(powerCalc.calculate("15 - 23"));
console.log(powerCalc.calculate("15 ** 2"));
console.log(powerCalc.calculate("15 / 23"));


/*
== Задание 7 с сайта ==
Трансформировать в массив имён
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = // ... ваш код 

alert( names ); // Вася, Петя, Маша
*/

// Я сделал friend массив потому-что users используется в коде
let friends = [
    {
        name: "Вася",
        age: 25,
    }, 
    {
        name: "Маша",
        age: 19,
    },
    {
        name: "Катя",
        age: 22,
    },
    {
        name: "Петя",
        age: 35,
    },
];

let names = friends.map(({ name }) => name);

console.log(names);


/*
== Задание 1 от ChatGpt ==
🔁 forEach
Задание:
У тебя есть массив заказов интернет-магазина, каждый заказ — объект с полями id, user, total, delivered. Используя forEach, выведи сообщение о каждом заказе в формате:
Заказ #ID для USER на сумму TOTAL₽ — доставлен/в пути.
*/

const orders = [
    {
        id: 1,
        user: "Miryoqib",
        total: 2300,
        delivered: false,
    },
    {
        id: 2,
        user: "Nodir",
        total: 9500,
        delivered: false,
    },
    {
        id: 3,
        user: "Артём",
        total: 1500,
        delivered: false,
    },
    {
        id: 4,
        user: "Вова",
        total: 5500,
        delivered: false,
    },
]

orders.forEach((order) => {
    console.log(`Заказ 🪪  #${order.id} для ${order.user} на сумму: 💲${order.total} рублей - ${order.delivered ? "доставлен 🚚" : "в пути 📦"}`);
})


/*
== Задание 2 от ChatGpt ==
🧠 map
Задание:
Массив учеников школы, у каждого есть name и grades (массив оценок). С помощью map создай новый массив, где каждому ученику добавлен averageGrade.
*/

const students = [
    {
        name: "Miryoqib",
        grades: [5, 5, 5, 5, 4, 4, 5, 4, 5, 3],
    },
    {
        name: "Nodir",
        grades: [3, 3, 3, 3, 5, 3, 3, 5, 4],
    },
    {
        name: "Петя",
        grades: [2, 3, 4, 5, 5, 4, 3, 2, 3, 5],
    },
    {
        name: "Толик",
        grades: [5, 5, 5, 5, 4.5, 5, 3, 5],
    },
]

const studentsUpdated = students.map((student) => {
    return {
        name: student.name,
        grades: student.grades,
        averageGrade: Math.round(student.grades.reduce((accumulator, res) => { return res += accumulator }) / student.grades.length),
    }
});


/*
== Задание 3 от ChatGpt ==
📋 filter
Задание:
У тебя массив комментариев соцсети. У каждого комментария есть text и banned (boolean). Верни только комментарии, не помеченные как banned.
*/

const comments = [
    {
        text: "Я первый!",
        banned: false,
    },
    {
        text: "Да ты просто ***!",
        banned: true,
    },
    {
        text: "А когда новый видос?",
        banned: false,
    },
    {
        text: "Его номер: +7 777 77 77",
        banned: true,
    },
    {
        text: "Просто ***** контент",
        banned: true,
    },
]

const commentsFiltered = comments.filter((comment) => {
    return comment.banned === false;
})

console.log(commentsFiltered);

/*
== Задание 4 от ChatGpt ==
🔍 find
Задание:
Массив пользователей с loginAttempts. Найди первого, у кого loginAttempts > 5.
*/

const users = [
    {
        login: "Miryoqib",
        loginAttempts: 4,
    },
    {
        login: "Nodir",
        loginAttempts: 69,
    },
    {
        login: "Самир",
        loginAttempts: 1,
    },
    {
        login: "Ваня",
        loginAttempts: 2,
    },
    {
        login: "Игорь",
        loginAttempts: 6,
    },
];

const usersFind = users.find((user) => {
    return user.loginAttempts > 5;
});


/*
== Задание 5 от ChatGpt ==
🧱 reduce
Задание:
Массив покупок, каждая с price и quantity. Считай общую сумму всех покупок.
*/

const buys = [
    {
        price: 300,
        quantity: 4,
    },
    {
        price: 356,
        quantity: 6,
    },
    {
        price: 99.99,
        quantity: 2,
    },
    {
        price: 1200,
        quantity: 1,
    },
    {
        price: 55000,
        quantity: 1,
    },
]

let sum = buys.reduce((res, elem) => {
    return res += Math.round((elem.price * elem.quantity * 10) / 10);
}, 0)

console.log(`Сумма всех покупок: ${sum} рублей`);


/*
== Задание 6 от ChatGpt ==
🔄 reverse
Задание:
Разворачивай сообщения чата (массив объектов с message и timestamp) так, чтобы последние шли первыми.
*/

const messages = [
    {
        message: "Привет, как ты ?",
        timestamp: 1555000,
    },
    {
        message: "Привет!",
        timestamp: 1555005,
    },
    {
        message: "Нормально а ты как?",
        timestamp: 1555010,
    },
    {
        message: "Как ты?",
        timestamp: 15550015,
    },
    {
        message: "Гуд",
        timestamp: 1555025,
    },
];

console.log(messages.reverse());

/*
== Задание 6 от ChatGpt ==
🔢 sort
Задание:
Отсортируй массив заказов по сумме заказа (total), от большего к меньшему.
*/

orders.sort((a, b) => { a.total - b.total; });

console.log(orders);


/*
== Задание 7 от ChatGpt ==
📐 slice
Задание:
Покажи первые 5 постов блога из массива posts, не меняя оригинальный массив.
*/

const posts = [
    {
        title: "Изучаю Javascript!"
    },
    {
        title: "Помыл посуду!"
    },
    {
        title: "Пришёл со школы!"
    },
    {
        title: "Написал свой TodoApp!"
    },
    {
        title: "Изучаю NodeJs!"
    },
    {
        title: "Сделал коммит!"
    },
];

const fifthPosts = posts.slice(0, 5);
console.log(fifthPosts);

/*
== Задание 8 от ChatGpt ==
🧩 splice
Задание:
Удали все товары со скидкой меньше 10% из массива товаров, используй splice.
*/

const products = [
    {
        discount: 15,
    },
    {
        discount: 19,
    },
    {
        discount: 5,
    },
    {
        discount: 9,
    },
];

for (let i = products.length - 1; i >= 0; i--) {
    if (products[i].discount <= 10) {
        products.splice(i, 1);
    };
};

console.log(products);

/*
== Задание 9 от ChatGpt ==
➕ concat
Задание:
Объедини два массива пользователей из разных баз данных.
*/

const dbUsers1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

const dbUsers2 = [
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" }
];

const allUsers = dbUsers1.concat(dbUsers2);
console.log(allUsers);

/*
== Задание 10 от ChatGpt ==
🔎 includes
Задание:
Проверь, есть ли в массиве разрешённых ролей значение 'admin'.
*/

const allowedRoles = ['user', 'editor', 'admin'];

const hasAdmin = allowedRoles.includes('admin');
console.log(hasAdmin);


/*
== Задание 11 от ChatGpt ==
🧪 some и every
Задание:
some: Проверь, есть ли хотя бы один пользователь онлайн.
every: Все ли пользователи подтвердили email?
*/

const users2 = [
    { name: 'Alice', online: false, emailConfirmed: true },
    { name: 'Bob', online: true, emailConfirmed: true },
    { name: 'Charlie', online: false, emailConfirmed: true }
];

const isSomeoneOnline = users2.some(user => user.online);
console.log(isSomeoneOnline);

const allEmailsConfirmed = users2.every(user => user.emailConfirmed);
console.log(allEmailsConfirmed); 
