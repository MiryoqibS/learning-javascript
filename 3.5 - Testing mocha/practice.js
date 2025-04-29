/*
== Задание 1 с сайта ==
Что не так с этим тестом?
Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
*/

const pow = (x, n) => {
    return x ** n;
};

describe("pow", () => {

    it("Возводить 9 в степень 1", () => {
        assert.equal(pow(9, 1), 9 ** 1);      
    });

    it("Возводить 9 в степень 2", () => {
        assert.equal(pow(2, 2), 2 ** 2);
    });

    it("Возводить 9 в степень 3", () => {
        assert.equal(pow(3, 3), 3 ** 3);
    });

});