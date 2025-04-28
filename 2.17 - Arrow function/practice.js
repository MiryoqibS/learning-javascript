/*
== Задание 1 с сайта ==
Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

const ask = (question, yes, no) => {
    if (confirm(question)) () => alert("Вы согласились.");
    else () => alert("Вы отменили выполнение.");
};
