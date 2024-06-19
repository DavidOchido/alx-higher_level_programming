#!/usr/bin/node
/*Write a script that prints a square  */
const arg = process.argv[2];
const size = parseInt(arg, 10);

if (Number.isNaN(size)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) {
        console.log('X'.repeat(size));
    }
}

