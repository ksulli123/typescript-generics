let greet: Function;

// greet = 'hello';

greet = (): void => {
    console.log('helolo');
}

const add = (a: number, b: number, c: number|string = 10): void => {
    console.log(a+b);
    console.log(c);
}

add(5,10);

const sum = (a: number, b: number): number => {
    return a+b;
}