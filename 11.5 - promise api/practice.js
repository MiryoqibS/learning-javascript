/*
== Задача 1 от ChatGPT ==
Напиши функцию loadAll(promises), которая принимает массив промисов и возвращает результат всех из них через Promise.all.

// Пример:
loadAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
]).then(console.log); // [1, 2, 3]
*/

const loadAll = (promises) => {
    return Promise.all(promises);
};

loadAll([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
]).then(console.log); // [1, 2, 3]

/*
== Задача 2 от ChatGPT == 
Проверь, что Promise.all отклоняется, если хотя бы один промис отклонён. Создай 3 промиса: два успешных и один с reject.
*/

Promise.all([
    Promise.resolve(1),
    Promise.reject(new Error("Some error")),
    Promise.resolve(1),
]).then(console.log)
    .catch(error => console.log(`ошибка: ${error.message}`));

/*
== Задача 3 от ChatGPT ==
Напиши функцию, которая принимает массив URL и выводит для каждого: успех или ошибка, не останавливаясь при сбоях.

[
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
    fetch("https://jsonplaceholder.typicode.com/invalid-url")
]
Используй .status и .reason из Promise.allSettled.
*/

const fetchPosts = (promises) => {
    return Promise.allSettled(promises).then(results => {
        results.forEach(post => {
            if (post.status === "rejected") {
                console.log("Ошибка");
            } else {
                console.log("Успешно");
            };
        });
    });
};

fetchPosts(
    [
        fetch("https://jsonplaceholder.typicode.com/posts/1"),
        fetch("https://jsonplaceholder.invalid.com/invalid-url")
    ]
);

/*
== Задача 4 от ChatGPT ==
Сделай 4 setTimeout промиса, один из которых быстрее. Используй Promise.race, чтобы определить, кто "победит".
*/

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve("1 место"), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve("2 место"), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve("3 место"), 3000)),
    new Promise((resolve, reject) => setTimeout(() => reject("упс ошибка!"), 4000)),
]).then(console.log);

/*
== Задача 5 от ChatGPT ==
Сделай 3 промиса, 2 из которых reject, 1 resolve. Используй Promise.any — проверь, что сработает только успешный.
*/

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject("Опять ошибка!"), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject("Да сколько можно!"), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve("Наконец-то"), 3000)),
]).then(console.log);

/*
== Задача 6 от ChatGPT ==
Сделай функцию wait(ms), которая возвращает промис, переходящий в resolve через ms миллисекунд.

wait(1000).then(() => console.log("Прошла 1 секунда"));
*/

const wait = (ms) => {
    return new Promise((resolve, reject) => setTimeout(() => resolve("Прошло время"), ms));
};

wait(1000).then(() => console.log("Прошла 1 секунда"));

/*
== Задача 7 от ChatGPT ==
Создай fetch(url) и оберни в Promise.race с wait(3000) — если fetch не успеет за 3 сек, вызывай ошибку "Время вышло".
*/

// Функция wait не подходить для этой задачи поэтому сделаем другую функцию
const timeout = (ms) => {
    return new Promise((_, reject) => setTimeout(() => reject(new Error("Время вышло")), ms));
};

// Использовал setTimeout потому-что не смог найти подходящее Api
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve("Значение"), 2000)),
    timeout(3000),
]).then(console.log).catch(console.log);

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve("Значение 2"), 4000)),
    timeout(3000),
]).then(console.log).catch(() => console.log("Время вышло"));


/*
== Задача 8 ==
Сделай функцию retry(fn, count), которая повторяет вызов fn, пока не получится, максимум count раз.
*/

const retry = (fn, count) => {
    return new Promise((resolve, reject)=>{
        const attempt = () => {
            fn()
            .then(resolve)
            .catch(error => {
                if (count === 1) {
                    reject(error);
                } else {
                    count--;
                    attempt();
                }
            });
        };

        attempt();
    });
};

let tries = 0;

// Пример использования
retry(() => {
    return new Promise((resolve, reject) => {
        if (tries < 1) {
            tries++;
        };

        if (tries === 4) {
            resolve("Успешно 8 задача");
        } else {
            reject("ОШИБКА!");
        };
    });
}, 3)
    .then(console.log)
    .catch(error => console.log(`Ошибочка: ${error}`));