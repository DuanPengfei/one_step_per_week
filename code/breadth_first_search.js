/*
 * @Author: fei
 * @Date: 2018-03-20 09:28:58
 * @Last Modified by: fei
 * @Last Modified time: 2018-03-20 17:21:05
 */
'use strict';

const assert = require('assert');

function breadthFirstSearch(graph, beFound) {
    let searchQueue = graph.root.map(child => ({ data: child, parent: 'root' }));
    const searched = {};
    while (searchQueue.length > 0) {
        const current = searchQueue.shift();
        if (!searched[current.data]) {
            searched[current.data] = true;
            if (beFound(current.data)) return current;
            searchQueue = searchQueue.concat(graph[current.data].map(child => ({ data: child, parent: current })));
        }
    }
    return null;
}

/**
 * test
 */
{
    const graph = {
        root: ['alice', 'bob', 'claire'],
        bob: ['fei', 'peggy'],
        fei: ['anuj'],
        alice: ['peggy'],
        claire: ['thom', 'jonny'],
        anuj: [],
        peggy: [],
        thom: [],
        jonny: [],
    };
    function beFound(name) {
        if ('anuj' === name) return true;
        return false;
    }
    function recursion(graph) {
        let result = '';
        if(graph.parent) {
            return result = `${graph.data} <= ${recursion(graph.parent)}`;
        }
        return 'root';
    }
    
    const expected = 'anuj <= fei <= bob <= root';
    const actual = recursion(breadthFirstSearch(graph, beFound));
    console.log(`actual: ${actual}`);
    console.log(`expected: ${expected}`);
    console.log(`assert: ${!assert.deepEqual(actual, expected)}`)
}
