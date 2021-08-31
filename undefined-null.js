/* 
1. variable value not assigned
2. function but don't return anything.
3. just wrote return but didnt return anything.
4. parameter that isnt passed.
5. property that doesnt exist in an object.
6. accessing array elements out of range.
7. accessing deleting array element.
8. explicitly set value to undefined.

*/

let first;
// console.log(first);
function second(x, y) {
    // const sum = x + y;
}
const result = second(3, 91);
// console.log(result);
function add(a, b) {
    const sum = a + b;
    if (b < 10) {
        return;
        8
    }
    const fun = a * b;
    return sum;
}
const fourth = add(2, 7);
// console.log(fourth);
function double(a, b) {
    const result = a * 2;
    // console.log(b);
    return result;
}
double(81);

const fifth = { name: 'sakib', age: 25, location: 'bandarban' };
// console.log(fifth.phone);

const sixth = [12, 12, 34, 45];
// console.log(sixth[3]);
delete sixth[2];
// console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh);

const myObject = { name: 'sakib', profession: null }
