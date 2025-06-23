// Специальная функция для проверки функции генератора
const checkGenerator = (generator) => {
    while (true) {
        const next = generator.next();

        if (next.value) {
            console.log(next.value);
        } else {
            break;
        };
    };
}

/* 
== Задача 1 с сайта ==
Псевдослучайный генератор
Есть много областей, где нам нужны случайные данные.

Одной из них является тестирование. Нам могут понадобиться случайные данные: текст, числа и т.д., чтобы хорошо всё проверить.

В JavaScript мы можем использовать Math.random(). Но если что-то пойдёт не так, то нам нужно будет перезапустить тест, используя те же самые данные.

Для этого используются так называемые «сеяные псевдослучайные генераторы». Они получают «зерно», как первое значение, и затем генерируют следующее, используя формулу. Так что одно и то же зерно даёт одинаковую последовательность, и, следовательно, весь поток легко воспроизводим. Нам нужно только запомнить зерно, чтобы воспроизвести последовательность.

Пример такой формулы, которая генерирует более-менее равномерно распределённые значения:

next = previous * 16807 % 2147483647
Если мы используем 1 как зерно, то значения будут:

16807
282475249
1622650073
…и так далее…
Задачей является создать функцию-генератор pseudoRandom(seed), которая получает seed и создаёт генератор с указанной формулой.

Пример использования:

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073
*/

const pseudoRandom = function* (seed) {
    let number = seed;

    while (true) {
        const next = number * 16807 % 2147483647;
        number = next;      
        yield next;
    }
};

let generator = pseudoRandom(1);

console.log(generator.next().value); // 16807
console.log(generator.next().value); // 282475249
console.log(generator.next().value); // 1622650073

/*
== Задача 1 от chatGPT ==
Создай генератор function* counter(), который будет бесконечно увеличивать число на 1, начиная с 1.
Пример: gen.next().value → 1, 2, 3, ...
*/
console.log("");
console.log("Задача 1");

const counter = function* () {
    let count = 1;

    while (true) {
        yield count;
        count++
    };
};

const gen = counter();

for (let i = 0; i < 10; i++) {

    console.log(gen.next().value);
};

/*
== Задача 2 от chatGPT ==
Напиши генератор, который поочерёдно возвращает элементы массива.

const gen = arrayGenerator(['🔥', '⚡', '🌊']);
gen.next().value // "🔥"
*/

console.log("");
console.log("Задача 2");

const arrayGenerator = function* (array) {
    for (const elem of array) {
        yield elem;
    };
};

const gen2 = arrayGenerator(['🔥', '⚡', '🌊']);

console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);

/*

== Задача 3 от chatGPT ==
Сделай генератор fibonacci(), который будет выдавать последовательность чисел Фибоначчи.
Первые значения: 0, 1, 1, 2, 3, 5, 8, ...
*/

const fibonacci = function* () {
    let number1 = 0;
    let number2 = 1;

    while (true) {
        let fibonacciNumber = number1 + number2;
        yield fibonacciNumber;
        let tmp = number1
        number1 = fibonacciNumber;
        number2 = tmp;
    };
};

const genFibonacci = fibonacci();

for (let i = 0; i < 10; i++) {
    console.log(genFibonacci.next().value);
};

console.log("");
console.log("Задача 3");

/*
== Задача 4 от chatGPT ===
Сделай генератор range(from, to), который будет возвращать все числа от from до to включительно.
range(5, 8) → 5, 6, 7, 8
*/

console.log("");
console.log("Задача 4");

const range = function* (from, to) {
    for (let i = from; i <= to; i++) {
        yield i;
    };
};

const genRange = range(5, 8);
checkGenerator(genRange);


/*
== Задача 5 от chatGPT ==
Создай генератор, который возвращает по одной букве из строки "JavaScript".
*/

console.log("");
console.log("Задача 5");

const str = function* () {
    const string = "JavaScript";

    for (const char of string) {
        yield char;
    };
};

const genStr = str();
checkGenerator(genStr);

/*
== Задача 6 от chatGPT ==
Сделай генератор squareNumbers(n), который будет возвращать квадраты чисел от 1 до n.
*/

console.log("");
console.log("Задача 6");

const squareNumbers = function* (n) {
    for (let i = 1; i <= n; i++) {
        yield i ** 2;
    };
};

const genSquareNumber = squareNumbers(10);
checkGenerator(genSquareNumber);

/*
== Задача 7 от chatGPT ==
Сделай генератор-счётчик с возможностью сброса счёта через yield.

const gen = counterWithReset();
gen.next().value // 1
gen.next(true).value // сброс до 1
*/

console.log("");
console.log("Задача 7");

const counterWithReset = function* () {
    let counter = 1;

    while (true) {
        const reset = yield counter;

        if (reset) {
            counter = 1;
            yield counter;
        } else {
            counter++;
        };
    };
};

const genCounterWithReset = counterWithReset();
console.log(genCounterWithReset.next().value) // 1
console.log(genCounterWithReset.next().value) // 2
console.log(genCounterWithReset.next().value) // 3
console.log(genCounterWithReset.next(true).value) // сброс до 1
console.log(genCounterWithReset.next().value) // 1
console.log(genCounterWithReset.next().value) // 2

/*
== Задача 8 от chatGPT ==
Напиши генератор, который будет ждать данные через next() и складывать их:

const gen = sumGenerator();
gen.next(); // запускаем
gen.next(3); // 3
gen.next(5); // 8
gen.next(2); // 10
*/

console.log("");
console.log("Задача 8");

const sumGenerator = function* () {
    let sum = 0;

    while (true) {
        let increment = yield sum;

        if (increment) {
            sum += increment;
        };
    }
};

const genSumGenerator = sumGenerator();
console.log(genSumGenerator.next().value); // запускаем
console.log(genSumGenerator.next(3).value); // 3
console.log(genSumGenerator.next(5).value); // 8
console.log(genSumGenerator.next(2).value); // 10

/*
== Задача 9 от chatGPT ==
Сделай генератор, который будет возвращать элементы массива в обратном порядке.
*/

console.log("");
console.log("Задача 9");

const reverseArray = function* (array) {
    for (let i = array.length - 1; i >= 0; i--) {
        yield array[i];
    };
};

const genReverseArray = reverseArray([1, 2, 3, 4, 5, 6, 7]);
checkGenerator(genReverseArray);

/*
== Задача 1 от chatGPT0 ==
Сделай генератор objectEntries(obj), который будет поочерёдно возвращать пары [ключ, значение].

const obj = { name: "Pikachu", type: "Electric" };
for (let [key, value] of objectEntries(obj)) {
    console.log(key, value);
}
*/

console.log("");
console.log("Задача 10");

const objectEntries = function* (obj) {
    for (const key of Object.keys(obj)) {
        yield [key, obj[key]];
    };
};

const obj = { name: "Pikachu", type: "Electric" };

for (let [key, value] of objectEntries(obj)) {
    console.log(key, value);
};