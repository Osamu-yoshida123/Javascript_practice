const sum = require('./sum');

test('プログラムコメントの練習', () => {
//  expect(sum(1, 2)).toBe(3);
//  expect(sum(1, 2)).toBe(3);

/*
expect(sum(1, 2)).toBe(3);

console.log(sum(1,2));
console.log(sum(10,20));
console.log(sum(100,20));
*/

const str1 = "ダブル";
const str2 = 'ダブル';

expect(str1===str2).toBe(true);

const str3= 'あああ\n いいい\nう';

const str4 ="あああ\nいいい\nう";

expect(str3===str4).toBe(true);





});

