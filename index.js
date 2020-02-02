const validator = require('validator')
const add = require('./add.js')
const fs = require('fs')
const chalk = require('chalk')

var sum = add(1, 2)

console.log(sum);

fs.writeFileSync('ruban.txt', 'My Name is Ruban')

console.log(validator.isEmail('ruban@gmail.com'));

console.log(validator.isUppercase('RUBAN'));

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));
