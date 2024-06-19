#!/usr/bin/node
/*a script that prints two arguments passed to it, in the following format: “ is ”*/
const args = process.argv.slice(2);const output = `${args[0]} is ${args[1]}`;console.log(output);

