/*
 * @Author: fei
 * @Date: 2018-03-05 09:34:34
 * @Last Modified by: fei
 * @Last Modified time: 2018-03-08 15:00:44
 */
'use strict';

const assert = require('assert');

/**
 * binary search
 * @param {Array} bucket data to search
 * @param {Number} target target position
 */
function binarySearch(bucket, target) {
    let low = 0;
    let high = bucket.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (target === bucket[mid]) return mid;
        if (bucket[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return null;
}

/**
 * test
 */
{
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const item = 4;
    const expected = 3;
    const actual = binarySearch(data, item);
    console.log(`actual: ${actual}, expected: ${expected}, assert: ${!assert.equal(actual, expected)}`);
}

{
    const data = ['ChenJinghui', 'DuanPengfei', 'JiQinghua', 'XuBo', 'YuanXiaoshan', 'ZhangChao'];
    const item = 'JiQinghua';
    const expected = 2;
    const actual = binarySearch(data, item);
    console.log(`actual: ${actual}, expected: ${expected}, assert: ${!assert.equal(actual, expected)}`);
}
