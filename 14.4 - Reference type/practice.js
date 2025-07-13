"use strict"

/* 
== Задача 1 с сайта ==
Проверка синтаксиса
Каким будет результат выполнения этого кода?

let user = {
    name: "John",
    go: function() { alert(this.name) }
}

(user.go)()
P.S. Здесь есть подвох :)
*/

let user = {
    name: "John",
    go: function () { 
        console.log(this.name) 
    }
};

(user.go)()

// Пропущена точка с запятой 
// Javascript автоматически не ставить точку запятой перед (user.go)() 
// Поэтому во время чтения движок видит это как
// let user = { name: "John" , go: function() {console.log(this.name)}}(user.go)()
// А это синтаксическая ошибка

/*
== Задача 2 с сайта == 
Объясните значение "this"
В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
    go: function() { alert(this); }
};

obj.go();               // (1) [object Object]
(obj.go)();             // (2) [object Object]
(method = obj.go)();    // (3) undefined
(obj.go || obj.stop)(); // (4) undefined
*/

let obj, method;

obj = {
    go: function() { alert(this); }
};

obj.go();               // (1) [object Object]
(obj.go)();             // (2) [object Object]
(method = obj.go)();    // (3) undefined
(obj.go || obj.stop)(); // (4) undefined

// (1) работает правильно и javascript выводить объект виде строки [object Object]
// (2) точно также работает как и в (1) случае
// (3) переменной method присваиваем метод obj.go() но отрывая её от объекта из-за этого this=undefined
// (4) здесь мы получаем obj.go но тут точно такой-же случай как в (3) метод отрывается от объекта