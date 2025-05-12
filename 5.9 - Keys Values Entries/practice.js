/*
== Задание 1 с сайта ==
Сумма свойств объекта
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (salaries) => {
    let sum = 0;
    for (const salary of Object.values(salaries)) {
        sum += salary;
    };
    return sum;
};

// 2 вариант с помощью методов массива
// const sumSalaries = (salaries) => {
//     return Object.values(salaries).reduce((salary, sum)=>{
//         return sum += salary;
//     }, 0);
// };

console.log(sumSalaries(salaries));


/* 
== Задание 2 с сайта ==
Подсчёт количества свойств объекта
Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
    name: 'John',
    age: 30
};

alert( count(user) ); // 2
Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/

const count = (obj) => {
    return Object.keys(obj).length;
};


let user = {
    name: 'John',
    age: 30,
};

console.log(count(user));
