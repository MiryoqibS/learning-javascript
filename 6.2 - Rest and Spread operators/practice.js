/*
== Задание 1 от ChatGPT
Сделай функцию multiplyAll(...args), которая перемножает все аргументы:

multiplyAll(2, 3, 4); // 24
multiplyAll(5); // 5
multiplyAll(); // 1
*/

const multiplyAll = (...args) => {
    return args.reduce((accumulator, result)=>{
        return result *= accumulator;
    }, 1);
};

console.log(multiplyAll(2, 3, 4)); // 24
console.log(multiplyAll(5)); // 5
console.log(multiplyAll()); // 1

/*
== Задание 2 от ChatGPT
Объединить несколько массивов в один с помощью ...:

let a = [1, 2], b = [3, 4], c = [5, 6];
// -> [1, 2, 3, 4, 5, 6]
*/
let a = [1, 2], 
    b = [3, 4], 
    c = [5, 6];

let unionArrays = [...a, ...b, ...c];

console.log(unionArrays);


/* 
== Задание 3 от ChatGPT
Сделай функцию logNames(firstName, lastName, ...titles), которая будет логировать имя, фамилию и список званий.
*/

const logNames = (firstName, lastName, ...titles) => {
    console.log(`Здравствуйте ${firstName} ${lastName}`);

    for (const rank of titles) {
        console.log(`Не знал что вы ${rank}`);
    };
};

logNames("Мирёкуб", "Собиров", "Программист", "Тхэквондист");

/*
== Задание 4 от ChatGPT
Напиши функцию getMaxValue(...nums), которая вернёт максимальное значение из произвольного количества чисел.
*/

const getMaxValue = (nums) => {
    return Math.max(...nums);
};

console.log(getMaxValue([5, 2, 6, 15, 12, 95, 72, 35, 98, 93]));


/*
== Задание 5 от ChatGPT
Напиши функцию cloneAndEdit(obj), которая делает копию объекта и меняет значение одного ключа.

const user = { name: "John", age: 30 };
const updated = cloneAndEdit(user, "age", 31);
// { name: "John", age: 31 }
*/

const cloneAndEdit = (obj, searchKey, newValue) => {
    const newObj = {...obj};

    for (const key in newObj) {
        
        if (key == searchKey) {
            newObj[key] = newValue;
        };
    };

    return newObj;
};

const user = { name: "John", age: 30 };
const updated = cloneAndEdit(user, "age", 31);
console.log(updated);
