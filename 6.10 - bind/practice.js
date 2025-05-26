/*
== Задание 1 с сайта ==
Связанная функция как метод
Что выведет функция?

function f() {
  alert( this ); // ?
}

let user = {
    g: f.bind(null) 
};

user.g();
*/


function f() {
  alert( this ); // null так как мы привязали функцию к null
}

let user = {
    g: f.bind(null) 
};

// user.g();

/*
== Задание 2 с сайта ==
Повторный bind
Можем ли мы изменить this дополнительным связыванием?

Что выведет этот код?

function f() {
    alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();
*/


function f() {
    console.log(this.name);
};

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f(); // Вася

/*
== Задание 3 с сайта ==
Свойство функции после bind
В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.

function sayHi() {
    alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

alert( bound.test ); // что выведет? почему?
*/


function sayHi() {
    alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

alert( bound.test ); // undefined так как мы привязываем контекст в другому объекту

/*
== Задание 4 с сайта ==
Исправьте функцию, теряющую "this"
Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

Однако, его вызов приводит к ошибке. Почему?

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk, user.loginFail);
*/

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user2 = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user2.loginOk.bind(user2), user2.loginFail.bind(user2));

/*
== Задание 5 с сайта ==
Использование частично применённой функции для логина
Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".

Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

askPassword(?, ?); // ?
*/

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user3 = {
    name: 'John',

    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

askPassword(user3.login.bind(user3, true), user3.login.bind(user3, false)); 