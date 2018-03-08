/*
 * @Author: fei
 * @Date: 2018-03-06 15:56:55
 * @Last Modified by: fei
 * @Last Modified time: 2018-03-08 09:16:36
 */
'use strict';

const assert = require('assert');

/**
 * find smallest item index
 * @param {Array} arr original data
 */
function findSmallestIndex(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

/**
 * selection sort: small to large
 * @param {Array} arr original data
 */
function selectionSort(arr) {
    const newArr = [];
    while(arr.length > 0) {
        const smallestIndex = findSmallestIndex(arr);
        newArr.push(arr.splice(smallestIndex, 1)[0]);
    }
    return newArr;
}

/**
 * test
 */
{
    const arr = [9, 7, 8, 6, 4, 1, 3, 2, 5, 0];
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const actual = selectionSort(arr);
    console.log(`actual: ${actual}`);
    console.log(`expected: ${expected}`);
    console.log(`assert: ${!assert.deepEqual(actual, expected)}`);
}
