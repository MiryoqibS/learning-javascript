/*
== Задание 1 с сайта ==
Создайте дату
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

Для вывода используйте alert.
*/

const date = new Date(2012, 1, 20, 3, 12);

// Использовал console.log вместо alert
console.log(date);

/*
== Задание 2 с сайта ==
Покажите день недели
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/

const getWeekDay = (date) => {
    let weekdays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return weekdays[date.getDay()];
};

let date2 = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getWeekDay(date2));        // нужно вывести "ВТ"

/*
== Задание 3 с сайта ==
День недели в европейской нумерации
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) 
и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2
*/

const getLocalDay = (date) => {
    return date.getDay() === 0 ? 7 : date.getDay();
};

// let date3 = new Date(2012, 0, 3);  // 3 января 2012 года
let date3 = new Date(2012, 0, 6);  // 3 января 2012 года
console.log(getWeekDay(date3));
console.log(getLocalDay(date3));


/*
== Задание 4 с сайта ==
Какой день месяца был много дней назад?
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

Функция должна надёжно работать при значении days=365 и больших значениях:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
P.S. Функция не должна изменять переданный ей объект date.
*/

const getDateAgo = (date, days) => {
    const copy = new Date(date);
    copy.setDate(date.getDate() - days);
    return copy.getDate();
};

let date4 = new Date(2015, 0, 2);

console.log(getDateAgo(date4, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date4, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date4, 365)); // 2, (2 Jan 2014)

/*
== Задание 5 с сайта ==
Последнее число месяца?
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

Параметры:

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

const getLastDayOfMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};


console.log(getLastDayOfMonth(2012, 1));

/*
== Задание 6 с сайта ==
Сколько сегодня прошло секунд?
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

const getSecondsToday = () => {
    const date = new Date();
    return `С начало дня прошло: ${date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()} секунд`;
};

console.log(getSecondsToday());

/*
== Задание 7 с сайта ==
Сколько секунд осталось до завтра?
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

const getSecondsToTomorrow = () => {
    const date = new Date();
    const tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    return `Кол. Секунд до завтра: ${Math.floor((tomorrow - date) / 1000)} секунд`;
};

console.log(getSecondsToTomorrow());

/*
== Задание 8 с сайта ==
Форматирование относительной даты
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/

const formatDate = (date) => {
    const dateNow = new Date();
    const diff = Math.floor(dateNow - date);
    

    if (diff < 1000) return "Прямо сейчас";
    if (diff / 1000 <= 60) return `${Math.floor(diff / 1000)} сек. назад`;
    if (diff / 1000 / 60 <= 60) return `${Math.floor(diff / 1000 / 60)} мин. назад`;

    const formattedDateDay = String(date.getDate()).padStart(2, "0");
    const formattedDateMonth = String(date.getMonth() + 1).padStart(2, "0");
    const formattedDateYear = date.getFullYear();
    const formattedDateHour = String(date.getHours()).padStart(2, "0");
    const formattedDateMinutes = String(date.getMinutes()).padStart(2, "0");
    return `${formattedDateDay}.${formattedDateMonth}.${formattedDateYear}, ${formattedDateHour}:${formattedDateMinutes}`;
};

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));