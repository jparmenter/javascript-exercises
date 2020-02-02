/**
 * Array Chunk
 *
 * For given array and chunk size, divide the array into many subarrays
 * where each subarray is of length chunk size.
 *
 * Examples:
 * chunk([1, 2, 3, 4], 2) === [[ 1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]]
 */

function chunk(array, size) {
  const result = [];
  let subset = [];
  let j = 0;

  for (let i = 0; i < array.length; i++, j++) {
    subset.push(array[i]);

    if (i === array.length - 1) {
      result.push(subset);
    } else if (j === size - 1) {
      result.push(subset);
      subset = [];
      j = 0;
    }
  }

  return result;
}

module.exports = chunk;
