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
