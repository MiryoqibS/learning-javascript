/*
== Задание 1 с сайта ==
Напишите "if", аналогичный "switch"
Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

let browser = "Edge";

if (browser == "Edge") {
    alert("You've got the Edge!");
} else if (["Chrome", "Firefox", "Safari", "Opera"].includes(browser)) {
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!");
}

/*
== Задание 2 с сайта ==
Переписать условия "if" на "switch"
Перепишите код с использованием одной конструкции switch:
const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}
*/

const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
    case 0:
        alert("Вы ввели число 0");
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
};