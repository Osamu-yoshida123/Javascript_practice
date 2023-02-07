const sum = require('./sum');

test('プログラムコメントの練習', () => {
//  expect(sum(1, 2)).toBe(3);

/*
  expect(sum(1, 2)).toBe(3);
*/

expect(sum(1, 2)).toBe(3);

});

test('constの練習',() => {
let booktitle;
expect(booktitle).toBe(undefined);
let booktitle = 3000;

booktitle = "雑誌";

  const booktitle = "本";
  const bookprice = 3000;
 
  expect(booktitle).toBe("本");
  expect(bookprice).toBe(3000);

  bookprice = 5000;


});