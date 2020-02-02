/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */

function steps(n) {
  for (let i = 0; i < n; i++) {
    let output = '#';
    let j = 0;

    for (; j < i; j++) {
      output += '#';
    }
    for (; j < n - 1; j++) {
      output += ' ';
    }

    console.log(output);
  }
}

module.exports = steps;
