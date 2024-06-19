#!/usr/bin/node
/*prints a message depending of the number of arguments passed*/
const arg = process.argv[2];
console.log(arg ? arg : "No argument");

