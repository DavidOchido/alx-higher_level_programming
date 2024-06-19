#!/usr/bin/node
/*Write a script that prints x times “C is fun”  */
const arg = process.argv[2];
const x = parseInt(arg, 10);

if (Number.isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}

