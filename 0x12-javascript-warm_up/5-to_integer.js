#!/usr/bin/node
/*  a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer */
const args = process.argv.slice(2);const number = parseInt(args[0], 10);console.log(Number.isNaN(number) ? "Not a number" : `My number: ${number}`);

