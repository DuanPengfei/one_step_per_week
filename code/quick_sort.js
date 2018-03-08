/*
 * @Author: fei
 * @Date: 2018-03-08 14:59:18
 * @Last Modified by: fei
 * @Last Modified time: 2018-03-08 15:13:53
 */
'use strict';

const assert = require('assert');

/**
 * quick sort 
 * @param {Array} arr original data
 */
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const little = [];
        const large = [];
        const pivot = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if(arr[i] <= pivot) little.push(arr[i]);
            else large.push(arr[i]);
        }
        return quickSort(little).concat([ pivot ]).concat(quickSort(large));
    }
}

/**
 * test
 */
{
    const arr = [9, 7, 8, 6, 4, 1, 3, 2, 5, 0];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const actual = quickSort(arr);
    console.log(`actual: ${actual}`);
    console.log(`expected: ${expected}`);
    console.log(`assert: ${!assert.deepEqual(actual, expected)}`)
}
