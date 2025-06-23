/*
== Задача 1 от chatGPT от chatGPT ==
Сделай объект range от 1 до 5, у которого реализован Symbol.asyncIterator.
Каждое значение возвращается с задержкой 1 секунду.

const range = {
    from: 1,
    to: 5,
  // ...
};

for await (let value of range) {
  console.log(value); // 1, 2, 3, 4, 5
}
*/

const range = {
    from: 1,
    to: 5,
    delay: 500,

    [Symbol.asyncIterator]() {
        return {
            current: this.from,
            last: this.to,
            delay: this.delay,
            async next() {
                await new Promise((resolve) => setTimeout(resolve, this.delay));

                if (this.current <= this.last) {
                    return {
                        done: false,
                        value: this.current++,
                    };
                } else {
                    return {
                        done: true,
                    };
                }
            },
        };
    },
};

async () => {
    for await (let value of range) {
        console.log(`Задача 1: ${value}`);
    }
};

/*
== Задача 2 от chatGPT от chatGPT ==
Создай async function* генератор, который возвращает буквы строки "JavaScript" по одной с задержкой 500ms.
*/

const logger = async function* () {
    const string = "JavaScript";
    const delay = 500;

    for (const char of string) {
        await new Promise((resolve) => setTimeout(resolve, delay));

        yield char;
    }
};

const genLogger = logger();
async () => {
    for await (const char of genLogger) {
        console.log(`Задача 2: ${char}`);
    }
};

/*
== Задача 3 от chatGPT ==
Сделай async function* countDown(from), который возвращает значения от from до 0 с шагом -1, каждое через 300ms.
*/

const countDown = async function* (from) {
    const delay = 300;

    for (let i = from; i > 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        yield i;
    }
};

async () => {
    const genCountDown = countDown(10);
    for await (const value of genCountDown) {
        console.log(`Задача 3: ${value}`);
    }
};
/*
== Задача 4 от chatGPT ==
Создай генератор async function* arrayAsyncIterator(arr), который поочерёдно возвращает элементы массива с задержкой 400ms.
*/

const arrayAsyncIterator = async function* (array) {
    const delay = 400;

    for (let i = array.length - 1; i >= 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        yield array[i];
    }
};

async () => {
    const genArrayAsyncIterator = arrayAsyncIterator([3, 3, 3, 4, 5, 6, 7, 8]);
    for await (const value of genArrayAsyncIterator) {
        console.log(`Задача 4: ${value}`);
    }
};

/*
== Задача 5 от chatGPT ==
Напиши async function getPokemonNames(ids), которая получает список id (например [1, 4, 7]) 
и поочерёдно делает fetch к PokeAPI, возвращая имена покемонов через async generator.
*/

const getPokemonNames = async function* (ids) {
    for (const pokemonId of ids) {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        );
        const data = await response.json();

        yield data.name;
    }
};

async () => {
    const genPokemonNames = getPokemonNames([59, 85, 388, 5, 7, 100, 500]);
    for await (const pokemon of genPokemonNames) {
        console.log(pokemon);
    }
};

/*
== Задача 6 от chatGPT ==
Сделай генератор async function* infiniteCounter(delay), который бесконечно увеличивает число с паузой delay (в мс). Останови его через break.
*/

const infiniteCounter = async function* (delay) {
    let count = 1;

    while (true) {
        await new Promise((resolve) => setTimeout(resolve, delay));

        yield count;
        count++;
    }
};

async () => {
    const genInfiniteCounter = infiniteCounter(5);

    for await (const value of genInfiniteCounter) {
        console.log(value);
        if (value > 55) {
            break;
        }
    }
};

/*
== Задача 7 от chatGPT ==
Сделай asyncIterableTimer(seconds), который возвращает асинхронный итератор. При итерации он выводит каждую секунду, начиная от seconds до 0.
*/

const asyncIterableTimer = async function* (seconds) {
    for (let i = seconds; i >= 0; i--) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        yield i;
    }
};

async () => {
    const genIterableTimer = asyncIterableTimer(5);
    for await (const second of genIterableTimer) {
        console.log(second);
    }
};

/*
== Задача 8 от chatGPT ==
Объединение генераторов:
Сделай два async function* генератора (один с числами, другой с буквами), а потом объединённый генератор через yield*.
*/

const asyncIterableNumbers = async function* (n) {
    for (let i = 0; i < n; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        yield i;
    }
};

const asyncIterableLetters = async function* (n) {
    const LETTERS_START = 97;
    for (let i = LETTERS_START; i < n + LETTERS_START; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        yield String.fromCharCode(i);
    }
};

const asyncIterable = async function* () {
    yield* asyncIterableNumbers(10);
    yield* asyncIterableLetters(10);
};

async () => {
    const genIterable = asyncIterable();

    for await (const value of genIterable) {
        console.log(value);
    }
};

/*
== Задача 9 от chatGPT ==
Напиши генератор, который возвращает строки из массива с ошибкой: если встретил "ERROR", кидает исключение throw.
*/

const asyncIterableChars = async function* (arr) {
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        try {
            if (char === "ERROR") {
                throw new Error("STUPID ERROR");
            } else {
                await new Promise((resolve) => setTimeout(resolve, 500));
                yield char;
            }
        } catch (error) {
            console.log(`error: ${error.message}`);
        }
    }
};

(async () => {
    const genIterable = asyncIterableChars([
        "JS",
        "CSS",
        "Python",
        "ERROR",
        "JAVA",
    ]);

    for await (const value of genIterable) {
        console.log(value);
    }
});

/*
== Задача 1 от chatGPT0 ==
Сделай асинхронный итератор, который берёт данные с API (например JSONPlaceholder), и поочерёдно возвращает title постов.
*/

const getPostTitles = async function* () {
    let startId = 1;

    while (true) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${startId}`);
            const data = await response.json();

            if (data.title) {
                yield data.title;
                startId += 1;
            } else {
                throw new Error("Can't find post");
            };
        } catch (error) {
            console.log(`Oops error: ${error.message}`);
            break;
        }
    };
};

(async () => {
    const genIterable = getPostTitles();
    for await (const title of genIterable) {
        console.log(title);
    };
});
