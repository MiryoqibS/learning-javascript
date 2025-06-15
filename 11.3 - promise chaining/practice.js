/*
== Задача 1 с сайта ==
Промисы: сравните then и catch
Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?

promise.then(f1).catch(f2);
Против:
promise.then(f1, f2);
*/

const promise = new Promise((resolve, reject)=>{
    return resolve();
});

promise.then(f1).catch(f2);
promise.then(f1, f2);
// Нет они разные 1 случай идёт по цепочке и обрабатывает ошибку в f1

/*
== Задача 2 от ChatGPT ==
Попробуй угадать, в каком порядке числа выведутся в консоль:

new Promise(resolve => resolve())
.then(() => {
console.log(1);
return new Promise(resolve => resolve());
})
.then(() => console.log(2));

new Promise(resolve => resolve())
.then(() => console.log(3))
.then(() => console.log(4))
.then(() => console.log(5));
*/

new Promise((resolve) => resolve())
    .then(() => {
        console.log(1);
        return new Promise((resolve) => resolve());
    })
    .then(() => console.log(2));


new Promise((resolve) => resolve())
    .then(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5));
// 1 3 4 5 2