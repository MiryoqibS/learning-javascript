/*
== Задание 1 с сайта ==
Установка и уменьшение значения счётчика
Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
*/

const makeCounter = () => {
    let count = 0;

    function counter() {
        return count++;
    }

    // Set метод
    counter.set = (value) => count = value; 

    // Decrease метод
    counter.decrease = () => count--;

    return counter;
};

let counter = makeCounter();

counter.set(150);
counter.decrease();

console.log(counter());

/*
== Задание 2 с сайта ==
Сумма с произвольным количеством скобок
Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/

const sum = (a) => {
    let result = a;

    const increment = (b) => {
        result += b;

        return increment;
    };

    increment[Symbol.toPrimitive] = function () {
        return result;
    };

    return increment;
};

console.log(+sum(1)(2));
console.log(+sum(1)(2)(3));

/*
== Задание 1 от ChatGPT ==
Кастомный метод reduce
Напиши свою реализацию arrayReduce(arr, callback, initialValue) — функцию, которая работает так же, как встроенный reduce, но реализована с нуля.
Цель: понять, как работают методы массивов и улучшить логику обработки данных.
*/

const arrayReduce = (arr = [], callback, initialValue = 0) => {
    let accumulator = initialValue;

    for (let i = 0; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    };

    return accumulator;
};

console.log(arrayReduce([1,2,3,4,5], (accumulator, result) => {
    return accumulator - result;
}, 0));

console.log(arrayReduce([1,2,3,4,5], (accumulator, result) => {
    return accumulator + result;
}, 0));

console.log(arrayReduce([1,2,3,4,5], (accumulator, result) => {
    return accumulator * result;
}, 1));

console.log(arrayReduce(["a", "v", "a"], (accumulator, result) => {
    return accumulator.concat(result);
}, "J"));