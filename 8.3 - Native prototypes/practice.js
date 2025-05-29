/*
== Задание 1 с сайта ==
Добавить функциям метод "f.defer(ms)"
Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

После этого должен работать такой код:

function f() {
    alert("Hello!");
}

f.defer(1000); // выведет "Hello!" через 1 секунду
*/

function f() {
    console.log("Hello!");
}

Function.prototype.defer = function(delay) {
    setTimeout(this, delay);
}

f.defer(1000); // выведет "Hello!" через 1 секунду

/*
== Задание 2 с сайта ==
Добавьте функциям декорирующий метод "defer()"
Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

Например, должно работать так:

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.
*/


function f2(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function(delay) {
    const ctx = this;
    return function(...args) {
        setTimeout(ctx.bind(null, ...args), delay)
    }
}

f2.defer(1000)(1, 2); // выведет 3 через 1 секунду.
