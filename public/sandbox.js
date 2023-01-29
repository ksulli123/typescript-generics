"use strict";
let greet;
// greet = 'hello';
greet = () => {
    console.log('helolo');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
const sum = (a, b) => {
    return a + b;
};
