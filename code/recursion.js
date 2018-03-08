/*
 * @Author: fei
 * @Date: 2018-03-08 09:10:37
 * @Last Modified by: fei
 * @Last Modified time: 2018-03-08 14:00:21
 */
'use strict';

const assert = require('assert');

/**
 * recursion factorial
 * @param {Number} num factorial number
 */
function factorial(num) {
    if (1 === num) return 1;
    else return num * factorial(num - 1);
}

/**
 * recursion factorial with tail call
 * but pay attention to "now Node.js had't support tail recursion optimization"
 * @param {Number} num factorial num
 * @param {Number} result factorial result, default = 1
 */
function tailCallFactorial(num, result = 1) {
    if (1 === num) return result;
    else return tailCallFactorial(num - 1, result * num);
}

/**
 * test
 */
{
    const num = 5;
    const expected = 120;
    const actual = factorial(num);
    console.log(`actual: ${actual}, expected: ${expected}, assert: ${!assert(actual, expected)}`);
}

{
    const num = 5;
    const expected = 120;
    const actual = tailCallFactorial(num);
    console.log(`actual: ${actual}, expected: ${expected}, assert: ${!assert(actual, expected)}`);
}
