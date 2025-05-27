/*
== Задание 1 c сайта == 
Изменяем "prototype"
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // True

=1=
Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats ); // True

=2=
…А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // False

=3=
Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete rabbit.eats;

alert( rabbit.eats ); // True

=4=
Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined
*/

// 1 Случай выведет True
// 2 Случай выведет False
// 3 Случай выведет True
// 3 Случай выведет Undefined

/*
== Задание 2 с сайта ==
Создайте новый объект с помощью уже существующего
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы 
не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно 
сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.
*/

function createObj(name, job) {
    return {
        name: name,
        job: job,
    };
};

const obj = new createObj("Miryoqib", "Frontend");

let obj2 = new obj.constructor();

console.log(obj2);




