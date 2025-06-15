/*
== Задача 1 с сайта ==
Можно ли "перевыполнить" промис?
Что выведет код ниже?

let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(alert);
*/

let promise = new Promise(function (resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(alert); // "1" - свойство value можно изменить только 1 раз

/*
== Задача 2 с сайта ==
Задержка на промисах
Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

function delay(ms) {
  // ваш код
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
*/

function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(), ms);
    });
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));

/*
== Задача 3 с сайта ==
Анимация круга с помощью промиса
Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.

Новое использование:
showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});
Возьмите решение из Анимация круга с помощью колбэка в качестве основы.
*/

function showCircle(x, y, radius) {
    const circle = document.createElement("div");
    circle.style.transition = "all .5s ease";
    circle.className = "circle";
    circle.style.position = "absolute";
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.width = "0px";
    circle.style.height = "0px";
    circle.style.borderRadius = "50%";
    // Чисто от себя для того что-бы увидеть круг
    circle.style.backgroundColor = "red";
    document.body.appendChild(circle);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            circle.style.width = circle.style.height = `${radius * 2}px`;
            circle.addEventListener("transitionend", () => resolve(circle), {once: true});
        }, 0);
    });
};

showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
});