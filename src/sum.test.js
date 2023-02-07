const sum = require('./sum');

test('プログラムコメントの練習', () => {
//  expect(sum(1, 2)).toBe(3);

/*
  expect(sum(1, 2)).toBe(3);
*/

expect(sum(1, 2)).toBe(3);

});

test('constの練習',() => {
  const booktitle = "本";
  const bookprice = 3000;
  expect(booktitle).toBe("本");
  expect(bookprice).toBe(3000);
});