/*
== Задача 1 от ChatGPT ==
Создай функцию sum(a)(b) которая возвращает их сумму.
*/

console.log("");
console.log("1 задача");

const sum = a => b => a + b;

console.log(sum(2)(4));

/*
== Задача 2 от ChatGPT ==
Создай функцию greet(language)(name):

greet("en")("Alice") → "Hello, Alice!"
greet("ru")("Мирёкуб") → "Привет, Мирёкуб!"
*/

console.log("");
console.log("2 задача");

const greet = (language) => {
    switch (language) {
        case "en":
            return (name) => {
                return `Hello, ${name}!`
            };
        case "ru":
            return (name) => {
                return `Привет, ${name}!`
            };
        default:
            return (name) => {
                return `Hello, ${name}!`
            };
    };
};


console.log(greet("en")("Alice"));
console.log(greet("ru")("Мирёкуб"));

/*
== Задача 3 от ChatGPT ==
Создай функцию multiply(a)(b) и создай double = multiply(2). Проверь работу.
*/

console.log("");
console.log("3 задача");

const multiply = a => b => a * b;
const double = multiply(2);

console.log(multiply(2)(5)); // 10
console.log(double(5)); // 10
console.log(double(7)); // 14

/*
== Задача 4 от ChatGPT == 
Каррирование функции из 3 аргументов
Сделай sum3(a)(b)(c) — возвращает сумму 3 чисел.
*/

console.log("");
console.log("4 задача");


const sum3 = a => b => c => a + b + c;
console.log(sum3(3)(3)(3)); // 9
console.log(sum3(1)(2)(3)); // 6

/*
== Задача 5 от ChatGPT ==
Реализуй функцию curry(f) которая работает с любыми функциями (см. пример выше).
*/

console.log("");
console.log("5 задача");

const curry = (func) => {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        };
    };

};

const power = (num, step) => num ** step;

const curriedPower = curry(power);

console.log(curriedPower(2)(3)); // 8

/*
== Задача 6 ==
Создай logger(date)(level)(message) → строка в формате:
[2025-07-09] [INFO]: Привет
*/

console.log("");
console.log("6 задача");

const logger = date => level => message => console.log(`[${date}] [${level}]: ${message}`);

const getDate = year => {
    return (month = null) => {
        if (month) {
            return (day = null) => {
                if (day) {
                    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                };

                return `${year}-${String(month).padStart(2, "0")}`;
            }
        } else {
            return year;
        };
    };
};

logger(getDate(new Date().getFullYear())(new Date().getMonth())(new Date().getDate()))("INFO")("Привет");

/*
== Задача 7 от ChatGPT ==
Создай greaterThan(a)(b) — возвращает true, если b > a.

const greaterThan10 = greaterThan(10);
greaterThan10(15); // true
*/

console.log("");
console.log("7 задача");

const greaterThan = a => b => b > a;

const greaterThan10 = greaterThan(10);
console.log(greaterThan10(15)); // true
console.log(greaterThan10(10)); // false
console.log(greaterThan10(5)); // false

/* 
== Задача 8 от ChatGPT ==
Создай универсальную функцию каррирования без if else
Проверь с функцией sum(a, b, c, 4)
*/

console.log("");
console.log("8 задача");

const curryFn = (fn) => {
    const curried = (...args) =>
        args.length >= fn.length
            ? fn(...args)
            : (...next) => curried(...args, ...next);
    return curried;
};

const sum4 = (a, b, c, d) => a + b + c + d;

const curriedSum4 = curryFn(sum4);

console.log(curriedSum4(1)(1)(1)(1)) // 4

/*
== Задача 9 от ChatGPT ==
Создай filterBy(predicate)(array). Пример:

const isEven = (n) => n % 2 === 0;
const filterEven = filterBy(isEven);

filterEven([1,2,3,4]); // [2, 4]
*/

console.log("");
console.log("9 задача");

const filterBy = predicate => {
    return array => {
        return array.filter(predicate);
    }
};

const isEven = (n) => n % 2 === 0;
const filterEven = filterBy(isEven);

console.log(filterEven([1,2,3,4])); // [2, 4]

/*
== Задача 10 от ChatGPT ==
Создай calc(a)(op)(b):

calc(5)("+")(3) // 8
calc(10)("*")(2) // 20
calc(6)("/")("0") // Error: деление на ноль
*/

console.log("");
console.log("10 задача");

const calc = a => op => b => {
    try {
        if (Number(b) === 0) {
            throw new Error("деление на ноль");
        };

        const result = eval(`${a}${op}${b}`);
        return result;
    } catch (error) {
        console.log(`Error: ${error.message}`);
    };
}

console.log(calc(5)("+")(3)) // 8
console.log(calc(10)("*")(2)) // 20
console.log(calc("test")("*")(2)) // test is not defined Так как мы преобразуем строку в код и у нас нету переменной test
calc(6)("/")("0") // Error: деление на ноль