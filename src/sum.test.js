const sum = require('./sum');

test('三項演算子', () => {
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

function addPrefix(text, prefix) {
    let pre = "デフォルト:";
    if (typeof prefix === "string") {
        pre = prefix;
    }
    return pre + text;
}

console.log(addPrefix("文字列")); // => "デフォルト:文字列"
console.log(addPrefix("文字列", "カスタム:")); // => "カスタム:文字列"



});

