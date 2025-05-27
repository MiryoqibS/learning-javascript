/*
== Задание 1 с сайта ==
Работа с прототипами
В приведённом ниже коде создаются и изменяются два объекта.

Какие значения показываются в процессе выполнения кода?

let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

alert( rabbit.jumps ); // ? (1)
delete rabbit.jumps;
alert( rabbit.jumps ); // ? (2)
delete animal.jumps;
alert( rabbit.jumps ); // ? (3)
*/

let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // true -Берётся из окружения rabbit
delete rabbit.jumps;
console.log(rabbit.jumps); // null -Берётся из окружения animal
delete animal.jumps;
console.log(rabbit.jumps); // undefined -Так как не может найти возвращается undefined

/*
== Задание 2 с сайта ==
Алгоритм поиска
Задача состоит из двух частей.

У нас есть объекты:

let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся
по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать
значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head). Ответьте на
вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? 
При необходимости составьте цепочки поиска и сравните их.
*/

let head = {
    glasses: 1,
};

let table = {
    __proto__: head,
    pen: 3,
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2,
};

let pockets = {
    __proto__: bed,
    money: 2000,
};

console.log(pockets.pen);
console.log(bed.glasses);
// Быстрее получить через потому-что glasses берётся сразу с окружения head
console.log(head.glasses);
// А вот pocket должен пройтись по нескольким __proto__ что-бы дойти до head
console.log(pockets.glasses);

/*
== Задание 3 с сайта ==
Куда будет произведена запись?
Объект rabbit наследует от объекта animal.

Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();
*/

let animal2 = {
    eat() {
        this.full = true;
    }
};

let rabbit2 = {
    __proto__: animal2,
};

// свойство full получить rabbit2 так как this ссылается на rabbit2
rabbit2.eat();

/*
== Задание 4 с сайта ==
Почему наедаются оба хомяка?
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple
*/

let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],

    __proto__: hamster
};

let lazy = {
    stomach: [],

    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log(lazy.stomach); // apple

// Дело в том что и speedy и lazy хомяки имеют 2 живот они оба ссылаются на stomach
// hamster но если мы зададим им в их окружении stomach то они будут иметь свои животы😅

/*
== Задание 1 от ChatGPT ==
что выведется в консоли?
*/

console.log((10).__proto__ === Number.prototype); // True

/*
== Задание 2 от ChatGPT ==
что выведется в консоли?
*/

const n = 99999n
console.log(n.__proto__ === BigInt.prototype); // True

/*
== Задание 3 от ChatGPT ==
что выведется в консоли?
*/

const t = true;
console.log(t.__proto__ === Boolean.prototype); // True

/*
== Задание 4 от ChatGPT ==
что выведется в консоли?
*/

const o = { name: "Alex", age: 22 };
console.log(o.__proto__.__proto__ === undefined); // False - будет Null

/*
== Задание 5 от ChatGPT ==
что выведется в консоли?
*/

const s = Symbol('A');
console.log(s.prototype === Symbol.prototype); // False

/*
== Задание 6 от ChatGPT ==
что выведется в консоли?
*/

function foo() { };
class Person { };
console.log(foo.__proto__ === Person.__proto__); // True

/*
== Задание 7 от ChatGPT ==
что выведется в консоли?
*/

console.log(foo.__proto__.__proto__ === Object.prototype); // True

/*
== Задание 8 от ChatGPT ==
что выведется в консоли?
*/

const bar = () => { };
console.log(bar.prototype === foo.prototype); // False

