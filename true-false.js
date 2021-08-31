/* 
false:
empty string
null
nan
0
undefined

##truthy:
true
any number(positive or negative)
without empty string
empty array
empty object
anything else that is not falsy will br truthy
[]
{}




*/
/* let x = {};
console.log('value of x', x)
if (x) {
    console.log('variable is truth')
}
else {
    console.log('variable is false')
} */

// let p = 'JavaScript';
// let q = p; p = 'React';
// console.log(q);

/* const isTrue = 'false';

if (!isTrue) {

    console.log('hello');

}

else {
    console.log('world');

} */

/* function sum(p, q) {

    console.log(p + q);

}

const result = sum(2, 3);

console.log(result); */

function work(x, y = 4) {

    return x + y;

}

console.log(work(32);