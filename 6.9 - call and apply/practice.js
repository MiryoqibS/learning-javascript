/*
== Задание 1 с сайта ==
Декоратор-шпион
Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например:

function work(a, b) {
  alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.
*/

function work(a, b) {
    console.log(a + b); // произвольная функция или метод
};

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];
    return wrapper;
}

work = spy(work);

/*
== Задание 2 с сайта ==
Задерживающий декоратор
Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:

function f(x) {
    alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.
*/

const delay = (func, ms) => {
    return function (...args) {
        setTimeout(() => func.apply(this, args), ms);
    };
};

function f(x) {
    console.log(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

/*
== Задание 3 с сайта ==
Создай декоратор, который откладывает вызов функции f до тех пор, пока не пройдёт ms миллисекунд с последнего вызова.
Если функцию вызывают много раз подряд — она не запускается сразу.
Она запускается один раз, после паузы, с последними переданными аргументами.

f("a");                  // игнор
setTimeout(() => f("b"), 200);  // игнор
setTimeout(() => f("c"), 500);  // выполнится только этот — через 1000 мс после последнего вызова
Применение:
Часто используется, чтобы не вызывать обработчик слишком часто — например, при вводе текста, перемещении мыши и т.п.
*/

const debounce = (func, delay) => {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

let f2 = (x) => console.log(x);
let debouncedF = debounce(f2, 1000);

debouncedF("a");
setTimeout(() => debouncedF("b"), 200);
setTimeout(() => debouncedF("c"), 500);

/*
== Задание 4 с сайта ==
Создать декоратор throttle(f, ms), который ограничивает частоту вызовов функции f. Обёртка вызывает f не чаще одного раза за ms миллисекунд.

Отличие от debounce:

debounce запускает функцию один раз после периода бездействия.
throttle запускает функцию регулярно, но не чаще, чем заданный интервал.

function f(a) {
    console.log(a);
}

// Создаём декорированную функцию, вызывающую f не чаще, чем раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // выводит 1 сразу
f1000(2); // игнорируется, т.к. 1000 мс ещё не прошло
f1000(3); // игнорируется

// После 1000 мс:
// вызывается f(3) с последними аргументами
*/
const throttle = (func, ms) => {
    let isThrottled = false;
    let savedArgs = null;
    let savedThis = null;

    function wrapper(...args) {
        if (isThrottled) {
            // сохраняем последние аргументы и контекст
            savedArgs = args;
            savedThis = this;
            return;
        }

        func.apply(this, args);

        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;

            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = null;
                savedThis = null;
            }
        }, ms);
    }

    return wrapper;
};

function f(a) {
    console.log(a);
}

// Создаём декорированную функцию, вызывающую f не чаще, чем раз в 1000 мс
let f1550 = throttle(f, 1550);

f1550(1); // выводит 1 сразу
f1550(2); // игнорируется, т.к. 1000 мс ещё не прошло
f1550(3); // игнорируется


/*
== Задание 1 от ChatGPT
Создай декоратор uniqueArgs(func), который сохраняет только уникальные наборы аргументов, с которыми вызывали функцию.

Он должен хранить их в массиве calls, как и в прошлом задании, но не добавлять повторные вызовы с теми же аргументами (в том же порядке).

const decorated = uniqueArgs(anyFunction);
decorated(1, 2);      // добавляется
decorated(3, 4);      // добавляется
decorated(1, 2);      // не добавляется
decorated(2, 1);      // добавляется, т.к. порядок другой

Вызовы сохраняются в decorated.calls
Там только уникальные по значению и порядку аргументы
Аргументы должны храниться в виде массива [a, b, ...]
*/

const anyFunction = () => {
    return 1;
};

const uniqueArgs = (func) => {
    function wrapper(...args) {
        for (const call of wrapper.calls) {
            if (String(call) == String(args)) {
                return call;
            };
        };

        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];
    return wrapper;
};

const decorated = uniqueArgs(anyFunction);