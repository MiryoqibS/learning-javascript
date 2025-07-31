/*
== Задача 1 с сайта ==

Отсортируйте массив с буквой ё
Используя Intl.Collator, отсортируйте массив:

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// ... ваш код ...

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК

В этом примере порядок сортировки не должен зависеть от регистра.
Что касается буквы "ё", то мы следуем обычным правилам сортировки буквы ё, 
по которым «е» и «ё» считаются одной и той же буквой, за исключением случая, 
когда два слова отличаются только в позиции буквы «е» / «ё» – тогда слово с «е» ставится первым.
*/

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];
const collator = new Intl.Collator("ru", {
    sensitivity: "base",
});


animals = animals.sort((a, b) => {
    return collator.compare(a, b);
})
console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК


/*
== Задача 1 от ChatGPT ==
Используя Intl.Collator, отсортируй список слов с буквами «ё» и «е» так, чтобы:
Регистр не имел значения
«е» и «ё» считались одной буквой, но слово с «е» шло первым, если отличие только в этой букве

let words = ["ёлка", "ель", "ёжик", "енот", "Еда", "ёлочка", "еда"];

// 👉 Напиши сортировку здесь

console.log(words);
// Ожидаемый порядок: ["еда", "Еда", "ель", "енот", "ёлка", "ёлочка", "ёжик"]
*/

const collator2 = new Intl.Collator("ru", {
    sensitivity: "base",
    caseFirst: "false",
});

let words = ["ёлка", "ель", "ёжик", "енот", "Еда", "ёлочка", "еда"];

words.sort((a, b) => {
    const aNormal = a.replace(/ё/g, "е").toLowerCase();
    const bNormal = b.replace(/ё/g, "е").toLowerCase();

    const primaryCompare = collator.compare(aNormal, bNormal);

    // Если они не равны
    if (primaryCompare !== 0) return primaryCompare;

    const originalCompare = a.localeCompare(b, "ru", {
        sensitivity: "variant",
    });

    return originalCompare;
});

console.log(words);
// Ожидаемый порядок: ["еда", "Еда", "ель", "енот", "ёлка", "ёлочка", "ёжик"]

/*
== Задача 2 от ChatGPT ==
Выведи текущую дату в форматах:

🇷🇺 Русский: 31.07.2025
🇺🇸 Английский (США): 07/31/2025
🇨🇳 Китайский: 2025/07/31

const date = new Date(2025, 11, 31);

// 👉 Используй Intl.DateTimeFormat с нужными локалями

// Пример:
// const formatterRu = new Intl.DateTimeFormat("ru", { ... });
*/

const date = new Date();

const collateDate = (local, date, options = {}) => {
    const collator = new Intl.DateTimeFormat(local, options);

    return collator.format(date);
};

console.log(collateDate("ru", date));
console.log(collateDate("en-US", date));
console.log(collateDate("zh-CN", date));
