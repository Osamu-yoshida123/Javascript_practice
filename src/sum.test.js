const sum = require('./sum');

test('プログラムコメントの練習', () => {
//  expect(sum(1, 2)).toBe(3);

/*
  expect(sum(1, 2)).toBe(3);
*/

expect(sum(1, 2)).toBe(3);

console.log(sum(1,2));
console.log(sum(10,20));
console.log(sum(100,20));

});

