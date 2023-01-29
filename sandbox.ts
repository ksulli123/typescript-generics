let age: any = 25;
console.log(age);

age = 'test';
console.log(age);

age = false;
console.log(age);

age = { name: 'luigi' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

let ninja: { name: any, age: any };

ninja = {name: 25, age: '52' }
console.log(ninja);

ninja = {name: 'josh', age: 51 }
console.log(ninja);
