'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst(string) {
  return (string.slice(0, 2));
}

function keepLast(string) {
  return (string.slice(-2));
}

function keepFirstLast(string) {
  return (string.slice(2, 4));
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('hello'), 'he')
assert.strictEqual(keepLast('hello'), 'lo')
assert.strictEqual(keepFirstLast('hello'), 'll')

// End of tests */
