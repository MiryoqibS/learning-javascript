/*
== Задание 1 с сайта ==
Шаблонные строки
Что выведет этот скрипт?
let name = "Ilya";
alert( `hello ${1}` ); // ?
alert( `hello ${"name"}` ); // ?
alert( `hello ${name}` ); // ?
*/

let name = "Ilya";
alert(`hello ${1}`); // Выведет сообщение 'hello 1'
alert(`hello ${"name"}`) // Выведет сообщение hello "name"
alert(`hello ${name}`) // Выведет сообщение hello Ilya

// Хотел выполнить ещй задания от ChatGPT но он даёт слишком сложные задания 