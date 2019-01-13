//script.js
//My first script  in learning JS
const fs = require('fs');
 
const text = fs.readFileSync('script.js', 'utf8');
console.log(text);