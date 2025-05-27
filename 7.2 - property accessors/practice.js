/*
== Задание 1 от ChatGPT == 
Создай объект user, у которого есть свойство fullName, собираемое из name и surname

const user = {
    name: "John",
    surname: "Smith",
    // fullName?
};

console.log(user.fullName); // "John Smith"
*/

const user = {
    name: "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
};

console.log(user.fullName); // "John Smith"


/*
== Задание 2 от ChatGPT ==
Добавь возможность менять fullName (устанавливая новое имя и фамилию через set)

user.fullName = "Alice Cooper";
console.log(user.name); // "Alice"
console.log(user.surname); // "Cooper"
*/

user.fullName = "Alice Cooper";
console.log(user.name); // "Alice"
console.log(user.surname); // "Cooper"

/*
== Задание 3 от ChatGPT ==
Сделай объект product с геттером info, который возвращает ${title} - ${price}₽

const product = {
    title: "Хлеб",
    price: 50,
    // info?
};

console.log(product.info); // "Хлеб - 50₽"
*/

const product = {
    title: "Хлеб",
    priceValue: 50,

    get info() {
        return `${this.title} - ${this.priceValue}₽`;
    },
};

console.log(product.info); // "Хлеб - 50₽"

/*
== Задание 4 от ChatGPT ==
Добавь сеттер price, который не позволит установить цену ниже 0

product.price = -100; 
console.log(product.price); // всё ещё 50
*/

Object.defineProperty(product, "price", {
    get() {
        return this.priceValue;
    },

    set(price) {
        if (price > 0) {
            this.priceValue = price;
        };
    },
})

product.price = -100;
console.log(product.price); // всё ещё 50

/*
== Задание 5 от ChatGPT ==
Сделай password объект с приватным полем _password и геттером, который всегда возвращает "****"

const password = {
    _password: "123456",
    get value() { ... },
};

console.log(password.value); // "****"
*/

const password = {
    _password: "123456",

    get value() {
        return "****";
    },
};

console.log(password.value); // "****"

/*
== Задание 6 от ChatGPT ==
Создай объект person, в котором age — аксессор с валидацией: от 0 до 120 лет

person.age = 140; // ошибка в консоль
*/

const person = {
    ageValue: null,

    get age() {
        return this.ageValue;
    },

    set age(value) {
        if (0 < value && value < 120) {
            this.ageValue = value;
        };
    },
};

person.age = 140;
console.log(person.age);
person.age = 40;
console.log(person.age);

/*
== Задание 7 от ChatGPT ==
Добавь геттер isAdult, который возвращает true/false в зависимости от возраста

person.age = 17;
console.log(person.isAdult); // false
*/

const bar = {
    age: 15,

    get isAdult() {
        return this.age > 18;
    },
}

console.log(bar.isAdult);
bar.age = 19;
console.log(bar.isAdult);

/* 
== Задание 8 от ChatGPT ==
Сделай объект counter, у которого есть count, increment, decrement — реализуй через геттеры и сеттеры

counter.increment = 1;
counter.increment = 1;
counter.decrement = 1;

console.log(counter.count); // 1
*/

const counter = {
    count: 0,

    get increment() {
        return this.count;
    },

    set increment(value) {
        if (!isNaN(value) && isFinite(value)) {
            this.count += value;
        };
    },

    get decrement() {
        return this.count;
    },

    set decrement(value) {
        if (!isNaN(value) && isFinite(value)) {
            this.count -= value;
        };
    }
}

counter.increment = 1;
counter.increment = 1;
counter.increment = 23;
counter.decrement = 1;

console.log(counter.count); // 1

/*
== Задание 9 от ChatGPT ==
Создай объект userLog, где при каждом изменении username сохраняется история изменений в массив log

userLog.username = "admin";
userLog.username = "root";
console.log(userLog.log); // ["admin", "root"]
*/

const userLog = {
    history: [],
    currentUsername: "Bob",

    get username() {
        return this.currentUsername;
    },

    set username(value) {
        this.history.push(value);
        this.currentUsername = value;
    },

    get log() {
        return this.history;
    }
}

userLog.username = "admin";
userLog.username = "root";
userLog.username = "moderator";
console.log(userLog.log); // ["admin", "root"]

/*
== Задание 10 от ChatGPT ==
Напиши функцию createProtectedProperty(obj, key), которая делает свойство защищённым через геттер/сеттер

const user = { _token: "abc123" };
createProtectedProperty(user, "token");

console.log(user.token); // "****"
user.token = "new"; // меняет _token

console.log(user._token); // "new"
*/

const createProtectedProperty = (obj, key) => {
    Object.defineProperty(obj, key, {
        get() {
            return "****";
        },

        set(value) {
            obj[`_${key}`] = value;
        },
    })
};

const user2 = { _token: "abc123" };
createProtectedProperty(user2, "token");

console.log(user2.token); // "****"
user2.token = "new"; // меняет _token

console.log(user2._token); // "new"