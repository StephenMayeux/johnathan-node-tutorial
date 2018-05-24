const fs = require('fs');

const buffer = fs.readFileSync('./poem.txt');
const result = buffer.toString();
console.log(result);

console.log('The end of the script...');
