'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string) {
  const array = string.split(" ");
  let newArray = array.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return newArray.join(' ');
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('Hello everybody'), 'Hello Everybody')
// End of tests */
