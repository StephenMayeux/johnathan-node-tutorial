const fs = require('fs');

// Synchronous Method of reading files
// const buffer = fs.readFileSync('./poem.txt');
// const result = buffer.toString();
// console.log(result);

fs.readFile('./poem.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('There was an error:', err);
  } else {
    console.log(data);
  }
});

console.log('The end of the script...');
