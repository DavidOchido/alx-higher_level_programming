#!/usr/bin/node
/*a script that computes and prints a factorial  */
function factorial(n) {
    if (Number.isNaN(n)) {
        return 1;
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const arg = process.argv[2];
const num = parseInt(arg, 10);

console.log(factorial(num));

