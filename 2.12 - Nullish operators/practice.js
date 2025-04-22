/*
== Задание 1 с сайта ==
Что выведет код ниже?
alert(undefined ?? NaN ?? null ?? "" ?? " ");
*/

alert(undefined ?? NaN ?? null ?? "" ?? " "); // NaN


/*
== Задание 2 с сайта ==
Какой будет результат выполнения этого кода?
Что будет выведено в итоге?

let city = null;
city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";
alert(city);
*/

alert(city); // Берлин

/*
== Задание 3 с сайта ==
Перепишите код используя операторы ??, ??=
Перепишите этот код используя операторы нулевого слияния и присваивания.

let num1 = 10,
    num2 = 20,
    result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}
*/

let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2
