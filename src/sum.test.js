const sum = require('./sum');

test('number.parseint,floadの練習', () => {
//  expect(sum(1, 2)).toBe(3);
//  expect(sum(1, 2)).toBe(3);

/*
expect(sum(1, 2)).toBe(3);

console.log(sum(1,2));
console.log(sum(10,20));
console.log(sum(100,20));
*/

/*
const obj = {firstname:"osamu","last-name":"yoshida","age":54,nested:{value:1}}; 
expect(obj.firstname).toBe("osamu");
expect(obj.nested.value).toBe(1);
*/

/*
const emptyarray = [];

const array = [10,2,3];
console.log(array[0]);

const osamu = ["aaa",111,true,{age:20,adress:"東京"}];
console.log(osamu[0]);
console.log(osamu[1]);
console.log(osamu[2]);
console.log(osamu[3]);

*/

/*
const str = new String("文字列");

let aaa = 1;

aaa++;
console.log(aaa);

aaa++;
console.log(aaa);

console.log(aaa++);
console.log(aaa++);
console.log(aaa++);
console.log(aaa++);

console.log(aaa);

*/

expect(Number.parseInt("10",10)).toBe(10);
expect(Number.parseInt("10",10)).not.toBe("10");
expect(Number.parseInt("10")).toBe(10);

/*
expect(Number.parseInt("3.14",10)).toBe(3.14);
*/

/*
expect(Number.parseInt("3.14",10)).not.toBe("3.14");
expect(Number.parseInt("3.14")).toBe(3.14);
*/
});

