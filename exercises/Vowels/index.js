/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(string) {
  let count = 0;

  string.toLowerCase().split('').forEach(char => {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
      count++;
    }
  });

  return count;
}

module.exports = vowels;
