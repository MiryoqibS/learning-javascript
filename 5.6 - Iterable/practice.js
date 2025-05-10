/*
== Задание 1 от ChatGPT ==
**Создай объект `range`,** который перебирает числа от `from` до `to` (как в примере выше) — но:
пусть он пропускает чётные числа.
пример: `from: 1`, `to: 7` → выведет `1 3 5 7`.
*/

const range = {
    from: 1,
    to: 7,

    [Symbol.iterator]() {
        let start = this.from;
        let end = this.to;

        return {
            next() {
                // Пропускаем чётные числа 
                while (start <= end && start % 2 === 0) {
                    start++
                };
                if (start <= end) {
                    return {
                        done: false,
                        value: start++
                    }
                } else {
                    return {
                        done: true,
                    }
                }
            }
        };
    },
};

for (const element of range) {
    console.log(element);
}

/*
== Задание 2 от chatGpt ==
Сделай итератор для строки,** который:
- перебирает **только гласные буквы**.
- пример: `"Mirёkub"` → выведет: `i`, `ё`, `u`.
*/

// Гласные буквы русского и английского
const vowels = [
    'a', 'e', 'i', 'o', 'u', 'y',
    'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'
];

const strVowels = (str = "") => {
    return {
        [Symbol.iterator]() {
            let letters = Array.from(str);
            let counter = 0;

            return {
                next() {
                    while (counter < letters.length && !vowels.includes(letters[counter].toLowerCase())) {
                        counter++
                    };

                    if (counter < letters.length) {
                        return { done: false, value: letters[counter++] };
                    } else {
                        return { done: true };
                    };
                }
            }
        }
    }
}

for (const char of strVowels("Привет")) {
    console.log(char);
};

