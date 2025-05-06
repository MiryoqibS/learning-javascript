/*
== Задание 1 с сайта ==
Сделать первый символ заглавным
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
*/

const ucFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

console.log(ucFirst("васЯ"));


/*
== Задание 2 с сайта ==
Проверка на спам
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

const checkSpam = (str) => {
    if (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")) return true;
    return false;
};

console.log(checkSpam("Buy ViaGra now"));
console.log(checkSpam("free xxxxx site"));
console.log(checkSpam("innocent rabbit"));

/*
== Задание 3 с сайта ==
Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

Например:
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
truncate("Всем привет!", 20) = "Всем привет!"
*/


const truncate = (str, maxlength) => {
    if (str.length > maxlength) return (str.slice(0, maxlength-1) + "...");
    return str;
};

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

/*
== Задание 4 с сайта ==
Выделить число
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

Например:
alert( extractCurrencyValue('$120') === 120 ); // true
*/

const extractCurrencyValue = (str) => {
    return Number(str.slice(1));
};

console.log(extractCurrencyValue('$120'));