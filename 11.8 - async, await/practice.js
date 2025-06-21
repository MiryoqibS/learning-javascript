/*
== Задача 1 с сайта ==
Перепишите, используя async/await
Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

function loadJson(url) {
    return fetch(url)
        .then(response => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
        })
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404
*/

const loadJson = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        // Можно было с помощью throw но я считаю так лучше
        console.log(`Произошла ошибка: ${error.message}`);
    };
};

loadJson('no-such-user.json') // (3)
    .catch(console.log); // Error: 404

/*
== Задача 2 с сайта ==
Перепишите, используя async/await
Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.

В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) {
    return fetch(url)
        .then(response => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw new HttpError(response);
        }
        })
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
    let name = prompt("Введите логин?", "iliakan");

    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
        alert(`Полное имя: ${user.name}.`);
        return user;
        })
        .catch(err => {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            return demoGithubUser();
        } else {
            throw err;
        }
        });
}

demoGithubUser();
*/

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

const loadJson2 = async (url) => {
    const response = await fetch(url);

    if (response.status === 200) {
        const data = await response.json();
        return data;
    };

};

// Запрашивать логин, пока github не вернёт существующего пользователя.
// Я немного от себя добавил
const demoGithubUser = async () => {
    while (true) {
        const profile = document.querySelector("#profile");

        let name = prompt("Введите ваш логин: ", "");
        const user = await loadJson2(`https://api.github.com/users/${name}`);

        try {
            const profileAvatar = document.createElement("img");
            profileAvatar.className = "profile__avatar";
            profileAvatar.src = user.avatar_url;

            const profileName = document.createElement("h3");
            profileName.className = "profile__name";
            profileName.innerText = user.name;

            const profileLocation = document.createElement("p");
            profileLocation.className = "profile__location";
            profileLocation.innerText = user.location;

            profile.appendChild(profileAvatar);
            profile.appendChild(profileName);
            profile.appendChild(profileLocation);
            
            break;
        } catch (error) {
            if (error instanceof HttpError && error.response.status === 404) {
                alert("Такого пользователя нет, попробуй ещё раз.");
            } else {
                throw error;
            };
        };
    };
}

/*
== Задача 3 с сайта ==
Вызовите async–функцию из "обычной"
Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}
P.S. Технически задача очень простая, но этот вопрос часто задают разработчики, недавно познакомившиеся с async/await.
*/

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    wait().then(res => console.log(res))
}

f();