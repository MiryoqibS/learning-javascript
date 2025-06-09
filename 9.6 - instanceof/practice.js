/*
Странный instanceof
Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
*/

function A() { }
function B() { }

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // true
// Так как prototype A и prototype B ссылаются на 1 объект