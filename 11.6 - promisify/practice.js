/*
== Задача 1 от ChatGPT ==
Создай функцию delay(ms), которая будет использовать setTimeout, но с promisify.

delay(1000).then(() => console.log('Прошла 1 секунда'));
*/

const delay = (ms, callback) => {
    setTimeout(() => callback(), ms);
};

const promisify = (f) => {
    return function (...args) {
        return new Promise((resolve, reject) => {
            f(...args, (res) => resolve(res));
        });
    };
};

const delayPromise = promisify(delay);

delayPromise(1000).then(() => console.log('Прошла 1 секунда'));

/*
== Задача 2 от ChatGPT ==
Сделай ручную версию promisify для setTimeout, не используя util.promisify.

function timeout(ms, callback) {
    setTimeout(() => callback(`Прошло ${ms} мс`), ms);
}

Преобразуй timeout в промис через свою promisify(fn).
*/

function timeout(ms, callback) {
    setTimeout(() => callback(`Прошло ${ms} мс`), ms);
}

const timeoutPromise = promisify(timeout);

timeoutPromise(2000).then(res => console.log(res));

/*
== Задача 3 от ChatGPT ==
Если у тебя есть Node.js:

const fs = require('fs');

function readFileCallback(path, callback) {
    fs.readFile(path, 'utf-8', callback);
}
Напиши promisify и используй его, чтобы прочитать файл и вывести содержимое.
*/

import { readFile } from 'fs';

const promisifyNode = (f) => {
    return function (...args) {
        return new Promise((resolve, reject) => {
            console.log(...args);

            f(...args, (error, result) => {
                if (error) reject(error);
                resolve(result)
            });
        });
    };
};

function readFileCallback(path, callback) {
    readFile(path, 'utf-8', callback);
}

const readFileCallbackPromise = promisifyNode(readFileCallback);

readFileCallbackPromise("./task-3.txt").then(res => console.log(res));

/*
== Задача 4 от ChatGPT ==
Есть функция:

function getUser(callback) {
    setTimeout(() => callback(null, { name: 'Miryoqib', age: 15 }), 500);
}
Используй свою promisify, чтобы получить результат через await.
*/

function getUser(callback) {
    setTimeout(() => callback(null, { name: 'Nodir', age: 15 }), 500);
}

const getUserPromise = promisifyNode(getUser);

(async () => {
    try {
        const user = await getUserPromise();
        if (user.name.toLowerCase() === "miryoqib") {
            console.log(`Данные получены, кстати у пользователя красивое имя )`);
        } else {
            console.log(`Данные об пользователе получены`);
        };
    } catch (error) {
        console.log(`Упс ошибка: ${error}`);
    }
})();

/*
== Задача 5 от ChatGPT ==
Добавь поддержку this в promisify, как это описано в статье.

const obj = {
    value: 42,
    method(callback) {
        callback(null, this.value);
    }
};

const promisified = promisify(obj.method.bind(obj));
Сделай, чтобы this не терялся.
*/

const promisifyContext = (f, context) => {
    return function (...args) {
        return new Promise((resolve, reject) => {
            f.call(context, ...args, (error, result) => {
                if (error) return reject(error);
                resolve(result);
            });
        });
    };
};

const obj = {
    value: 42,
    method(callback) {
        callback(null, this.value);
    }
};

const promisified = promisifyContext(obj.method, obj);

promisified().then(res => console.log(res));

/*
== Задача 6 от ChatGPT ==
Функция вызывает ошибку через callback(err):

function risky(callback) {
    setTimeout(() => callback(new Error("Что-то пошло не так")), 500);
}
Промисифицируй её и обработай ошибку через catch.
*/

const promisifyError = (f) => {
    return function (...args) {
        return new Promise((resolve, reject) => {
            f(...args, (err, res) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    };
};

function risky(callback) {
    setTimeout(() => callback(new Error("Stupid Error")), 500);
};

const riskyPromise = promisifyError(risky);
riskyPromise()
    .then(res => console.log(res))
    .catch(error => console.log(`Упс ошибка: ${error.message}`));

/*
== Задача 7 от ChatGPT ==
Промисифицируй API с двумя аргументами
Улучшенная promisify(fn) должна корректно работать с функцией, которая возвращает 2 результата:

function getCoords(callback) {
    callback(null, 51.505, -0.09);
}

Сделай, чтобы promisified() возвращал объект:
{ lat: 51.505, lng: -0.09 }
*/

function getCoords(callback) {
    callback(null, 51.505, -0.09);
}

const promisifyApi = (f) => {
    return function () {
        return new Promise((resolve, reject) => {
            f((err, lat, lng) => {
                if (err) reject(err);
                resolve({ lat: lat, lng: lng });
            });
        });
    };
};

const getCoordsPromise = promisifyApi(getCoords);
getCoordsPromise()
    .then(res => console.log(res));

/*
== Задача 9 от ChatGPT ==
Используй promisify внутри async/await
Промисифицируй функцию:

function sumAsync(a, b, callback) {
    setTimeout(() => callback(null, a + b), 300);
}
А затем используй await:

const result = await promisifiedSum(5, 7);
console.log(result); // 12
*/

const promisifyAsync = (f) => {
    return function (...args) {
        return new Promise((resolve, reject) => {
            f(...args, (err, res) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    };
};

function sumAsync(a, b, callback) {
    setTimeout(() => callback(null, a + b), 3000);
}

const promisifiedSum = promisifyAsync(sumAsync);

(async () => {
    const result = await promisifiedSum(5, 7);
    console.log(result);
})()

/* 
== Задача 10 от ChatGPT ==
Создай функцию promisify(fn), как в статье, и протестируй её на 3 разных функциях:

setTimeout

getUser(callback)

sumAsync(a, b, callback)
*/

const fullPromisify = (f) => {
    return function(...args) {
        return new Promise((resolve, reject) => {
            f(...args, (err, res) => {
                if (err) return reject(err);
                resolve(res);
            });
        });
    };
};

// Тест 1
const delayPromisified = fullPromisify(delay);
delayPromisified(1000).then(() => console.log("Прошла 1 секунда"));

// Тест 2
const getUserPromisified = fullPromisify(getUser);
getUserPromisified().then(res => console.log(res));

// Тест 3
const symAsyncPromisified = fullPromisify(sumAsync);
symAsyncPromisified(2, 2).then(res => console.log(res));