/*
== Задача 1 с сайта ==
Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);
*/

new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// Нет
// new Promise создаёт новый промис и обрабатывает ошибки только внутри своего тела 
// А ошибка происходит setTimeout, это макро задача и она выполниться все тела Promise
